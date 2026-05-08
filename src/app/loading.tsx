export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-brand-600 mx-auto mb-4" />
        <p className="text-sm text-slate-500">Loading...</p>
      </div>
    </div>
  );
}
