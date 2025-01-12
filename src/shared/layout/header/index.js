import React from "react";
import "./header.scss";
import headerLogo from "../../../assets/LOGOs/headerLogo.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../../general/redux/reducers/cartReducer";
export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const localCount = useSelector((state) => state.cart.cartCount);
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="header-icon">
            <img src={headerLogo} />
          </div>
          <div className="header-nav">
            <nav>
              <span onClick={() => navigate("/")}>Home</span>
              <span onClick={() => navigate("/about")}>About</span>
              <span onClick={() => navigate("/campus")}>Campus</span>
              {/* <span>Contact</span> */}
              {/* <span>Blog</span>  */}
              <span onClick={() => navigate("/shop")}>Shop</span>
              <div
                onClick={() => navigate("/cart")}
                className="header-cart flex-center"
                style={{ gap: "10px" }}
              >
                <svg
                  className="w-commerce-commercecartopenlinkicon cart_icon"
                  width="17px"
                  height="17px"
                  viewBox="0 0 17 17"
                >
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <path
                      d="M2.60592789,2 L0,2 L0,0 L4.39407211,0 L4.84288393,4 L16,4 L16,9.93844589 L3.76940945,12.3694378 L2.60592789,2 Z M15.5,17 C14.6715729,17 14,16.3284271 14,15.5 C14,14.6715729 14.6715729,14 15.5,14 C16.3284271,14 17,14.6715729 17,15.5 C17,16.3284271 16.3284271,17 15.5,17 Z M5.5,17 C4.67157288,17 4,16.3284271 4,15.5 C4,14.6715729 4.67157288,14 5.5,14 C6.32842712,14 7,14.6715729 7,15.5 C7,16.3284271 6.32842712,17 5.5,17 Z"
                      fill="currentColor"
                      fillRule="nonzero"
                    ></path>
                  </g>
                </svg>
                <div className="cartCount flex-center">{localCount}</div>
              </div>
            </nav>
            <button className="book-visit">Book a visit</button>
          </div>
        </div>
      </div>
    </header>
  );
}
