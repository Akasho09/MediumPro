import { SearchBox } from "../components/searchbox";
import DP from "../components/DP";
import { Link } from "react-router-dom";
import { Notifi } from "../components/notifi";
import Neww from "../components/new";

export default function TopBar() {
  return (
    <div className="w-full bg-white shadow-sm px-6 pb-3 flex justify-between items-center sticky top-0 z-50">
      {/* Left Section: Logo + Search */}
      <div className="flex items-center gap-6">
        <Link to="/blogs">
          <h1 className="text-2xl font-extrabold text-gray-800 hover:text-blue-600 transition">
            MediumPro
          </h1>
        </Link>
        <SearchBox />
      </div>

      {/* Right Section: New + Notifications + Profile */}
      <div className="flex items-center gap-4">
        <Link to="/create">
          <Neww />
        </Link>
        <Notifi />
        <DP />
      </div>
    </div>
  );
}
