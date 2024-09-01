import React from 'react'
import {useState, useEffect} from "react"
import mailIcon from "./Images/mailIcon.png"
import apple from "./Images/iphone-icon.png"
import googlePlay from "./Images/google-play-icon.png"
import fb from "./Images/fb-icon.png"
import ig from "./Images/ig-icon.png"
import x from "./Images/x-icon.png"

function FooterSection() {
    const [input, setInput] = useState("")

    const handleEnterKey = (event) => {
        if (event.key === "Enter") {
          setInput("")
          event.target.blur()
        }
    } 
    
  return (
    <div>
        <div className="grey-back">
            <div>
                <h2>Cart</h2>
            </div>
            <div>
                <h6>New to cart?</h6>
                <p className="small no smallP">Subscribe to our newsletter and get updates on our latest offer</p>
                <div className="search-two">
                    <img src={mailIcon} className="mail" />
                    <input className="inp" placeholder="Enter your email" type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleEnterKey}/>
                </div>
                <div className="flex-display">
                    <div>
                        <input type="checkbox" className="checkbox" />
                    </div>
                    <div className='main'>
                        <p className="small white noPMs">I agree to Cart's privacy and cookie policy. You can unsubscribe from the news letter at any time</p>
                        <p className="small white noPM underline">I agree with the legal term</p>
                    </div>
                </div>
            </div>
            <div>
                <h4 className="noPss">Download cart on your mobile device</h4>
                <p className="small noPMd">Order items from the comfort of your room</p>

                <div className="Download">
                    <div className="ios">
                        <div>
                            <img src={apple} className="apple-icon" />
                        </div>
                        <div>
                            <p className="noPM small">Download on the</p>
                            <h4 className="noPM">App Store</h4>
                        </div>
                    </div>
                    <div className="andriod">
                        <div>
                            <img src={googlePlay} className="andriod-icon" />
                        </div>
                        <div>
                            <p className="noPM small">Get it on</p>
                            <h4 className="noPM">Google Play</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="main-footer">
            <div className="footer01">
                <div className="first001">
                    <h5 className="noPMs">Store Categories</h5>
                    <p className="grey mid noPMs">Gadgets</p>
                    <p className="grey mid noPMs">Appliancies</p>
                    <p className="grey mid noPMs">Bags</p>
                    <p className="grey mid noPMs">Top</p>
                    <p className="grey mid noPMs">Jackets</p>
                </div>
                <div>
                    <h5 className="noPMs">Customer Service</h5>
                    <p className="grey mid noPMs">Help Center</p>
                    <p className="grey mid noPMs">Transaction Service</p>
                    <p className="grey mid noPMs">Terms & Condition</p>
                </div>
                <div>
                    <h5 className="noPMs">Shopping with us</h5>
                    <p className="grey mid noPMs">Making Payments</p>
                    <p className="grey mid noPMs">Delivery Options</p>
                    <p className="grey mid noPMs">Buyers Protection</p>
                </div>
                
                <div>
                    <h5 className="noPMs">Need Help</h5>
                    <p className="grey noPMs mid">Chat with us</p>
                    <p className="grey noPMs mid">Help Center</p>
                    <p className="grey noPMs mid">Contact Us</p>
                </div>

                <div>
                    <h5 className="noPMs">Stay Connected</h5>
                    <div className="icons">
                        <div className="grey-backg">
                            <img src={fb} className="social" />
                        </div>
                        <div className="grey-backg">
                            <img src={ig} className="social" />
                        </div>
                        <div className="grey-backg">
                            <img src={x} className="social" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer02">
                Copyright &copy; 2010-2024 Cart All rights reserved.
            </div>
        </div>
    </div>
  )
}

export default FooterSection