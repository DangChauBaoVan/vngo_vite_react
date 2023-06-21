import React from "react";
import Header from "../components/Header";
import { Footer } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { BsFillPhoneFill } from "react-icons/bs";
import momoLogo from "../img/momo-logo.png";
import momoQR from "../img/momo-qr.png";
import { emptyCart } from "../features/cart/cartSlice";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function CheckOut() {
  let account = useSelector((state) => state.login.account);
  const dispatch = useDispatch();
  const history = useHistory()
  const handleOnclickConfirm = ()=>{
    dispatch(emptyCart())
    history.push("/")
  }
  return (
    <div>
      <Header />
      <h1 className="text-2xl font-semibold my-4 container mx-auto px-4 flex">
        Thanh toán
      </h1>
      <div className="checkout min-h-[calc(100vh-20rem)] container mx-auto p-4 flex ">
        <div className="checkout-left basis-3/4 mr-5">
          <div className="checkout-info">
            <div className="checkout-info-item text-left bg-slate-50 px-5 py-5 rounded-lg">
              <div className="succes-info bg-green-100 border border-black py-2 text-center rounded-lg my-2">
                <h1 className="text-sm">
                  Đã gửi thông tin đặt hàng đến VNGO. Bạn có thể tiến hành thanh
                  toán ngay bây giờ.
                </h1>
              </div>
              <div className="checkout-info-bottom border border-slate-500 rounded-lg  px-3 py-2">
                <h1 className="font-semibold text-lg my-2">
                  Thông tin đơn hàng
                </h1>
                <h1>Mã đơn hàng: DH2306210047</h1>
                <h1 className="my-2">Người nhận: {account.user_name}</h1>
                <h1>Nhận tại : {account.email}</h1>
              </div>
            </div>
          </div>
          <div className="checkout-info">
            <h1 className="text-2xl font-semibold my-4">
              Phương thức thanh toán
            </h1>
            <div className="checkout-info-item text-left bg-slate-50 px-5 py-5 rounded-lg">
              <div className="payment-method flex items-center">
                <BsFillPhoneFill size={24} />
                <p className="ml-2">Thanh toán momo</p>
              </div>
              <img
                src={momoLogo}
                alt="momo logo"
                className="w-14  border border-pink-600 my-2 cursor-pointer"
              />
              <div className="payment-method-bottom flex items-center justify-between">
                <div className="pmb-left">
                  <h1>Ngân hàng: MoMo</h1>
                  <h1 className="my-2">Số tài khoản: 0912991515</h1>
                  <h1>Thụ hưởng: Nguyen Bao Tran</h1>
                  <h1 className="my-2">
                    Nội dung CK: {account.user_name} DH2306210047
                  </h1>
                </div>
                <div className="pmb-right text-center flex flex-col items-center">
                  <img src={momoQR} alt=" momo qr" className="w-28 h-28" />
                  <h1 className="">
                    Dùng ứng dụng momo quét mã <br /> QR Code để chuyển khoản
                  </h1>
                </div>
              </div>
              <div className="payment-confirm mt-4">
                <div className="sign-in pt-2 pb-2 pl-3 pr-3 bg-black border border-white text-white rounded-lg mx-2 hover:bg-white hover:border hover:border-black hover:text-black ease-in duration-500 text-center">
                  <button className="confirm text-center" onClick={handleOnclickConfirm}>
                    Tôi đã chuyển khoản
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout-right basis-1/4 bg-slate-50 h-1/2 p-4 rounded-lg ">
          <h1 className="text-2xl font-semibold mt-2 mb-4">Tóm tắt đơn hàng</h1>
          <p className="text-xs">Đơn hàng chưa bao gồm phí vận chuyển</p>
          <div className="subtotal flex justify-between  my-2 justify-items-center">
            <p>Tạm tính</p>
            <p>2,200,000</p>
          </div>
          <div className="discount flex justify-between  my-2 justify-items-center">
            <p>Giảm giá</p>
            <p>0</p>
          </div>
          <div className="divider border border-b-0 border-dashed border-slate-400"></div>
          <div className="total flex justify-between  my-2 justify-items-center">
            <p>Tổng cộng</p>
            <p className="text-xl font-semibold">2,200,000</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CheckOut;
