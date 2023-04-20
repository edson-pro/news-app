import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-between items-center py-3 border-b-[0px] border-gray-900">
      <Link className="flex cursor-pointer" to="/">
        <span className="text-2xl text-indigo-500 font-semibold">E-</span>
        <span className="text-2xl font-normal">News</span>
      </Link>
      <div className="">
        <Link
          to="/"
          target="_blank"
          rel="noreferrer"
          className="bg-transparent text-sm border bg-indigo-200 text-indigo-600 border-indigo-500 rounded-[3px] pt-1.5 pb-2 px-4"
        >
          Get started
        </Link>
      </div>
    </div>
  );
}
