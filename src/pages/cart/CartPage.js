import React from 'react'
import { useState } from 'react'
import groupIcon from "./Group.png"
import image from "./assets/image 37.png"
import searchIcon from "./search-icon.png"
// import waterCan from "./assets/water-bottle.png"
import {PaystackButton, PaytackButton} from "react-paystack"
import watch from "./assets/watch.png"
import Cart from "./cart.jpg"

function CartPage() {

    const amount = 3
    const email = "jomakazejr@gmail.com"
    const fullname = "Lawal Treasure"
    const userphone = "08084919144"
    const [input, setInput] = useState("");
    const [userAddress, setUserAddress] = useState("");
    const [count, setCount] = useState(0);
    const [countTWO, setCountTWO] = useState(0);
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
                <h2>Cart</h2>
                <div id="nav-links">
                    <div className="nav-tags">
                        <p className="product">Products</p>
                        <p className="grey">Contact Us</p>
                        </div>
                        <div>
                        <img src={Cart} alt="cart" className="cart" />
                        
                    </div>
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
                    <div className="inpCover">
                        <input placeholder="Delivery Address" value={userAddress} onChange={e => setUserAddress(e.target.value)} onKeyDown={handleEnterKeyTwo} />
                    </div>
                    <div className="flexback">
                        <div className="noPM imagediv">
                            <img src={image} className="water-flask"/>
                        </div>
                        <div className="noPM black-border">
                            <h5>Stainless temperature display water bottle flask</h5>
                            <p className="displayColor noPMs">Blue</p>
                            <p className="small">In stock</p>
                            <p className="mid"><del style={{paddingRight: ".4rem"}}>$120.00</del>$60.00</p>
                            <p className="mid some-bisque">60% off</p>
                        </div>
                        <div className="noPM left-side-rs">
                            <div className="first">
                                <p className="mid some-bisque noPM">Remove</p>
                            </div>
                            <div className="last">
                                <div>
                                    <button className="minus" onClick={decrement}>-</button>
                                    <span style={{padding: "0 .4rem", color: "black"}}>{count}</span>
                                    <button className="add" onClick={increment}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flexback">
                        <div className="noPM imagediv">
                            <img src={watch} className="watch noPM"/>
                        </div>
                        <div className="noPM black-border">
                            <h5>Gold Lamborghini Watch</h5>
                            {/* <h5>Stainless temperature display water bottle flask</h5> */}
                            <p className="displayColor noPMs">Gold</p>
                            <p className="small">In stock</p>
                            <p className="mid"><del style={{paddingRight: ".4rem"}}>$120.00</del>$60.00</p>
                            <p className="mid some-bisque">60% off</p>
                        </div>
                        <div className="noPM left-side-rs">
                            <div className="first">
                                <p className="mid some-bisque noPM">Remove</p>
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
                </div>
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
                </div>
            </div>
        </div>

    </div>
  )
}

export default CartPage