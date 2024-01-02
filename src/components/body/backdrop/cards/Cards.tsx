import { products } from "../../../../assets/products";

function Cards() {
  return (
    <div className="flex h-[420px] z-10 overflow-hidden space-x-5 px-5 pb-5">
      <div className="flex-1 bg-white p-4 flex flex-col ">
        <p className="font-bold text-xl">Pick up where you left off</p>
        <div className="grid grid-rows-2 grid-cols-2 gap-4 p-4  flex-1">
          {products.map(({ photos, description }) => {
            return (
              <div className="flex flex-col  h-full">
                <img
                  src={photos[0]}
                  className="flex-1 max-h-[120px] object-contain"
                />
                <p className="text-xs text-left max-w-full overflow-hidden text-ellipsis whitespace-nowrap ">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-1 bg-white p-4">
        <p className="font-bold text-xl">Keep shopping for</p>
      </div>
      <div className="flex-1 bg-white p-4 ">
        <p className="font-bold text-xl">Deals for you in Kitchen & Dining</p>
      </div>
      <div className="flex-1 bg-white p-4">
        <p className="font-bold text-xl">4 + deals for you</p>
      </div>
    </div>
  );
}

export default Cards;
