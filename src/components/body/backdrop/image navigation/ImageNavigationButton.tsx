export interface NavProps {
  direction: "left" | "right";
  navFunction: () => void;
}

function ImageNavigationButton({ direction, navFunction }: NavProps) {
  const classes = ["fa-solid", "fa-chevron-left", "z-10", "fa-2xl"];

  const classMapper = {
    left: ["fa-chevron-left"],
    right: ["fa-chevron-right"],
  };

  return (
    <button onClick={navFunction}>
      <i
        className={[...classes, ...classMapper[direction]].join(" ")}
        style={{
          color: "#ffffff",
        }}
      ></i>
    </button>
  );
}

export default ImageNavigationButton;
