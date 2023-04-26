
import axios from "axios"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import Footer from "../../Components/footer"
import { DownFooter, Cards } from "../../Components/footer"

function Accessories(){
  const [data,setData] = useState([])
  const dispatch = useDispatch();

  useEffect(()=>{
      axios
          .get("https://ecom-backend-ufqr.vercel.app/accessories")
          .then((res)=>{
              setData(res.data)
          })
  })

  const addToCartHandler = (options) => {
      dispatch({ type: "addToCart", payload: options });
      dispatch({ type: "calculatePrice" });
      toast.success("Added To Cart");
    };

      return (
        <>
        <div className="head-div">
          <h1 className="page-heading">ACCESSORIES</h1>
        </div>
          <div className="home">
            {data.map((i) => (
              <ProductCard
                key={i.id}
                image={i.image}
                name={i.name}
                price={i.price}
                oPrice={i.oPrice}
                id={i.id}
                handler={addToCartHandler}
              />
            ))}
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
      );
}

const ProductCard = ({ name, id, price, handler, image, oPrice }) => (
    <div className="productCard">
      <img src={image} alt={name} className="product-img"/>
      <p>{name}</p>
      <h4 className="product-price">₹{price} <span className="original-price">{oPrice}</span></h4>
      <button onClick={() => handler({ name, price, id, quantity: 1, image })} className="add-cart">
        <span className="add-cart-text">Add to Cart</span>
      </button>
    </div>
);
export default Accessories