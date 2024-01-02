import Item from "./item/Item";

function SubHeader() {
  const items = [
    "Amazon Basics",
    "Best Sellers",
    "Customer Service",
    "Fresh",
    "Gift Ideas",
    "Amazon Business",
    "Home & Kitchen",
    "Buy Again",
    "Home Improvement",
  ];

  const dropDownItems = ["Fresh", "Amazon Business"];

  return (
    <div className="bg-slate-700 flex h-9 box-border items-center pl-4">
      <i className="fa-solid fa-bars mr-1" style={{ color: "#fafafa" }}></i>
      <p className="text-white font-bold font-sans ml-1 pr-1">All</p>
      {items.map((item) => {
        return <Item itemName={item} dropDown={dropDownItems.includes(item)} />;
      })}

      <p className="text-white font-sans text-m font-bold  flex-1 text-right pr-6">
        Tailor Swift: The Eras Tour{" "}
        <span className="text-yellow-300">Right Now</span>
      </p>
    </div>
  );
}

export default SubHeader;
