import React from "react";
import "./cart.scss";
import { products } from "../../general/data";
import { useDispatch, useSelector } from "react-redux";
import { replaceCart } from "../../general/redux/reducers/cartReducer";
import toast, { Toaster } from "react-hot-toast";
export default function Cart() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.cart.cartItems;
  });
  const notify = () => toast.success("Removed");
  const handleOnRemove = (el, i) => {
    console.log("el and index****", el, i);
    console.log("data****", data);
    const arr = data.filter((el, ind) => ind !== i);
    dispatch(replaceCart({ q: el.quantity, arr }));
    notify();
  };
  return (
    <div className="cart">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container">
        <h2 className="cart-title">Your Cart</h2>
        {data.length > 0 ? (
          <>
            {data.map((el, i) => {
              return (
                <div className="cart-item">
                  <div className="flex-center">
                    <div className="cart-img">
                      <img className="img-full" src={el.img} />
                    </div>
                    <div className="cart-price">
                      <p>Price : {el.price}</p>
                      <span>Quantity : {el.quantity}</span>
                      <button
                        onClick={() => handleOnRemove(el, i)}
                        className="remove-cart"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-total-amount">
                    <p className="total-amount">Total amount</p>
                    <p>{el.price * el.quantity}</p>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <p className="empty-error">Cart is empty</p>
        )}

        {/* <div className="cart-item">
          <div className="flex-center">
            <div className="cart-img">
              <img className="img-full" src={products[0].img} />
            </div>
            <div className="cart-price">
              <p>Price : {products[0].price}</p>
              <span>Quantity : 4</span>
            </div>
          </div>
          <div className="cart-total-amount">
            <p className="total-amount">Total amount</p>
            <p>{products[0].price * 4}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
