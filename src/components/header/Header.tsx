import amazonLogo from "../../assets/amazon-logo.png";
import locationIcon from "../../assets/location.png";
import germanFlag from "../../assets/german-flag.svg";

function Header() {
  return (
    <div className=" bg-slate-900 flex p-4 box-border justify-between">
      <div className="container relative w-24">
        <div className="absolute z-0 flex">
          <img src={amazonLogo} alt="amazon logo" className="w-20 invert" />
          <span className="text-white text-xs font-bold mt-1">.de</span>
        </div>
        <span className="absolute z-10 text-gray-400 font-bold font-sans mt-5 ml-12">
          prime
        </span>
      </div>

      <div className="text-white ">
        <p className="text-xs ml-5 text-slate-300 font-sans ">
          Deliver to Misbah
        </p>
        <p className="flex ml-1">
          <img src={locationIcon} className="invert w-4 h-4"></img>
          <p className="font-bold text-sm leading-1">Hamburg 20537</p>
        </p>
      </div>

      <div className="flex flex-1 max-w-[790px] border-solid rounded-md overflow-hidden">
        <select className="text-xs bg-slate-200 border-none w-16 text-center font-sans">
          <option selected>All</option>
        </select>
        <input className="px-4 w-full border-none" placeholder="Search"></input>
        <button className="bg-orange-500 w-11 h-10 border-none">
          <i className="fa fa-search"></i>
        </button>
      </div>

      <div className="bg-slate-900 border-none  w-16 text-center font-sans text-white text-sm font-bold  flex align-middle">
        <span>
          <img
            src={germanFlag}
            className="ml-4 h-9 mr-10"
            alt="German Flag"
          ></img>
        </span>
        <p className="mt-2">EN</p>
        <div className="mt-2">
          <i
            className="fa-solid fa-caret-down"
            style={{ color: "#ffffff" }}
          ></i>
        </div>
      </div>

      <div className="text-white ">
        <p className="text-xs text-slate-300 font-sans ">Hello, Misbah</p>

        <p className="font-bold text-sm leading-1">Account & Lists</p>
      </div>

      <div className="text-white ">
        <p className="text-xs text-slate-300 font-sans ">Returns</p>

        <p className="font-bold text-sm leading-1">& Orders</p>
      </div>

      <div className="text-white">
        <p className="text-xs text-slate-300 font-sans ">count</p>

        <p className="font-bold text-sm leading-1">Cart</p>
      </div>
    </div>
  );
}

export default Header;
