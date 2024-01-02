import { useState } from "react";
import backGround_1 from "../../../assets/backGround_1.jpg";
import backGround_2 from "../../../assets/backGround_2.jpg";
import backGround_3 from "../../../assets/backGround_3.jpg";
import ImageNavigationButton, {
  NavProps,
} from "./image navigation/ImageNavigationButton";
import Card from "./card/Card";

function BackDrop() {
  const images = [backGround_1, backGround_2, backGround_3];

  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPreviousImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const navigation: NavProps[] = [
    { direction: "left", navFunction: showPreviousImage },
    { direction: "right", navFunction: showNextImage },
  ];

  return (
    <div className="relative h-full flex flex-col">
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="absolute z-0 h-full object-cover w-full"
      />

      <div className="flex-1 flex justify-between px-5 z-10">
        {navigation.map(({ direction, navFunction }) => {
          return (
            <ImageNavigationButton
              direction={direction}
              navFunction={navFunction}
            />
          );
        })}
      </div>
      <Card />
    </div>
  );
}

export default BackDrop;
