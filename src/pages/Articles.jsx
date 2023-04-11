import { useLocation } from "react-router-dom";
import Blog from "../components/sections/articlespage/Blog";
import Navigation from "../components/sections/homepage/Navigation";

export default function Articles() {
  const { state } = useLocation();
  return (
    <div>
      <Navigation />

      <Blog whichTab={state.whichTab} />
    </div>
  );
}
