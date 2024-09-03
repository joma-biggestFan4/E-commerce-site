import React from 'react'
import { useNavigate } from "react-router-dom" 
import {PaystackButton} from "react-paystack"
import Cart from "./Images/cart.jpg"
import notHighlight from "./Images/non-highlight-cart.png"
import fiveStar from "./Images/Frame 36.png" 
import { useState } from 'react'
import groupIcon from "./Images/Group.png"
import image from "./Images/image 37.png"
import searchIcon from "./Images/search-icon.png"
import watch from "./Images/watch.png"
import green from "./Images/greenStuff.png"
import img from "./Images/img.png"
import topHat from "./Images/topHat.png"
// import notHighlight from "./Images/non-highlight-cart.png"
// import fiveStar from "./Images/Frame 36.png" 
import crossBag from "./Images/crossBag.png"
// import image from "./Images/image 37.png"
// import Cart from "./Images/cart.jpg"

function CartPage() {

    const navigateHome = useNavigate();

    const handleTitleClick = () => {
        navigateHome("/")
    }

    const amount = 3 
    const email = "jomakazejr@gmail.com"
    const fullname = "Lawal Treasure"
    const userphone = "08084919144"
    const [input, setInput] = useState("");
    const [userAddress, setUserAddress] = useState("");
    const [count, setCount] = useState(0);
    const [countTWO, setCountTWO] = useState(0);
    const [localStorages, setLocalStorage] = useState(JSON.parse(localStorage.getItem("cart")));
    // const [email, setEmail] = useState("")

    const handleEnterKey = (event) => {
        if (event.key === "Enter") {
          setInput("")
          event.target.blur()
        }
    }
    const handleEnterKeyTwo = (event) => {
        if (event.key === "Enter") {
          setUserAddress("")
          event.target.blur()
        }
    }

    const increment = () => {
        setCount(() => count+1)
    }

    const decrement = () => {
        if (count > 0) {
            setCount(() => count-1)
        }
    }
    const incrementTWO = () => {
        setCountTWO(() => countTWO+1)
    }

    const decrementTWO = () => {
        if (countTWO > 0) {
            setCountTWO(() => countTWO-1)
        }
    }
    let product = JSON.parse(localStorage.getItem("cart"))
    const removeItem = ele => {
        const eleIndex = localStorages.findIndex(user => user.name === ele.name)
        // setLocalStorage(localStorages.filter((_, index) => index != eleIndex))

       
        setLocalStorage(localStorages.splice(eleIndex, 1))
        localStorage.setItem("cart", JSON.stringify(localStorages));
        console.log(localStorages.length)

        

        // if (localStorages.length === 0) {
        //     localStorage.setItem("cart", JSON.stringify([]));
        // }

        console.log(localStorages)
    }
    // console.log(product)

    const cmponentProp = {
        email,
        amount, 
        metadata: {
            fullname,
            userphone,        
        }, 
        // channel: ["card"],
        publicKey: "pk_test_43d98f83d7009f951d646bfb628b49e85875ad94",
        // className="paystack-button",
        text: `pay NGN ${amount * 100}`,
        // reference: new Date().getTime().toString(),
        onSuccess: () => {
            alert("Payed successfully")
        },
        onclose: () => {
            alert("Couldn't make payments")
        }
    }


  return (
    <div className="cart-page">
        <header className="App-header">
            <div className="Top">
                <h2 onClick={handleTitleClick} className="heading-nav">Cart</h2>
                <div id="nav-links">
                    <div className="nav-tags">
                        <p className="product">Products</p>
                        <p className="grey">Contact Us</p>
                    </div>
                        {/* <div>
                            <img src={Cart} alt="cart" className="cart" />
                        
                        </div> */}
                </div>
            </div>

            <div className="search-corner">
                <div className="search">
                    <div className="search-container">
                        <div className="img-background">
                            <img className="search-button" src={searchIcon} alt="search" />
                        </div>
                        
                        <div style={{width: "91%"}}>
                            <input type="text" placeholder="Search Cart" value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleEnterKey}/>
                        </div>

                        </div>
                        <div className="group-icon">
                        <img src={groupIcon} alt="three dots on a line" className="groupIcon" />
                    </div>
                    
                </div>
            </div>

        

        </header>
        <div className="hr noPM"></div>

        <div className="grey-cart-preview noPM">
            <div className="one-side">
                <div className="main-side">
                {
                    localStorages.length > 0 ? (
                        localStorages.map((products, index) => {
                            return (
                                <div className="flexback"  key={index}>
                                    <div className="noPM imagediv">
                                        <img src={products.img_src} className="watch noPM"/>
                                    </div>
                                    <div className="noPM black-border">
                                        <h5>{products.name}</h5>
                                        {/* <h5>Stainless temperature display water bottle flask</h5> */}
                                        <p className="displayColor noPMs">Gold</p>
                                        <p className="small">In stock</p>
                                        <p className="mid"><del style={{paddingRight: ".4rem"}}>$120.00</del>$60.00</p>
                                        <p className="mid some-bisque">60% off</p>
                                    </div>
                                    <div className="noPM left-side-rs">
                                        <div className="first">
                                            <p className="mid some-bisque noPM hover"
                                            onClick={() => removeItem(products)}>Remove</p>
                                        </div>
                                        <div className="last">
                                            <div>
                                                <button className="minus" onClick={decrementTWO}>-</button>
                                                <span style={{padding: "0 .4rem", color: "black"}}>{countTWO}</span>
                                                <button className="add" onClick={incrementTWO}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                         })
                    ) : 
                    <div className="empty-cart-container"><img src={notHighlight} alt="Cart Image" className="empty-cart"/><p>Your cart is currently empty</p></div>

                    }
                </div>
                {
                    localStorages.length > 0 && (
                        <div className="other-side">
                        <h3>Order Summary</h3>
                        <div className="other-flex-summary">
                            <div>
                                <p>Item Cost</p>
                                <p>Discount</p>
                                <p>Delivery fee</p>
                                <p>Total</p>
                            </div>
                            <div>
                                <p>0</p>
                                <p>0</p>
                                <p>0</p>
                                <p>0</p>
                            </div>
                        </div>
                        <div className="flexMIns">
                            <div className="slave">
                                <PaystackButton className="black-button" {...cmponentProp} />
                            </div>
                        </div>

                    
                    </div> )
                }
                
            </div>
        </div>

    </div>
  )
}

export default CartPage