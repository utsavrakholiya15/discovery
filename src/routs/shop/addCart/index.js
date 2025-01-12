import React, { useEffect, useState } from "react";
import "./addCart.scss";
import orangeHoodiImg from "../../../assets/IMAGEs/orange-hoodie.jpg";
import closeIcon from "../../../assets/ICONs/close.png";
import { useSearchParams } from "react-router-dom";
import { products } from "../../../general/data";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../../../general/redux/reducers/cartReducer";
export default function AddCart() {
  const [params] = useSearchParams();
  const id = params.get("id");
  const [quantity, setQuantity] = useState(1);
  const [confirm, setConfirm] = useState(false);
  const [storedData, setStoredData] = useState([]);
  const dispatch=useDispatch();
  const [filtData, setFiltData] = useState({
    id: 0,
    img: "",
    name: "",
    price: 0,
  });
  let data = [];
  const temp=useSelector((state)=>{return state});
  useEffect(() => {
    window.scrollTo(0, 0);
    //
    
    //
    const filter = products.find((el) => el.id == id);
    setFiltData(filter);
  }, );
  //
  const notify = () => toast.success("Added to cart");
  const handleOnAddCart = (ev) => {
    const putData={...filtData,quantity};
    dispatch(setCartItems(putData));
    // setQuantity(1);
    //
    confirm ? setConfirm(false) : setConfirm(true);
    notify();
  };
  return (
    <div className="addCart">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container">
        <div className="addCart-grid">
          <div className="addCart-grid-left">
            <h2>{filtData.name}</h2>
            <span>$ {filtData.price}.00 USD</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              vitae rutrum leo. Duis mollis urna nec.
            </p>
            <div className="addCart-grid-left-buttons">
              <input
                type="number"
                inputMode="numeric"
                value={quantity}
                onChange={(ev) => {
                  setQuantity(ev.target.value >= 1 ? ev.target.value : 1);
                }}
              ></input>
              <button
                onClick={() => {
                  confirm ? setConfirm(false) : setConfirm(true);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="addCart-grid-right">
            <img className="img-full" src={filtData.img} />
          </div>
        </div>
        {confirm && (
          <div className="confirmation-parent">
            <div className="confirmation">
              <div className="confirmation-top">
                <span>Add to cart</span>
                <img
                  onClick={() => {
                    confirm ? setConfirm(false) : setConfirm(true);
                  }}
                  src={closeIcon}
                />
              </div>
              <div className="confirmation-middle">
                <div>
                  <img src={filtData.img} />
                </div>
                <div>
                  <span>{filtData.name}</span>
                  <p>$ {filtData.price}.00 USD</p>
                  <p>Quantity:{quantity}</p>
                </div>
              </div>
              <div className="confirmation-bottom">
                <div className="confirmation-bottom-flex">
                  <span>Total amount :</span>
                  <p>$ {filtData.price * quantity}.00 USD</p>
                </div>
                <button onClick={handleOnAddCart}>Add to cart</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
