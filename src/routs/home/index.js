import React, { useEffect } from "react";
import HeroBanner from "./heroBanner";
import Principles from "./priciples";
import Wedo from "./wedo";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../general/redux/reducers/cartReducer";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <Principles />
      <Wedo />
    </div>
  );
}
