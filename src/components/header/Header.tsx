import amazonLogo from "../../assets/amazon-logo.png";
import locationIcon from "../../assets/location.png";
import germanFlag from "../../assets/german-flag.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

function Header() {
  return (
    <div className=" bg-slate-900 flex p-4 box-border justify-between">
      <div className="container relative w-24">
        <div className="absolute z-0 flex">
          <img src={amazonLogo} alt="amazon logo" className="w-20 invert" />
          <span className="text-white text-xs font-bold mt-3">.de</span>
        </div>
        <span className="absolute z-10 text-gray-400 font-bold font-sans mt-5 ml-12">
          prime
        </span>
      </div>

      <div className="text-white mt-2 ">
        <p className="text-xs ml-5 text-slate-300 font-sans ">
          Deliver to Misbah
        </p>
        <p className="flex ml-1">
          <img src={locationIcon} className="invert w-4 h-4"></img>
          <p className="font-bold text-sm leading-3">Hamburg 20537</p>
        </p>
      </div>

      <div className="flex flex-1 max-w-[790px] border-solid rounded-md overflow-hidden">
        <select className="text-xs bg-slate-200 border-none w-16 text-center font-sans">
          <option selected>All</option>
        </select>
        <input className="px-4 w-full border-none" placeholder="Search"></input>
        <button className="bg-orange-500 w-11 border-none">
          <i className="fa fa-search"></i>
        </button>
      </div>

      <div className="bg-slate-900 border-none  w-16  font-sans text-white text-sm font-bold  flex  pt-2">
        <span>
          <img
            src={germanFlag}
            className="h-8 mr-10 mt-1"
            alt="German Flag"
          ></img>
        </span>
        <p className="mt-3">EN</p>
        <div className="ml-1 mt-4">
          <i
            className="fa-sharp fa-solid fa-caret-down fa-xs"
            style={{ color: "#9ca3af" }}
          ></i>
        </div>
      </div>

      <div className="text-white mt-2 ">
        <p className="text-xs text-slate-300 font-sans ">Hello, Misbah</p>

        <div className="flex ">
          <p className="font-bold text-sm leading-3 ">Account & Lists</p>
          <div className="ml-1 mt-[-3px]">
            <i
              className="fa-sharp fa-solid fa-caret-down fa-xs"
              style={{ color: "#9ca3af" }}
            ></i>
          </div>
        </div>
      </div>

      <div className="text-white mt-2 ">
        <p className="text-xs text-slate-300 font-sans ">Returns</p>

        <p className="font-bold text-sm leading-3">& Orders</p>
      </div>

      <div className="flex">
        <div className="container relative">
          <span className="absolute z-10 text-orange-500 mt-2 ml-3 font-bold ">
            1
          </span>
          <FontAwesomeIcon
            icon={faCartShopping}
            className="shopping-cart-icon h-7 mt-3 mr-2 z-0"
          />
        </div>

        <div className="text-white mt-2 ">
          <p className="text-xs text-slate-300 font-sans ">Shopping-</p>

          <p className="font-bold text-sm leading-3">Basket</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
