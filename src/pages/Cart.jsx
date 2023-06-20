import React from "react";
import Header from "../components/Header";
import { Footer } from "../components";

function Cart() {
  return (
    <div className="cart-section">
      <Header />
      <div className="cart-container container mx-auto p-4 min-h-[calc(100vh-20rem)]">
        <h1 className="text-3xl font-semibold my-5">Cart</h1>
        <div className="cart-content flex justify-items-center justify-between">
            <div className="cart-left flex ">
                <div className="place-image mr-2">
                    <img src="https://picsum.photos/200" className="w-36 h-36" alt="place-image" />
                </div>
                <div className="place-info">
                    <h1 className="text-2xl font-semibold mb-2">Place name</h1>
                    <p className="mb-2">Place note</p>
                    <p className="mb-2">Date</p>
                    <p>Amount</p>
                </div>
            </div>
            <div className="cart-right text-center border border-black bg-gray-50 px-6 py-3 rounded-md">
                <h1 className="text-2xl font-semibold mb-5">Review Order Details</h1>
                <div className="booking-fee flex justify-between px-4 my-2 justify-items-center">
                    <p>Booking fee</p>
                    <p>Price $</p>
                </div>
                <div className="subtotal flex justify-between px-4 my-2 justify-items-center">
                    <p>Subtotal</p>
                    <p>Price $</p>
                </div>
                <div className="total flex justify-between px-4 my-2 justify-items-center">
                    <p>Total</p>
                    <p>Price $</p>
                </div>
                <div className="sign-in mt-5 pt-2 pb-2 pl-3 pr-3 bg-black border border-white text-white rounded-full mx-2 hover:bg-white hover:border hover:border-black hover:text-black ease-in duration-500">
                  <button className="checkout">Check out</button>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
