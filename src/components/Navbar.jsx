import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav, index) => (
            <div
              key={index}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all "
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="flex gap-7 max-sm:flex-1 items-baseline max-sm:justify-items-end">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bagImg" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
