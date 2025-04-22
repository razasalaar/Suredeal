import SearchBar from "./SearchBar";
import UserDropdown from "./ProfileMenu";
import LanguageDropdown from "./LangDrop.jsx";
export default function Navbar() {
  return (
    <nav className="bg-salte-100 px-4  py-2 rounded mb-4 max-md:hidden">
      <div className="flex items-center justify-between">
        <SearchBar />

        <div className="flex items-center">
          <LanguageDropdown />

          <UserDropdown />
        </div>
      </div>
    </nav>
  );
}
