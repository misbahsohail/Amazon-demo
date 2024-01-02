import { products } from "../../../../assets/products";

function card() {
  return (
    <div className="flex h-2/3 border-2 border-red-500 overflow-hidden space-x-5 px-5 pb-5">
      <div className="flex-1 bg-white p-4 z-10 h-5/6 flex flex-col">
        <p className="font-bold text-xl ">Pick up where you left off</p>

        <div className=" grid grid-rows-2 grid-cols-2 gap-4 items-center p-4 h-full">
          {products.map(({ photos, name }) => {
            return (
              <div className=" p-3">
                <img src={photos[0]} className="pb-4" />
                <p className="text-xs">{name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-1 bg-white p-4 h-5/6 z-10">
        <p className="font-bold text-xl">Keep shopping for</p>
      </div>
      <div className="flex-1 bg-white p-4  h-5/6 z-10">
        <p className="font-bold text-xl">Deals for you in Kitchen & Dining</p>
      </div>
      <div className="flex-1 bg-white p-4 h-5/6 z-10">
        <p className="font-bold text-xl">4 + deals for you</p>
      </div>
    </div>
  );
}

export default card;
