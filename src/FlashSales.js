import React from 'react'
import notHighlight from "./Images/non-highlight-cart.png"
import crossBag from "./Images/crossBag.png"
import stainlessCan from "./Images/stainlessCan.png"
import watch from "./Images/watch.png"
import whiteHoody from "./Images/hoody.png"
import backPack from "./Images/backpack.png"
import waterCan from "./Images/water-bottle.png"

function FlashSales() {
  return (
    <div className="flash-top">
        <div className="body">
            <div className="top-purple">
                <p className="mid">Flash Sales</p>
                <h3>2:59:59</h3>
                <p className="small">See all</p>
            </div>
        </div>
        <div className="top-selling">
            <div className="topP margin">
                <div className="p-img">
                    <img src={notHighlight} className="no-back" />
                </div>
                <div className="top-div">
                    <div className="centerAlign">
                        <img className="Product" src={crossBag} alt="cart with orange background" />
                    </div>
                    <div className="padding">
                        <p className="no-padding">Peach cross bag</p>
                        <p className="no-padding"><del style={{paddingRight: ".4rem"}}>$12.00</del>$36.00</p>
                        <p className="no-padding some-bisque">12% off</p>
                    </div>
                </div>
            </div>
            <div className="topP margin">
                <div className="p-img">
                    <img src={notHighlight} className="no-back" />
                </div>
                <div className="top-div">
                    <div className="centerAlign">
                        <img className="Product" src={stainlessCan} alt="cart with orange background" />
                    </div>
                    <div className="padding">
                        <p className="no-padding">Stainless Steel</p>
                        <p className="no-padding"><del style={{paddingRight: ".4rem"}}>$3.00</del>$17.00</p>
                        <p className="no-padding some-bisque">60% off</p>
                    </div>
                </div>
            </div>
            <div className="topP margin">
                <div className="p-img">
                    <img src={notHighlight} className="no-back" />
                </div>
                <div className="top-div">
                    <div className="centerAlign">
                        <img className="Product" src={watch} alt="cart with orange background" />
                    </div>
                    <div className="padding">
                        <p className="no-padding">Gold wrist watch</p>
                        <p className="no-padding"><del style={{paddingRight: ".4rem"}}>$10.99</del>$20.99</p>
                        <p className="no-padding some-bisque">50% off</p>
                    </div>
                </div>
            </div>
            <div className="topP margin">
                <div className="p-img">
                    <img src={notHighlight} className="no-back" />
                </div>
                <div className="top-div">
                    <div className="centerAlign">
                        <img className="Product" src={whiteHoody} alt="cart with orange background" />
                    </div>
                    <div className="padding">
                        <p className="no-padding">White hoody</p>
                        <p className="no-padding"><del style={{paddingRight: ".4rem"}}>$30.00</del>$25.99</p>
                        <p className="no-padding some-bisque">50% off</p>
                    </div>
                </div>
            </div>
            <div className="topP margin">
                <div className="p-img">
                    <img src={notHighlight} className="no-back" />
                </div>
                <div className="top-div">
                    <div className="centerAlign">
                        <img className="Product" src={backPack} alt="cart with orange background" />
                    </div>
                    <div className="padding">
                        <p className="no-padding">White Back Pack</p>
                        <p className="no-padding"><del style={{paddingRight: ".4rem"}}>$120.00</del>$100.00</p>
                        <p className="no-padding some-bisque">20% off</p>
                    </div>
                </div>
            </div>
            <div className="topP margin">
                <div className="p-img">
                    <img src={notHighlight} className="no-back" />
                </div>
                <div className="top-div">
                    <div className="centerAlign">
                        <img className="small-width" src={waterCan} alt="cart with orange background" />
                    </div>
                    <div className="padding">
                        <p className="no-padding">Bottle set</p>
                        <p className="no-padding"><del style={{paddingRight: ".4rem"}}>$3.00</del>$1.79</p>
                        <p className="no-padding some-bisque">60% off</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FlashSales