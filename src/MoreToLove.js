import React from "react";
import { useState } from "react";
import green from "./Images/greenStuff.png";
import img from "./Images/img.png";
import topHat from "./Images/topHat.png";
import notHighlight from "./Images/non-highlight-cart.png";
import fiveStar from "./Images/Frame 36.png";
import crossBag from "./Images/crossBag.png";
import image from "./Images/image 37.png";
import FadeLoader from "react-spinners/FadeLoader";

function MoreToLove() {
  // const [myCartArr, setMyCartArr] = useState([])

  // setMyCartArr(e => {
  //   myCartArr.push()
  // })

  const add_to_cart = (ele) => {
    let myCartArr = [];
    // localStorage.clear()
    // if (ele.name
    // localStorage.setItem("cart", JSON.stringify(myCartArr))
    myCartArr = JSON.parse(localStorage.getItem("cart"));
    console.log(myCartArr);

    if (myCartArr !== null) {
      if (!myCartArr.includes(ele)) {
        myCartArr.push(ele);
        localStorage.setItem("cart", JSON.stringify(myCartArr));
        console.log(myCartArr);
      } else {
        alert(`${ele.name} already exist in cart`);
      }
    }else{
      myCartArr.push(ele);
      localStorage.setItem("cart", JSON.stringify(myCartArr));
    }
  };

  const product = [
    {
      name: "Black Top Hat",
      img_src: topHat,
      discount: "12% off",
      cart_type: notHighlight,
      isRated: false,
    },
    {
      name: "Peach cross bag",
      img_src: crossBag,
      discount: "12% off",
      cart_type: notHighlight,
      isRated: true,
    },
    {
      name: "Stainless t...",
      img_src: img,
      discount: "12% off",
      cart_type: notHighlight,
      isRated: false,
    },
    {
      name: "Water Can",
      img_src: green,
      discount: "12% off",
      cart_type: notHighlight,
      isRated: true,
    },
    {
      name: "Samsung Fold",
      img_src: image,
      cart_type: notHighlight,
      isRated: true,
    },
  ];

  const spinnerColor = "#DB1F1F";

  // const CartItem = JSON.stringify(localStorage.getItem("cart"))

  //Thought process:
  // Make an array a variable
  // Any Item the user taps on should be pushed into that variable
  // then replace That empty array with tha variable name

  return (
    <div className="more">
      <h5>More to love</h5>
      <div className="more-pic">
        <div className="pic-row">
          {product.map((products) => {
            return (
              <div className="topP" key={products.name}>
                <div className="p-img">
                  <img
                    src={products.cart_type}
                    className="no-back"
                    onClick={() => add_to_cart(products)}
                  />
                </div>
                <div className="centerAlign">
                  <img
                    className="not-proceed"
                    src={products.img_src}
                    alt="cart with orange background"
                  />
                </div>
                <div className="padding">
                  <p className="no-padding">{products.name}</p>
                  <p className="no-padding p paddingB">
                    $50.00 <span className="small">In stock</span>
                  </p>
                  {products.isRated ? (
                    <img src={fiveStar} className="five-star" />
                  ) : (
                    <p className="no-padding some-bisque">
                      {products.discount}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="centerSomething">
          <FadeLoader color="red" />
        </div>
      </div>
    </div>
  );
}

export default MoreToLove;
