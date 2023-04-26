import headset from '../Images/Web/beats_solo_2.svg'
import hsquared from '../Images/Web/H-squared.svg'
import Netatmo from '../Images/Web/Netatmo_rain.svg'
import '../Pages/style.css'

const Feature = ()=>{
    return(
        <div>

            <h1 className='feature-heading'>FEATURED PRODUCTS</h1>
            <div className='featured-products'>
            <div className='featured'>
                <img src={headset} alt="headset" className='featured-products-img'/>
                <div className='featured-products-details'>
                    <p className='feature-title'>Beats Solo 2 On Ear Headphones - Black</p>
                    <p className='discount-price price'>$499 <span className='original-price'>$599</span></p>  
                </div>
            </div>

            <div className='featured'>
                <img src={hsquared} alt="headset" className='featured-products-img'/>
                <div className='featured-products-details'>
                    <p className='feature-title'>H-Squared tvTray</p>
                    <p className='discount-price price'>$499 <span className='original-price'>$599</span></p>  
                </div>
            </div>

            <div className='featured'>
                <img src={Netatmo} alt="headset" className='featured-products-img'/>
                <div className='featured-products-details'>
                    <p className='feature-title'>Netatmo Rain Gauge</p>
                    <p className='discount-price price'>$499 <span className='original-price'>$599</span></p>  
                </div>
            </div>
            </div>
        </div>
    )
}

export default Feature