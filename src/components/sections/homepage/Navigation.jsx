import { useState } from "react";
import { useGetPublisherQuery } from "../../../services/publishersApi";
import SearchInput from "../../ui/SearchInput";
import { Link } from "react-router-dom";
import NavSkeleton from "./NavSkeleton";

export default function Navigation() {
  const { data: publishers, isLoading } = useGetPublisherQuery();
  const [whichTab, setWhichTab] = useState("");

  return (
    <div className="border px-5 rounded-[3px] border-gray-300 bg-gray-100">
      <div className="flex flex-wrap text-base justify-center md:justify-start space-x-6">
        {isLoading === true ? (
          <div className="py-3 flex items-center gap-3">
            <NavSkeleton count={5} />
          </div>
        ) : (
          <div className=" py-3">
            {publishers?.sources.slice(0, 6).map((item) => (
              <Link
                to={`/:${item.name}/article`}
                state={{ whichTab: item.id }}
                className={`text-sm font-medium  cursor-pointer mr-4 ${
                  whichTab === item.id && "underline"
                }`}
                onClick={() => setWhichTab(item.id)}
                key={item.id}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
        <div className="hidden md:block">
          <span className="block h-full w-[1px] bg-gray-300" />
        </div>
        <div className="w-full  py-[14px] md:w-auto">
          <SearchInput />
        </div>
      </div>
    </div>
  );
}
