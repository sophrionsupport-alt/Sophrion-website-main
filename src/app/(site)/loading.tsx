export default function Loading() {
  return (
    <div className="mx-auto flex min-h-[55vh] w-full max-w-7xl items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/3 p-6 shadow-[0_20px_70px_-45px_hsl(var(--cyan-500)/0.55)] backdrop-blur sm:p-8">
        <div className="h-3 w-28 animate-pulse rounded-full bg-white/12" />
        <div className="mt-5 space-y-3">
          <div className="h-8 w-4/5 animate-pulse rounded-xl bg-white/10" />
          <div className="h-8 w-3/5 animate-pulse rounded-xl bg-white/10" />
        </div>
        <div className="mt-7 space-y-3">
          <div className="h-4 w-full animate-pulse rounded-full bg-white/8" />
          <div className="h-4 w-11/12 animate-pulse rounded-full bg-white/8" />
          <div className="h-4 w-2/3 animate-pulse rounded-full bg-white/8" />
        </div>
      </div>
    </div>
  );
}
