import { useEffect, useState } from "react";

export function useCartData() {
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cartData"))
  );
  const cartLength = JSON.parse(localStorage.getItem("cartData"))?.cart.length;
  const cartTotal = JSON.parse(localStorage.getItem("cartData"))?.cartTotal;

  useEffect(() => {
    setCartData(JSON.parse(localStorage.getItem("cartData")));
  }, [cartLength, cartTotal]);
  // console.log(JSON.parse(localStorage.getItem("cartData")));
  return {
    cartData: cartData ? cartData : null,
    setCartData,
  };
}
