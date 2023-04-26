import ishop from '../Images/ishop.svg'
import fb from '../Images/Web/facebook.svg'
import twitter from '../Images/Web/twitter.svg'
import '../Pages/style.css'
import mastercard from '../Images/Web/master_card.svg'
import paypal from '../Images/Web/Paypal.svg'
import visa from '../Images/Web/visa.svg'
import westernUnion from '../Images/Web/Western_union.svg'

const Footer = (props) =>{
    return(
        <div>

            <hr />

                <div className="footer-container">
                    <div className="ishop">
                        <img src={ishop} alt="ishop" />
                        <br /> <br /> 
                        <p className='footer-details'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
                    </div>

                    <div className="follow">
                        <p className="footer-title">Follow Us</p>
                        <br /> 
                        <p className='footer-details'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
                        <div className='social-images'>
                            <img src={fb} alt="" />
                            <img src={twitter} alt="" />
                        </div>
                    </div>

                    <div className="contact">
                        <p className="footer-title">Contact Us</p>
                        <br /> 
                        <p className='footer-details'>iShop: address @building 124  Call us now: 0123-456-789 Email: support@whatever.com</p>
                    </div>
                </div>

        </div>
    )
}

export const DownFooter =(props)=>{
    return(
        <div>
            <div >
                    <p className='downfooter-title'>{props.title}</p>
                    <p className='downfooter-info'>About Us</p>
                    <p className='downfooter-info'>Information</p>
                    <p className='downfooter-info'>Privacy Policy</p>
                    <p className='downfooter-info'>Terms & Conditions</p>
            </div>
        </div>
    )
}

export const Cards = () =>{
    return(
        <div>
            <div className="cards">
                <img src={westernUnion} alt="" className='card-img'/>
                <img src={mastercard} alt="" className='card-img'/>
                <img src={paypal} alt="" className='card-img'/>
                <img src={visa} alt="" className='card-img'/>
            </div>
        
        </div>
    )
}
export default Footer