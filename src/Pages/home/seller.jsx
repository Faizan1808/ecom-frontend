import shipping from '../../Images/Web/shipping.svg'
import { Link } from 'react-router-dom'
import refund from '../../Images/Web/refund.svg'
import support from '../../Images/Web/support.svg'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Seller = ()=>{
    
    const [data,setData] = useState([])
    const [limit, setLimit] = useState(8)

    useEffect(()=>{
        axios
         .get("https://ecom-backend-ufqr.vercel.app/bestSeller")
         .then(res=>{
            setData(res.data)
         })
    },[])
   

    const handleMore =() =>{
        setLimit((prevData) => prevData + 8)
    }

    return(
        <>
            <div className='seller-section'>
                    <h1 className='seller-title'>BEST SELLER</h1>
                    <p className='seller-content'>
                        <Link>All</Link>
                        <Link to="/macbook">Mac</Link>
                        <Link to= '/iphone'>iPhone</Link>
                        <Link to="/ipad">iPad</Link>
                        {/* <Link>iPod</Link> */}
                        <Link to="/accessories">Accessories</Link>
                    </p>
                </div>
            <div className='seller-options-container'>

                {
                    data.slice(0,limit).map((e)=>{
                        return(
                            <div className='option-section'>
                                <p className='product'>HOT</p>
                                <img src={e.image} alt="macImg" className='seller-image'/>
                                
                                <p className='product-name'>{e.name}</p>

                                <br /> 
                                <p className='discount-price'>{e.price} <span className='original-price'>{e.oPrice}</span></p>
                            </div>
                        )
                    })
                }
                <div className=''>
                    <p className='load' onClick={handleMore}>LOAD MORE</p>
                    <hr className='load-hr'/>
                </div>
                
            </div>
        </>
    )
}

export const Details = ()=>{
    return(
        <div className='our-details'>
            <div className='shipping'>
                        <img src={shipping} alt="shipping_img" className='shipping-img'/>
                        <br /> <br />
                        <p className='details-title'>FREE SHIPPING</p>
                        <br />
                        <p className='product-details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                    </div>

                    <div className='refund'>
                        <img src={refund} alt="refund_img" className='refund-img'/>
                        <br /> <br />
                        <p className='details-title'>100% REFUND</p>
                        <br />
                        <p className='product-details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                    </div>

                    <div className='support'>
                        <img src={support} alt="support_img" className='support-img'/>
                        <br /> <br />
                        <p className='details-title'>SUPPORT 24/7</p>
                        <br />
                        <p className='product-details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                    </div>
        </div>
    )
}
export default Seller