type SendEmailArgs = {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  /** Which verified sender to use (falls back to Zepto from-address env vars). */
  from?: "contact" | "noreply" | "default";
  replyTo?: string;
};

type MailAddress = {
  address: string;
  name?: string | null;
};

function getTrimmedEnv(...names: string[]) {
  for (const name of names) {
    const value = process.env[name]?.trim();
    if (value) return value;
  }
  return "";
}

function ensureEnv(value: string, label: string) {
  if (!value) {
    throw new Error(`Missing required env: ${label}`);
  }
  return value;
}

function parseFromAddress(raw: string): MailAddress {
  const trimmed = raw.trim();
  const match = trimmed.match(/^(.+?)\s*<([^>]+)>$/);
  if (match) {
    return { name: match[1].trim(), address: match[2].trim() };
  }
  return { address: trimmed };
}

function resolveFromAddress(channel: SendEmailArgs["from"] = "default"): MailAddress {
  const defaultName =
    getTrimmedEnv("ZEPTOMAIL_FROM_NAME", "ZEPTO_MAIL_FROM_NAME") || "Sophrion";

  const contactRaw = getTrimmedEnv("EMAIL_FROM_CONTACT");
  const noreplyRaw = getTrimmedEnv("EMAIL_FROM_NOREPLY");
  const zeptoRaw = getTrimmedEnv("ZEPTOMAIL_FROM_EMAIL", "ZEPTO_MAIL_FROM_EMAIL");

  if (channel === "contact" && contactRaw) {
    return parseFromAddress(contactRaw);
  }

  if (channel === "noreply" && noreplyRaw) {
    return parseFromAddress(noreplyRaw);
  }

  if (zeptoRaw) {
    const parsed = parseFromAddress(zeptoRaw);
    return { ...parsed, name: parsed.name || defaultName };
  }

  if (contactRaw) {
    return parseFromAddress(contactRaw);
  }

  throw new Error(
    "Missing sender: set ZEPTOMAIL_FROM_EMAIL (and optionally EMAIL_FROM_CONTACT / EMAIL_FROM_NOREPLY)"
  );
}

function normalizeRecipients(to: string | string[]): MailAddress[] {
  const list = Array.isArray(to) ? to : [to];
  const cleaned = list.map((item) => item.trim()).filter(Boolean);

  if (!cleaned.length) {
    throw new Error("At least one recipient is required.");
  }

  return cleaned.map((address) => ({ address }));
}

export async function sendEmail({
  to,
  subject,
  html,
  text,
  from = "default",
  replyTo,
}: SendEmailArgs) {
  const apiKey = ensureEnv(
    getTrimmedEnv("ZEPTOMAIL_API_KEY", "ZEPTO_MAIL_TOKEN"),
    "ZEPTOMAIL_API_KEY or ZEPTO_MAIL_TOKEN"
  );

  const fromAddress = resolveFromAddress(from);
  const fromName = fromAddress.name || "Sophrion";

  const host = (
    getTrimmedEnv("ZEPTOMAIL_HOST") || "https://api.zeptomail.in"
  ).replace(/\/+$/, "");

  const recipients = normalizeRecipients(to);
  const replyToAddress =
    replyTo?.trim() ||
    getTrimmedEnv("CONTACT_INBOX") ||
    parseFromAddress(getTrimmedEnv("EMAIL_FROM_CONTACT") || "").address;

  const payload: Record<string, unknown> = {
    from: {
      address: fromAddress.address,
      name: fromName,
    },
    to: recipients.map((recipient) => ({
      email_address: {
        address: recipient.address,
        ...(recipient.name ? { name: recipient.name } : {}),
      },
    })),
    subject,
    htmlbody: html,
    ...(text ? { textbody: text } : {}),
    ...(replyToAddress
      ? {
          reply_to: [
            {
              address: replyToAddress,
              name: fromName,
            },
          ],
        }
      : {}),
    track_clicks: true,
    track_opens: true,
  };

  const response = await fetch(`${host}/v1.1/email`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Zoho-enczapikey ${apiKey}`,
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  const raw = await response.text();

  if (!response.ok) {
    throw new Error(
      `ZeptoMail failed (${response.status}): ${raw || "<empty response>"}`
    );
  }

  try {
    return raw ? JSON.parse(raw) : { ok: true };
  } catch {
    return raw;
  }
}
