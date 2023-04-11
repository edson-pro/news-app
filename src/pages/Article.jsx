import { useLocation } from "react-router-dom";
import getDateTime from "../utils/getDateTime";
import Navigation from "../components/sections/homepage/Navigation";

export default function Article() {
  const { state } = useLocation();
  const date = new Date(state.publishedAt);
  return (
    <div>
      <Navigation />

      <div className="py-10">
        <div className="md:col-span-2 mb-10  max-w-3xl mx-auto my-auto">
          <img
            src={state.urlToImage}
            className="w-full  rounded-md object-cover"
            alt={state.title}
          />
        </div>
        <div className="flex max-w-3xl mx-auto flex-col gap-8 my-auto">
          <h1 className="text-2xl font-bold">{state.title}</h1>
          <p>{state.description}</p>
          <div className="flex justify-between">
            <p className="font-bold">{state.source.name}</p>
            <div className="flex font-medium gap-2 items-center text-gray-500 text-sm font-light">
              <span>{getDateTime(date.getMonth(), date.getDay())}</span>
              <span className="block w-1 h-1 rounded-full bg-gray-700" />
              <span>{date.getMinutes()} min</span>
            </div>
          </div>
          <a href={state.url} target="_blank" rel="noreferrer">
            <button className="bg-indigo-500 py-3 px-12 rounded-sm text-white w-fit">
              Read More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
