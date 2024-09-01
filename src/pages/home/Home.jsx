import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom" 
import Cart from "../../Images/cart.jpg"
import searchIcon from "../../Images/search-icon.png"
import frame123 from "../../Images/Frame 123.png"
import image15 from "../../Images/image 15.png"
import DeliveryTruck from "../../Images/delivery-truck.png" 
import frame133 from "../../Images/Frame 133.png" 
import img22 from "../../Images/image 22.png"
import BlackShoe from "../../Images/leather_shoe.png"
import electroTech from "../../Images/electronics.png"
import phone from "../../Images/image 28.png"
import groupIcon from "../../Images/Group.png"
import jacket from "../../Images/jacket.png"
import bag from "../../Images/bags.png"
import highlight from "../../Images/highlight-cart.png"
import fan from "../../Images/Hand-Fan.png"
import NikeShoe from "../../Images/Nike-Shoe.png"
import Airpods from "../../Images/real-airpods.png"
import fiveStar from "../../Images/Frame 36.png" 
import notHighlight from "../../Images/non-highlight-cart.png"
import iPhone from "../../Images/iphone-15.png"
import gameConsoles from "../../Images/console.png"
import airpodMax from "../../Images/Apple-headphones.png"
import FlashSales from "../../FlashSales.js"
import MoreToLove from "../../MoreToLove.js"
import FooterSection from "../../FooterSection.js"

function Home () {

    const topSelling = [
        {
            name: "Nike Airforce",
            price: "$120.000",
            img_src: NikeShoe,
            isHighlight: true
        },
        {
            name: "Hand Fan",
            price: "$11.99",
            isHighlight: false,
            img_src: fan
        },
        {
            name: "iPhone 15",
            img_src: iPhone,
            isHighlight: false,
            price: "$799.00"
        },
        {
            name: "Apple AirPods",
            img_src: Airpods,
            isHighlight: false,
            price: "$179.00"
        },
        {
            name: "Consoles",
            isHighlight: false,
            img_src: gameConsoles,
            price: "$70.00"
        },
        {
            name: "AirPods Max",
            isHighlight: false,
            img_src: airpodMax,
            price: "$921.85"
        }
    ]

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/Cart")
    }
    
  const [inputVal, setInpVal] = useState("")

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      setInpVal("")
      event.target.blur()
    }
  } 

    return (
        <div>
            <header className="App-header">
            <div className="Top">
              <h2>Market Cart</h2>
              <div id="nav-links">
                <div className="nav-tags">
                  <p className="product">Products</p>
                  <p className="grey">Contact Us</p>
                </div>
                <div>
                <img src={Cart} alt="cart" className="cart" onClick={handleClick}/>
            
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
                    <input type="text" placeholder="Search for product" value={inputVal} onChange={e => setInpVal(e.target.value)} onKeyDown={handleEnterKey}/>
                  </div>
                </div>
                <div className="group-icon">
                  <img src={groupIcon} alt="three dots on a line" className="groupIcon" />
                </div>
            
              </div>
            </div>
            
            
                  </header>
                  <div className="hr"></div>
            
                  <div className="flex">
            <div className="banner">
              <div className="description">
                <h1>Flash Sales</h1>
                <p className="size-tiny">Limited time offers on your <br />favorite items</p>
                <img src={frame123} alt="Coupon" className="percent" />
                <div className="stubborn-element"><p className="p">Any item</p>     <p className="p">|</p>    <div className="img"><img src={DeliveryTruck} alt="delivery truck" className="delivery-truck"/></div>    <p className="p">Free delivery</p></div>
              </div>
              <div className="image-div">
                <img src={image15} alt="woman holding bags and smiling" className="banner-img" />
              </div>
            </div>
            <img src={frame133} alt="three-dots" className="three-dots" />
                  </div>
            
                  <div className="general-group">
            <div className="group-div">
              <div className="title">
                <h4>Shop by Category</h4>
                <p className="p" style={{color: "#D26C0D"}}>See all</p>
              </div>
              <div className="category">
                <div className="top">
                  <img className="part" src={img22} alt="black shirt" />
                  <p className="p">Top</p>
                </div>
                <div className="top">
                  <img className="part background" src={jacket} alt="black shirt" />
                  <p className="p">Jackets</p>
                </div>
                <div className="top">
                  <img className="part background" src={BlackShoe} alt="black shirt" />
                  <p className="p">Shoes</p>
                </div>
                <div className="top">
                  <img className="part background" src={bag} alt="black shirt" />
                  <p className="p">Bags</p>
                </div>
                <div className="top">
                  <img className="part background" src={electroTech} alt="black shirt" />
                  <p className="p">Appliancies</p>
                </div>
                <div className="top">
                  <img className="part background" src={phone} alt="iphone 15" />
                  <p className="p">Gadgets</p>
                </div>
              </div>
            </div>
                  </div>
            
                  <div className="mother-of-all-top">
            <div className="center">
              <div className="red-title">
                <p className="mid">Top selling product</p>
                <p className="small">See all</p>
              </div>
            </div>
            <div className="top-selling">
                {
                    topSelling.map(product => {
                        return (
                            <div className="topP">
                                <div className="p-img">
                                    {
                                        product.isHighlight ? <img src={highlight} className="some-bisque-back"  /> : 
                                        <img src={notHighlight} className="no-back" />
                                    }
                                </div>
                                <div className="top-div">
                                <div className="centerAlign">
                                    <img className="Product" src={product.img_src} alt="cart with orange background" />
                                </div>
                                <div className="padding">
                                    <p className="no-padding">{product.name}</p>
                                    <p className="no-padding">{product.price}</p>
                                    <img src={fiveStar} className="five-star" />
                                </div>
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>
                  </div>
                  <FlashSales />
                  <MoreToLove />
                  <FooterSection />
        </div>
    )
}

export default Home
