import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ImageSlider.css'

export default function ImageSlider() {
    return (
        <div className="carousel-wrapper">
            <Carousel  className="home__carousel" infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showStatus={false} >
                <div>
                    <img src="images/image1.jpg" />
                </div>
                <div>
                    <img src="images/image2.jpg" />
                </div>
                <div>
                    <img src="images/image3.jpg" />
                </div>
                <div>
                    <img src="images/image4.jpg" />
                </div>
                <div>
                    <img src="images/image5.jpg" />
                </div>
            </Carousel>
        </div>
    );
}