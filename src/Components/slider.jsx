import { useState } from "react"
import image1 from '../Images/miscellaneous/corousel_1.png'
import image2 from '../Images/miscellaneous/corousel_2.png'
import image3 from '../Images/miscellaneous/corousel_3.png'
import '../Pages/style.css'


const Slider = () =>{
    const [image, setImage] = useState(0)
    const [images] = useState([image1,image2,image3])
    
    setInterval(() => {
        setImage(image => image < 3 ? image + 1 : 0)
    }, 3000);

    // console.log(image)
    
    return(
        <div>
            <img src={images[image]} alt="" className='Iphone-img' />
        </div>
    )
}

export default Slider