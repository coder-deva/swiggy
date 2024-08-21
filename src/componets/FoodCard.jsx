import { useState } from "react";
import { GiRoundStar } from "react-icons/gi";
// import { useNavigate } from "react-router-dom"; // Updated import for navigation

export const FoodCard = () => {
  // const navigate = useNavigate(); // Hook for navigation
  const [cart, setCart] = useState([]); // State to manage cart items

  const cardData = [
    // Your existing cardData
    {id:1,name:"Burger",price:100, restaurantname:"Moon Light", image:"https://ik.imagekit.io/os5tqthul/swiggy/pictures/burger.jpeg?updatedAt=1723183390495",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:2,name:"Dosa",price:150, restaurantname:"Moon Light", image:"https://ik.imagekit.io/os5tqthul/swiggy/pictures/dosa.jpeg?updatedAt=1723183390522",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:3,name:"Fries",price:150, restaurantname:"Moon Light" ,image:"https://ik.imagekit.io/os5tqthul/swiggy/pictures/royal.jpeg?updatedAt=1723184725031",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:4,name:"Dosa",price:100, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/swiggy/pictures/dosa%20vada.jpeg?updatedAt=1723184711525",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:5,name:"Sandwich",price:150, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/swiggy/pictures/mix.jpeg?updatedAt=1723184698275",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:6,name:"Pizza",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/swiggy/pictures/apni.avif?updatedAt=1723222456609",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:7,name:"Noodles",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/swiggy/pictures/1.jpeg?updatedAt=1723222606217",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:8,name:"White Rice",price:250, restaurantname:"Moon Light",image:"https://ik.imagekit.io/os5tqthul/swiggy/pictures/indian.jpeg?updatedAt=1723185081821",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:1,name:"Soup",price:100, restaurantname:"Moon Light", image:"https://ik.imagekit.io/os5tqthul/swiggy/pictures/last16.jpeg?updatedAt=1723223594535",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:1,name:"Fresh Vegetables",price:100, restaurantname:"Moon Light", image:"https://ik.imagekit.io/os5tqthul/swiggy/pictures/last15.jpeg?updatedAt=1723223594888",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:1,name:"Chilli Chicken",price:100, restaurantname:"Moon Light", image:"https://ik.imagekit.io/os5tqthul/swiggy/pictures/last14.jpeg?updatedAt=1723223595810",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:1,name:"Noodles",price:100, restaurantname:"Moon Light", image:"https://ik.imagekit.io/os5tqthul/swiggy/pictures/last13.jpeg?updatedAt=1723223594137",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:1,name:"Curd Rice",price:100, restaurantname:"Moon Light", image:"https://ik.imagekit.io/os5tqthul/swiggy/pictures/last2.jpeg?updatedAt=1723223211897",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:1,name:"Noodles",price:100, restaurantname:"Moon Light", image:"https://ik.imagekit.io/os5tqthul/swiggy/pictures/last11.jpeg?updatedAt=1723223595703",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:1,name:"Bread",price:100, restaurantname:"Moon Light", image:"https://ik.imagekit.io/os5tqthul/swiggy/pictures/last10.jpeg?updatedAt=1723223214026",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:1,name:"Veg Rolls",price:100, restaurantname:"Moon Light", image:"https://ik.imagekit.io/os5tqthul/swiggy/pictures/last9.jpeg?updatedAt=1723223212298",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:1,name:"Veg Rolls",price:100, restaurantname:"Moon Light", image:"https://ik.imagekit.io/os5tqthul/swiggy/pictures/last8.jpeg?updatedAt=1723223212264",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:1,name:"Biriyani",price:100, restaurantname:"Moon Light", image:"https://ik.imagekit.io/os5tqthul/swiggy/pictures/last7.jpeg?updatedAt=1723223209776",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:1,name:"icecream",price:100, restaurantname:"Moon Light", image:"https://ik.imagekit.io/os5tqthul/swiggy/pictures/last6.jpeg?updatedAt=1723223208674",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:1,name:"icecream",price:100, restaurantname:"Moon Light", image:"https://ik.imagekit.io/os5tqthul/swiggy/pictures/last5.jpeg?updatedAt=1723223209005",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:1,name:"Burger",price:100, restaurantname:"Moon Light", image:"https://ik.imagekit.io/os5tqthul/swiggy/pictures/last4.jpeg?updatedAt=1723223209289",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:1,name:"vegetables",price:100, restaurantname:"Moon Light", image:"https://ik.imagekit.io/os5tqthul/swiggy/pictures/last3.jpeg?updatedAt=1723223211681",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:1,name:"friedrice",price:100, restaurantname:"Moon Light", image:"https://ik.imagekit.io/os5tqthul/swiggy/pictures/last12.jpeg?updatedAt=1723223593735",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:1,name:"bread",price:100, restaurantname:"Moon Light", image:"https://ik.imagekit.io/os5tqthul/swiggy/pictures/last1.jpeg?updatedAt=1723223208108",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:1,name:"bread",price:100, restaurantname:"Moon Light", image:"https://ik.imagekit.io/os5tqthul/swiggy/pictures/last1.jpeg?updatedAt=1723223208108",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:1,name:"bread",price:100, restaurantname:"Moon Light", image:"https://ik.imagekit.io/os5tqthul/swiggy/pictures/last1.jpeg?updatedAt=1723223208108",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:1,name:"bread",price:100, restaurantname:"Moon Light", image:"https://ik.imagekit.io/os5tqthul/swiggy/pictures/last1.jpeg?updatedAt=1723223208108",rating:"4.4 . ",delivery:"45-50 mins"},
    {id:1,name:"bread",price:100, restaurantname:"Moon Light", image:"https://ik.imagekit.io/os5tqthul/swiggy/pictures/last1.jpeg?updatedAt=1723223208108",rating:"4.4 . ",delivery:"45-50 mins"},
// ... other items
  ];

  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart); // Add item to cart
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Store cart in localStorage
    // navigate('/cart'); // Navigate to cart page
  };

  return (
    <>
      <p className="mt-3 w-[75%] ml-48 font-extrabold text-2xl grid">
        Restaurants with online food delivery in Chhindwara
      </p>
      
      <div className="2xl:container mt-10 mb-10">
        <div className="w-[75%] mx-auto grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cardData.map((itemdata, index) => (
            <div key={index} className="hover:scale-95">
              <img src={itemdata.image} alt="food img" className="w-full rounded-2xl h-44" />
              <div className="mt-8 mb-8">
                <p className="font-extrabold">{itemdata.restaurantname}</p>
                <div className="flex items-center gap-3">
                  <GiRoundStar className="text-green-600" />
                  <p className="font-bold">{itemdata.rating} {itemdata.delivery}</p>
                </div>
                <p className="font-bold">{itemdata.name}</p>
                <p className="font-extralight">{itemdata.price}</p>
                <button
                  onClick={() => addToCart(itemdata)}
                  className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
