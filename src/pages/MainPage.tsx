// import React from 'react'
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineVisibility } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../global/GlobalState";
import { useProduct } from "../hooks/useProduct";

const MainPage = () => {
  let myData: any = [];
  let star: any = [];
  const cart = useSelector((state: any) => state.cart)
  const dispatch = useDispatch()

  const rand = (max: number, min: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  Array.from({ length: 5 }, () => {
    const randNumb = (max: number, min: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    for (let i = 1; i <= randNumb(1, 0); i++) {
      myData.push("⭐");
    }
    star.push(myData.join(""));
  });
  const {data, isLoading} = useProduct()
  console.log(cart);
  return (
   <div>
    {
      isLoading ? <div>Loading</div> :  <div className="flex flex-wrap ml-4 justify-center ">
        {
          data?.map((props: any) => (
            <div key={props.id} className="border m-2 ">
            <div className="w-[250px] h-[300px] relative m-2 ">
              <img className="w-[250px] h-[300px] bg-[gray] object-cover  " src={props.image}/>
              <div className="w-full flex justify-center absolute bottom-3 opacity-0 hover:opacity-100 h-[300px] items-end ">
                <div className="w-[30px] h-[30px] bg-[white] rounded-[50%] bottom-3 flex justify-center items-center hover:bg-[silver] hover:text-white hover:cursor-pointer ">
                  <MdOutlineVisibility />
                </div>
                <div className="w-[30px] h-[30px] bg-[white] rounded-[50%] bottom-3 flex justify-center items-center hover:bg-[silver] hover:text-white hover:cursor-pointer ml-2 " onClick={()=>{
                  dispatch(addToCart(props))
                }}>
                  <FiShoppingBag />
                </div>
              </div>
            </div>
            <div className="flex justify-center w-[250px] items-center mt-2 ">
              {star[rand(4,0)]}{""}
              <span className="text-[12px] ml-1 ">(review)</span>
            </div>
            <div>name</div>
            <div className="flex justify-center w-[250px] items-center mt-[2px] ">
              <div className="line-through mr-2 text-[silver] ">₦2,000</div>
              <div className="text-[red] ">₦3,000</div>
            </div>
          </div>
          ))
        }
      </div>
    }
   </div>
  );
};

export default MainPage;
