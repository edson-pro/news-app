export default function NotFound() {
  return (
    <div className="flex justify-center mx-auto max-w-3xl- items-center flex-col h-[80svh] w-[90vw]">
      <h1 className="text-lg font-semibold text-center mt-6 mb-2">
        No results found
      </h1>
      <p className="text-[#747B7D] text-center text-base font-medium">
        Try adjusting your search or filter to find what you're looking for.
      </p>
    </div>
  );
}
