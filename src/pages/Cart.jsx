import React from "react";
import Header from "../components/Header";
import { Footer } from "../components";
import { useDispatch, useSelector } from "react-redux";
import suitcase from "../img/suitcase.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import moment from "moment";
import { removeFromCart } from "../features/cart/cartSlice";

function Cart() {
  let items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const generateRandomDate = (from, to) => {
    return new Date(
      from.getTime() + Math.random() * (to.getTime() - from.getTime())
    );
  };
  const formatDate = (date) => {
    return `${moment(date).format("LL")} | ${moment(date).format("LT")}`;
  };
  const removeItemFromCart = (id) => {
    
    dispatch(removeFromCart(id))
  };
  const renderItems = () => {
    return items.map((item, index) => {
      return (
        <>
          <div className="cart-left-item flex mb-4 " key={index}>
            <div className="place-image mr-4">
              <img
                src={item.photo.images.original.url}
                className="w-36 h-36"
                alt="place-image"
              />
              <h1 className="underline font-semibold cursor-pointer mt-2 " onClick={()=>removeItemFromCart(item.location_id)}>
                Remove
              </h1>
            </div>
            <div className="place-info">
              <Link to={`/attractions/${item.location_id}`}>
                <h1 className="text-2xl font-semibold mb-2 hover:underline hover:cursor-pointer duration-700 hover:text-gray-500">
                  {item.name}
                </h1>
              </Link>

              <p className="mb-2">Small group with meeting point - 6pm </p>
              <p className="mb-2">
                {formatDate(
                  generateRandomDate(new Date(), new Date(2023, 11, 31))
                )}
              </p>
              <p className="mb-2">3 adults x 700,000</p>
              <p>Total: 2,100,000</p>
            </div>
          </div>

          <div className={`divider border border-dashed border-b-0 border-gray-400 mb-4 ${items.length > 1 ? "block" : "hidden"}`}></div>
        </>
      );
    });
  };

  return (
    <div className="cart-section">
      <Header />
      {items.length === 0 ? (
        <div className="emptyCart min-h-[calc(100vh-20rem)] text-center  flex flex-col items-center justify-center">
          <img src={suitcase} alt="suitcase" className="w-36 h-36" />
          <h1 className="text-2xl font-semibold">Your cart is empty</h1>
          <p className="font-semibold text-base my-2">
            Add Things to Do to your cart. Now you can shop <br /> for tours,
            attractions, and experiences.{" "}
          </p>
          <Link to="/">
            <div className="sign-in pt-2 pb-2 pl-3 pr-3 bg-black border border-white text-white rounded-full mx-2 hover:bg-white hover:border hover:border-black hover:text-black ease-in duration-500">
              <button className="explore">Explore Now</button>
            </div>
          </Link>
        </div>
      ) : (
        <div className="cart-container container mx-auto p-4 min-h-[calc(100vh-20rem)]">
          <h1 className="text-3xl font-semibold my-5">Cart</h1>

          <div className="cart-content flex justify-items-center justify-between">
            <div className="cart-left  ">{renderItems()}</div>
            <div className="cart-right text-center border border-black bg-gray-50 px-6 py-3 rounded-md h-1/3">
              <h1 className="text-2xl font-semibold mb-5">
                Review Order Details
              </h1>
              <div className="booking-fee flex justify-between px-4 my-2 justify-items-center">
                <p>Booking fee</p>
                <p>100,000</p>
              </div>
              <div className="subtotal flex justify-between px-4 my-2 justify-items-center">
                <p>Subtotal</p>
                <p>2,100,000</p>
              </div>
              <div className="total flex justify-between px-4 my-2 justify-items-center">
                <p className="font-semibold">Total</p>
                <p className="font-semibold">2,200,000</p>
              </div>
              <Link to="/checkout">
                <div className="sign-in mt-5 pt-2 pb-2 pl-3 pr-3 bg-black border border-white text-white rounded-full mx-2 hover:bg-white hover:border hover:border-black hover:text-black ease-in duration-500">
                  <button className="checkout">Check out</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Cart;
