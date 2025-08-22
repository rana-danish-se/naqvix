// app/products/[id]/loading.jsx

export default function Loading() {
  return (
    <div>
      <div className="animate-pulse">
        <div className="h-6 w-48 bg-gray-300 rounded mb-4"></div>
        <div className="h-4 w-32 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}
