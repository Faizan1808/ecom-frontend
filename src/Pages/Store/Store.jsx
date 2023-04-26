import StoreProducts from "../../Components/StoreProducts"
import iphone8 from "../../Images/Web/iphone_8.svg"
import Footer from "../../Components/footer"
import { DownFooter, Cards } from "../../Components/footer"

export default function Store() {
  
  return (
    <>
      <div className="store">
        <div className="w">
          <h3>Store </h3>
        </div>
        <div className="store__container">
          <div className="store__left">
            <div className="store__accesories">
              <h2>ACCESSORIES</h2>
              <div>
                <p>Apple Car</p>
                <p>2</p>
              </div>
              
              <div>
                <p>Air port & wireless</p>
                <p>48</p>
              </div>

              <div>
                <p>Cables & Docks</p>
                <p>14</p>
              </div>

              <div>
                <p>Charging Devices</p>
                <p>23</p>
              </div>

              <div>
                <p>Headphones</p>
                <p>95</p>
              </div>
            </div>
            <div className="store__prices">
              <h3>PRICES</h3>
              <div>
                <p>Range:</p>
                <p>$399-499</p>
              </div>
            </div>
            <div className="store__colors">
              <h3>COLORS</h3>

              <div className="store__colors-btnDiv">
                <button className="btn-blue"></button>
                <button className="btn-red"></button>
                <button className="btn-black"></button>
                <button className="btn-yellow"></button>
                <button className="btn-gold"></button>
              </div>
            </div>
            <div className="store__brand">
              <h3>BRAND</h3>
              <div>
                <p>Apple</p>
                <p>99</p>
              </div>
              <div>
                <p>LG</p>
                <p>99</p>
              </div>
              <div>
                <p>Samsung</p>
                <p>99</p>
              </div>
              {/* <div>
                <p>Siemens</p>
                <p>99</p>
              </div> */}
            </div>
          </div>
          <div className="store__right">
            <div className="store__banner">
              <div className="store__banner-text">
                <h1 className="store__banner-heading">iPhone 6 Plus</h1>
                <p>Performance and design. Taken right to the edge.</p>
                <button className="store__banner-btn">SHOP NOW</button>
              </div>
              <img src={iphone8} alt="iPhone" className="store__banner-img" />
            </div>
            <div className="store__productsList">
              <StoreProducts  />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div className='footer-container-details'>
          <DownFooter title = "Infomation"/>
          <DownFooter title = "Service"/>
          <DownFooter title = "Extras"/>
          <DownFooter title = "My Account"/>
          <DownFooter title = "Userful Links"/>
          <DownFooter title = "Our Offers"/>
      </div>
      <Cards />
    </>
  )
}
