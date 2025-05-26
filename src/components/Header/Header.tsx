import { Link } from "react-router-dom";
import Icon from "@/components/Icon/Icon";

const Header = () => {
  const redirectionList = ["DASHBOARD", "APPLY LIST", "SETTING", "EVALUATION"];

  return (
    <header
      className="fixed top-0 w-full z-50
              bg-gradient-to-b from-[#121212] from-30% to-transparent text-white"
    >
      <div className="flex items-center justify-between z-50 px-16 py-8">
        <Link to="/" className="z-50">
          <Icon type="TaveLogo" width={100} height={40} />
        </Link>
        <nav>
          <ul className="flex gap-x-4 font-base items-center">
            {redirectionList.map((item, index) => (
              <li
                key={index}
                className="hover:bg-[#2A303C] px-4 py-3 rounded-xl text-gray-400 hover:text-white"
              >
                <Link
                  to={`/${
                    item === "APPLY LIST" ? "applies" : item.toLowerCase()
                  }`}
                  className="relative z-50"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="relative z-50 bg-[#2A303C] py-2 px-4 rounded-[10px] cursor-pointer flex gap-2"
          onClick={() => {}}
        >
          홍길동님
          <Icon type="ChevronDown" size="S" />
        </button>
      </div>
    </header>
  );
};

export default Header;
