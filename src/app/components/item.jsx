import Link from "next/link";

const Card = ({ item }) => {
  return (
    <div className="flex  justify-center">
      <Link
        key={item.id}
        href={`/menu/${item.id}`}
        className=" border-2 w-[200px] shadow-lg rounded-md flex flex-col   ">
        <img
          src={item.images[0]}
          alt={item.title}
          className=" w-full h-36 border-b-2 "
        />
        <p className=" flex justify-center items-center px-2 text-lg py-1  mt-2">
          {item.title}
        </p>
      </Link>
    </div>
  );
};

export default Card;
