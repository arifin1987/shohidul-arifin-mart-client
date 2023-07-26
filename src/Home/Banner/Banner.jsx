import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../public/img/img1.avif'
import img2 from '../../../public/img/img2.avif'
import img3 from '../../../public/img/img3.avif'
import img4 from '../../../public/img/img4.jpg'

const Banner = () => {
    return (
        <Carousel>
        <div className='w-3/4 mx-auto'>
            <img src={img1} />
            <p className="legend">Legend 1</p>
        </div>
        <div className='w-3/4 mx-auto'> 
            <img src={img2} />
            <p className="legend">Legend 2</p>
        </div>
        <div className='w-3/4 mx-auto'>
            <img src={img3} />
            <p className="legend">Legend 3</p>
        </div>
        <div className='w-3/4 mx-auto'>
            <img src={img4} />
            <p className="legend">Legend 4</p>
        </div>
    </Carousel>
    );
};

export default Banner;