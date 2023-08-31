import {
  BsLayoutSidebarInsetReverse,
  BsLayoutSidebarInset,
} from "react-icons/bs";
import { BiHomeSmile, BiCartAlt } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux";
import { changeState } from "../../global/GlobalState";
import { NavLink } from "react-router-dom";

const MainSider = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state: any) => state.toggleState);
  const cart = useSelector((state: any) => state.cart);
  const onChangeState = () => {
    dispatch(changeState(!toggle));
  };
  return (
    <div>
      <div
        className={`w-[${
          toggle ? "70px" : "160px"
        }] h-[100vh] bg-purple-200 fixed transition-all duration-300 overflow-hidden `}
      >
        <div className="w-full justify-center flex mt-8 ">
          {!toggle ? (
            <BsLayoutSidebarInsetReverse
              className="text-[25px] text-purple-900 hover:cursor-pointer hover:scale-[1.04] duration-300 transition-all "
              onClick={onChangeState}
            />
          ) : (
            <BsLayoutSidebarInset
              className="text-[25px] text-purple-900 hover:cursor-pointer hover:scale-[1.04] duration-300 transition-all "
              onClick={onChangeState}
            />
          )}
        </div>
        <br />
        <br />
        <br />
        <NavLink to="/detail">
        <div>
          <div className="flex px-4 hover:bg-slate-200 py-2 hover:cursor-pointer duration-300 transition-all items-center  ">
            <div>
            <BiHomeSmile className="text-purple-900 mr-2  text-[30px] "/>
            </div>
          {!toggle && <div>Home</div>}
          </div>          
        </div>
        </NavLink>
        
        <NavLink to="check-out">
        <div className="flex px-4 hover:bg-slate-200 py-2 hover:cursor-pointer duration-300 transition-all items-center ">
          <div className="relative ">
            <div className=" absolute w-[16px] h-[16px] rounded-[50%] bg-red-500 text-[10px] flex justify-center items-center text-white right-1 ">{cart.length}</div>
            <BiCartAlt className="text-[30px] mr-2 "/>
          </div>
          {!toggle && <div>Cart</div>}
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default MainSider;
