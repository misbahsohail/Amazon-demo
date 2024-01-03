import { products } from "../../../../../assets/products";

interface CardProps {
  heading: string;
  footer: string;
  type: "Products" | "History" | "Deals";
}

function Card({ heading, footer, type }: CardProps) {
  return (
    <div className="flex-1 bg-white p-4 flex flex-col pb-4 pt-5 h-[420px]">
      <p className="font-bold text-xl">{heading}</p>
      <div className="grid grid-rows-2 grid-cols-2 gap-4 p-4  flex-1">
        {products.map(({ photos, description, views, discountPercentage }) => {
          return (
            <div className="flex flex-col  h-full">
              <img
                src={photos[0]}
                className="flex-1 max-h-[120px] object-contain"
              />
              {["Products", "History"].includes(type) && (
                <p className="text-xs text-left max-w-full overflow-hidden text-ellipsis whitespace-nowrap ">
                  {description}
                </p>
              )}
              {type === "History" && (
                <p className="text-xs text-left text-gray-400 ">
                  {views} viewed
                </p>
              )}
              {type === "Deals" && (
                <div className="flex">
                  <div className="text-white bg-red-700 text-xs flex flex-col align-middle font-semibold pt-1 pb-1 border-r-2 pr-[6px]  pl-[6px]  m-1">
                    <span>{discountPercentage}% off</span>
                  </div>
                  <div className="text-red-700 text-xs flex-1 font-bold">
                    Limited time deal
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <p className=" font-semibold text-xs text-emerald-700">{footer}</p>
    </div>
  );
}

export default Card;
