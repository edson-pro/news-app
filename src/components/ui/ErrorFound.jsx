export default function ErrorFound() {
  return (
    <div className="flex justify-center mx-auto max-w-3xl- items-center flex-col h-[80svh] w-[90vw]">
      <h1 className="text-lg font-semibold text-center mt-6 mb-2">
        There was an error
      </h1>
      <p className="text-[#747B7D] text-center text-base font-medium">
        Please try again later.
      </p>
    </div>
  );
}
