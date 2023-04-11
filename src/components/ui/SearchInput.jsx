import { useState } from "react";
import { Search } from "react-feather";
import { useDispatch } from "react-redux";
import { setArticles } from "../../features/articles";
import { useSearchArticlesQuery } from "../../services/articlesApi";

export default function SearchInput() {
  const [search, setSearch] = useState("");
  const { data: article } = useSearchArticlesQuery(search);
  const dispatch = useDispatch();

  function searchArticle(event) {
    event.preventDefault();
    dispatch(setArticles(article));
  }

  return (
    <form className="flex gap-2 items-center w-full" onSubmit={searchArticle}>
      <Search size={15} />
      <input
        type="text"
        onChange={(event) => setSearch(event.target.value)}
        value={search}
        className="outline-none bg-transparent text-sm placeholder:text-black"
        placeholder="Search..."
      />
      <button type="submit"></button>
    </form>
  );
}
