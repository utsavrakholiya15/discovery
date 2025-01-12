import React, { useEffect, useState } from "react";
import "./shop.scss";
import { v4 as uuidv4 } from "uuid";
import orangeHoodieImg from "../../assets/IMAGEs/orange-hoodie.jpg";
import greenHoodieImg from "../../assets/IMAGEs/green-hoodie.jpg";
import aquaHoodieImg from "../../assets/IMAGEs/aqua-hoodie.jpg";
import blackHoodieImg from "../../assets/IMAGEs/black-hoodie.jpg";
import { products } from "../../general/data";
import { useNavigate, useSearchParams } from "react-router-dom";
export default function Shop() {
  const navigate =useNavigate();
  const handleOnClick=(id)=>{
    navigate(`/addCart?id=${id}`);
  }
  return (
    <div className="shop">
      <div className="container">
        <div className="shop-title">
          <h2>Shop</h2>
        </div>
        <div className="shop-grid">
          {products.map((el, i) => {
            return (
              <div onClick={()=>handleOnClick(el.id)} className="shop-prod" key={i}>
                <div className="shop-prod-img">
                  <img className="img-full" src={el.img} />
                </div>
                <div className="shop-prod-text">
                  <p>{el.name}</p>
                  <span>$ {el.price} USD</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
