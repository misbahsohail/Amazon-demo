interface ItemProps {
  itemName: string;
  dropDown?: boolean;
}

function generateItem(itemName: string, paddingRight: string) {
  const classes = [
    "text-white",
    "font-sans",
    "text-center",
    "text-sm",
    "font-semibold",
    paddingRight,
  ];

  return <p className={classes.join(" ")}>{itemName}</p>;
}

function Item({ itemName, dropDown }: ItemProps) {
  if (dropDown) {
    return (
      <div className="flex pr-4">
        {generateItem(itemName, "pr-1")}
        <i
          className="fa-sharp fa-solid fa-caret-down fa-xs mt-3"
          style={{ color: "#9ca3af" }}
        ></i>
      </div>
    );
  }
  return generateItem(itemName, "pr-4");
}

export default Item;
