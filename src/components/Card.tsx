import Button from "./ui/Button";

const Card = () => {
  return (
    <div className="w-[160px] h-[321px] rounded-md border border-black">
      <div className="h-[216px] w-[160px] bg-blue-red-gradient rounded-lg"></div>
      <div>
        <p className="mt-1 font-bold text-market-red">8.21</p>
        <p className="text-market-blue">Essence Mascara Lash Princess</p>
        <Button />
      </div>
    </div>
  );
};

export default Card;