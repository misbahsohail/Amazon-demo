function SubHeader() {
  return (
    <div className="bg-slate-700 flex h-9 box-border items-center pl-4">
      <i className="fa-solid fa-bars mr-1" style={{ color: "#fafafa" }}></i>
      <p className="text-white font-bold font-sans ml-1 pr-1">All</p>

      <p className="text-white font-sans text-center text-sm font-semibold pr-4">
        Amazon Basics
      </p>
      <p className="text-white font-sans text-center text-sm font-semibold pr-4">
        Best Sellers
      </p>
      <p className="text-white font-sans text-center text-sm font-semibold pr-4">
        Customer Service
      </p>
      <div className="flex pr-4">
        <p className="text-white font-sans text-center text-sm font-semibold pr-1">
          Fresh
        </p>

        <i
          className="fa-sharp fa-solid fa-caret-down fa-xs mt-3"
          style={{ color: "#9ca3af" }}
        ></i>
      </div>

      <p className="text-white font-sans text-center text-sm font-semibold pr-4">
        Gift Ideas
      </p>
      <div className="flex pr-4">
        <p className="text-white font-sans text-center text-sm font-semibold pr-1">
          Amazon Business
        </p>

        <i
          className="fa-sharp fa-solid fa-caret-down fa-xs mt-3"
          style={{ color: "#9ca3af" }}
        ></i>
      </div>
      <p className="text-white font-sans text-center text-sm font-semibold pr-4">
        Home & Kitchen
      </p>
      <p className="text-white font-sans text-center text-sm font-semibold pr-4">
        Buy Again
      </p>

      <p className="text-white font-sans text-m font-bold  flex-1 text-right pr-6">
        Tailor Swift: The Eras Tour{" "}
        <span className="text-yellow-300">Right Now</span>
      </p>
    </div>
  );
}

export default SubHeader;
