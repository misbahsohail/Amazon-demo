import Card from "./card/Card";

function Cards() {
  return (
    <div className="flex h-[420px] z-10 overflow-hidden space-x-5 px-5 pb-5">
      <Card
        heading="Pick up where you left off"
        footer="See more"
        type="Products"
      />
      <Card
        heading="Keep shopping for"
        footer="View your browsing history"
        type="History"
      />
      <Card
        heading="Deals for you in Kitchen & Dining"
        footer="See all deals"
        type="Deals"
      />
      <Card
        heading="4+ star deals for you"
        footer="See all deals"
        type="Deals"
      />
    </div>
  );
}

export default Cards;
