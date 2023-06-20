import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Header() {
  let isLogin = useSelector((state) => state.login.login);
  let account = useSelector((state) => state.login.account);
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
              <AiOutlineHeart />
              <p>Trips</p>
            </button>
          </div>
          <Link to={"/cart"}>
          <div className="cart hover:bg-gray-200 px-3 py-2 cursor-pointer rounded-full duration-500">
            <button className="flex flex-row justify-center items-center space-x-1 font-medium">
              <AiOutlineShoppingCart />
              <p>Cart</p>
            </button>
          </div>
            </Link>
          
          {isLogin ? (
            <div className="user-login flex justify-items-center items-center hover:bg-gray-200 py-2 px-4 cursor-pointer rounded-full duration-500">
              <h1>{account.user_name}</h1>
              <img
                src={account.avatar}
                alt="user-avatar"
                className="w-8 h-8 rounded-full ml-2"
              />
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
