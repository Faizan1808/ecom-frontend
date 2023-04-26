import '../style.css'
import Seller from './seller'
import Slider from '../../Components/slider'
import { Details } from './seller'
// import phone1 from '../../Images/miscellaneous/corousel_3.png'
import iphone6 from '../../Images/Web/iphone_6_plus.svg'
import Feature from '../../Components/Feature'
import Footer from '../../Components/footer'
import { DownFooter, Cards } from '../../Components/footer'


function Home(){
    return(
        <div>
            <div className="home-main-container">
            
                <Slider />
                <Seller />

                <div className='ad'>
                    <div className='background-color'>

                        <div className='ad-info'>
                            <p className='ad-name'>iPhone 6 Plus</p>
                            <br />

                            <p className='ad-details'>Performance and design. Taken right to the edge.</p>

                            <br /><br />
                            
                            <p className='shop'>SHOP NOW</p>
                            <hr className='ad-hr'/>
                        </div>
                        <img src={iphone6 } alt="iPhone6" className='ad-img'/>

                    </div>
                </div>

                
                <Details />
                <Feature />
                <Footer />

                <div className='footer-container-details'>
                    <DownFooter title = "Infomation"/>
                    <DownFooter title = "Service"/>
                    <DownFooter title = "Extras"/>
                    <DownFooter title = "My Account"/>
                    <DownFooter title = "Userful Links"/>
                    <DownFooter title = "Our Offers"/>
                </div>

                <Cards/>
    
            </div>
        </div>
       
    )
}

export default Home