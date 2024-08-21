import { SiSwiggy } from "react-icons/si";
import { TbCopyrightFilled } from "react-icons/tb";

export const Footer = () => {
  return (
    <>
    
      <div className="flex w-[100%] h-24 bg-gray-200 mx-auto ">
        <div className="w-[75%] mx-auto flex">
          <p className="font-extrabold text-gray-700 p-3 text-2xl flex">
            For better experience,
            <br />
            download the Swiggy app now
          </p>
          <p className="flex gap-6 w-48 h-16 items-center mt-4 ml-56 ">
            <img
              src={
                "https://ik.imagekit.io/os5tqthul/swiggy/play%201.png?updatedAt=1723627888856"
              }
              alt="play store logo"
              className="rounded-xl w-[192px] h-[56px] "
            />
            <img
              src={
                "https://ik.imagekit.io/os5tqthul/swiggy/play%202.png?updatedAt=1723627889098"
              }
              alt="app store logo"
              className="rounded-xl w-[192px] h-[56px]"
            />
          </p>
        </div>
      </div>

      <section className="flex w-[100%] h-[100%] bg-black mx-auto ">
        <div className="w-[75%] mx-auto flex gap-24 mt-10 ">
          <div>
            <p className=" flex font-extrabold text-white items-center text-3xl mb-3">
              <SiSwiggy className="text-white flex items-center" />
              swiggy
            </p>
            <p className="flex text-gray-400 font-medium  items-center ">
              <TbCopyrightFilled className="text-gray-400 items-center" />
              2024 Bundl Technologies Pvt. Ltd
            </p>
          </div>

          <div className="text-white mb-2 font-medium">
            <p className="font-bold text-xl mb-2">Company</p>
            <p className="mb-2 text-gray-400 ">About</p>
            <p className="mb-2 text-gray-400">Careers</p>
            <p className="mb-2 text-gray-400">Team</p>
            <p className="mb-2 text-gray-400">Swiggy One</p>
            <p className="mb-2 text-gray-400">Swiggy Instamart</p>
            <p className="mb-2 text-gray-400">Swiggy Genie</p>
          </div>

          <div className="text-white mb-2 font-medium">
            <p className="font-bold text-xl mb-2">Contact Us</p>
            <p className="mb-2 text-gray-400">Help & Support</p>
            <p className="mb-2 text-gray-400">Partner with us</p>
            <p className="mb-10 text-gray-400">Ride with us</p>

            <p className="font-bold text-xl mb-2">Legal</p>
            <p className="mb-2 text-gray-400">Terms & Conditions</p>
            <p className="mb-2 text-gray-400">Cookie Policy</p>
            <p className="mb-2 text-gray-400">Privacy Policy</p>
            <p className="mb-36 text-gray-400">Investor Relations</p>
          </div>

          <div className="text-white mb-2 font-medium">
            <p className="font-bold text-xl mb-2">We deliver to:</p>
            <p className="mb-2 text-gray-400">Bangalore</p>
            <p className="mb-2 text-gray-400">Gurgaon</p>
            <p className="mb-2 text-gray-400">Hyderabad</p>
            <p className="mb-2 text-gray-400">Delhi</p>
            <p className="mb-2 text-gray-400">Mumbai</p>
            <p className="mb-2 text-gray-400">Pune</p>
          </div>
        </div>
      </section>
    </>
  );
};
