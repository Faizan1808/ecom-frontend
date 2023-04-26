import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import SweetPagination from "sweetpagination"

function StoreProducts(){
  const [data,setData] = useState([])
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill(data));

  const dispatch = useDispatch();

  useEffect(()=>{
      axios
        .get("https://ecom-backend-ufqr.vercel.app/bestSeller")
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
        <div className="product-home">
          {currentPageData.map((i) => (
            <ProductCard
              key={i.id}
              image={i.image}
              name={i.name}
              price={i.price}
              oPrice = {i.oPrice}
              id={i.id}
              handler={addToCartHandler}
            />
          ))}
        </div>
          <SweetPagination
          currentPageData={setCurrentPageData}
          dataPerPage={5}
          getData={data}
          navigation={true}/>
        
      </>
    );
}

export const ProductCard = ({ name, id, price, handler, image , oPrice}) => (
    <div className="store-productCard">
      <img src={image} alt={name} className="product-img"/>
      <p>{name}</p>
      <h4 className="product-price">₹{price} <span className="original-price">{oPrice}</span></h4>
      <button onClick={() => handler({ name, price, id, quantity: 1, image })} className="add-cart">
        <span className="add-cart-text">Add to Cart</span>
      </button>
    </div>
  );


export default StoreProducts
