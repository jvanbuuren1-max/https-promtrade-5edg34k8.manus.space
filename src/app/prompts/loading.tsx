export default function PromptsLoading() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="h-8 w-48 bg-slate-200 rounded-lg animate-pulse mb-2" />
          <div className="h-5 w-72 bg-slate-100 rounded-lg animate-pulse" />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="h-10 bg-slate-100 rounded-xl animate-pulse mb-8" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-200 bg-white p-5 space-y-3"
            >
              <div className="h-5 w-20 bg-slate-100 rounded-full animate-pulse" />
              <div className="h-5 w-3/4 bg-slate-200 rounded-lg animate-pulse" />
              <div className="h-4 w-full bg-slate-100 rounded-lg animate-pulse" />
              <div className="h-4 w-2/3 bg-slate-100 rounded-lg animate-pulse" />
              <div className="h-16 bg-slate-50 rounded-lg animate-pulse" />
              <div className="flex justify-between pt-3 border-t border-slate-100">
                <div className="h-4 w-24 bg-slate-100 rounded animate-pulse" />
                <div className="h-6 w-16 bg-slate-200 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
