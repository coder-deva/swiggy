import { GiRoundStar } from "react-icons/gi";
export const ScrollHero = () => {
  const heroCard = [
    {
      hotelname: "Adil Hotel",
      rating: "4.2 ",
      delivery: ". 45-50 mins",
      place: "North Indian,South Indian,Anna nagar",
      img: "https://ik.imagekit.io/os5tqthul/swiggy/pictures/card10.avif?updatedAt=1723193884696",
    },
    {
      hotelname: "Adil Hotel",
      rating: "4.2 ",
      delivery: ". 45-50 mins",
      place: "North Indian,South Indian,Anna nagar",
      img: "https://ik.imagekit.io/os5tqthul/swiggy/pictures/card10.avif?updatedAt=1723193884696",
    },
    {
      hotelname: "Adil Hotel",
      rating: "4.2 ",
      delivery: ". 45-50 mins",
      place: "North Indian,South Indian,Anna nagar",
      img: "https://ik.imagekit.io/os5tqthul/swiggy/pictures/card1.avif?updatedAt=1723193884705",
    },
    {
      hotelname: "Adil Hotel",
      rating: "4.2 ",
      delivery: ". 45-50 mins",
      place: "North Indian,South Indian,Anna nagar",
      img: "https://ik.imagekit.io/os5tqthul/swiggy/pictures/card1.avif?updatedAt=1723193884705",
    },
    {
      hotelname: "Adil Hotel",
      rating: "4.2 ",
      delivery: ". 45-50 mins",
      place: "North Indian,South Indian,Anna nagar",
      img: "https://ik.imagekit.io/os5tqthul/swiggy/pictures/card1.avif?updatedAt=1723193884705",
    },
    {
      hotelname: "Adil Hotel",
      rating: "4.2 ",
      delivery: ". 45-50 mins",
      place: "North Indian,South Indian,Anna nagar",
      img: "https://ik.imagekit.io/os5tqthul/swiggy/pictures/card1.avif?updatedAt=1723193884705",
    },
    {
      hotelname: "Adil Hotel",
      rating: "4.2 ",
      delivery: ". 45-50 mins",
      place: "North Indian,South Indian,Anna nagar",
      img: "https://ik.imagekit.io/os5tqthul/swiggy/pictures/card1.avif?updatedAt=1723193884705",
    },
    {
      hotelname: "Adil Hotel",
      rating: "4.2 ",
      delivery: ". 45-50 mins",
      place: "North Indian,South Indian,Anna nagar",
      img: "https://ik.imagekit.io/os5tqthul/swiggy/pictures/card1.avif?updatedAt=1723193884705",
    },
    {
      hotelname: "Adil Hotel",
      rating: "4.2 ",
      delivery: ". 45-50 mins",
      place: "North Indian,South Indian,Anna nagar",
      img: "https://ik.imagekit.io/os5tqthul/swiggy/pictures/card1.avif?updatedAt=1723193884705",
    },
    {
      hotelname: "Adil Hotel",
      rating: "4.2 ",
      delivery: ". 45-50 mins",
      place: "North Indian,South Indian,Anna nagar",
      img: "https://ik.imagekit.io/os5tqthul/swiggy/pictures/card1.avif?updatedAt=1723193884705",
    },
    {
      hotelname: "Adil Hotel",
      rating: "4.2 ",
      delivery: ". 45-50 mins",
      place: "North Indian,South Indian,Anna nagar",
      img: "https://ik.imagekit.io/os5tqthul/swiggy/pictures/card1.avif?updatedAt=1723193884705",
    },
    {
      hotelname: "Adil Hotel",
      rating: "4.2 ",
      delivery: ". 45-50 mins",
      place: "North Indian,South Indian,Anna nagar",
      img: "https://ik.imagekit.io/os5tqthul/swiggy/pictures/card1.avif?updatedAt=1723193884705",
    },
  ];
  return (
    <>
       {/*<div className="w-[75%]  mx-auto ">
        <div className=" flex overflow-x-auto">
          {heroCard.map((item, index) => (

            <div key={index} className="w-[40%]">
              <img
                src={item.img}
                alt="food"
                className=" rounded-2xl "
              />
              <div>
                <p>{item.hotelname}</p>
                <p>
                  {item.rating}
                  {item.delivery}
                </p>
                <p>{item.place}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}



<section>
        <div className="w-[75%] mx-auto mt-3 ">
          <p className="font-extrabold text-2xl mt-10 mb-10 ">Top restaurant chains in Chhindwara</p>

          <div  className=" flex gap-5 overflow-x-auto no-scrollbar line-clamp-1">

{heroCard.map((scritems, index)=> (
           
           
           <div key={index} className="min-w-60 hover:scale-95">
            <img 
              src={scritems.img}
              alt="coffee"
              className="w-64 rounded-xl h-36"
            />
            <p className="font-extrabold">{scritems.hotelname}</p>
            <div className="flex items-center gap-3">
            <GiRoundStar className="text-green-600 "/><p className="font-bold">
                  {scritems.rating}{scritems.delivery}
                </p>
                </div>
                
                <p className="text-gray-500">{scritems.place}</p>
            </div>
))}
</div>

          
        </div>
      </section>
    </>
  );
};
