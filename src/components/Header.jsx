import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { logout } from "../features/login/loginSlice";
import 'animate.css';

export default function Header() {
  let isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  let account = useSelector((state) => state.login.account);
  let items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handleLogOut = ()=>{
    console.log("log out")
    dispatch(logout())
  }
  return (
    <div className="shadow-md w-full sticky top-0 z-50 bg-white h-16">
      <div className="header-content flex flex-row justify-between items-center pb-3 pt-3 container mx-auto p-4">
        <Link to={"/"}>
          <div className="header-left">
            <h1 className="text-2xl  tracking-normal">V I E T N A M G O</h1>
          </div>
        </Link>

        <div className="header-right flex flex-row items-center">
          <div className="trip 	hover:bg-gray-200 px-3 py-2 cursor-pointer rounded-full duration-500">
            <button className="flex flex-row justify-center items-center space-x-1 font-medium ">
              <AiOutlineHeart size={24}/>
              <p>Trips</p>
            </button>
          </div>
          <Link to={"/cart"} className="relative">
            <div className={`cart  hover:bg-gray-200 px-3 py-2 cursor-pointer rounded-full duration-500`}>
              <button className="flex flex-row justify-center items-center space-x-1 font-medium ">
                <AiOutlineShoppingCart size={24}/>
                <p>Cart</p>
              </button>
            </div>
            <div className={`cart-item absolute top-1 left-7 rounded-full bg-[#CC0000] w-4 h-4 text-sm ${items.length === 0 ? "hidden" : "block animate__animated animate__bounceIn"}`}>
              <p className="text-center align-middle text-white text-xs">{items.length}</p>
            </div>
          </Link>

          {isLoggedIn ? (
            <div className="login-btn">
              <div className="peer relative user-login flex justify-items-center items-center hover:bg-gray-200 py-2 px-4 cursor-pointer rounded-full duration-500">
                <h1>{account.user_name}</h1>
                <img
                  src={account.avatar}
                  alt="user-avatar"
                  className="w-8 h-8 rounded-full ml-2"
                />
              </div>
              <div className=" absolute bot-0 hidden peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg duration-500 rounded-md border border-black text-center">
                <a
                  className="px-5 py-3 hover:bg-gray-200 duration-500 rounded-md"
                  href="#"
                >
                  Account Info
                </a>
                <a
                  className="px-5 py-3 hover:bg-gray-200 duration-500 rounded-md cursor-pointer"
                  
                  onClick={handleLogOut}
                >
                  Log Out
                </a>
              </div>
            </div>
          ) : (
            <Link to={"/login"}>
              <div className="sign-in pt-2 pb-2 pl-3 pr-3 bg-black border border-white text-white rounded-full mx-2 hover:bg-white hover:border hover:border-black hover:text-black ease-in duration-500">
                <button className="signIn">Sign In</button>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
