// import React from 'react';
// import Carousel from 'better-react-carousel';
// import './Images.css'; // Import the CSS file for styling

// const Images = () => {
//   return (
//     <Carousel
//       cols={2}
//       rows={1}
//       gap={10}
//       loop
//       autoPlay={2000} // Auto-scroll every 2 seconds
//       showDots // Display dots for navigation
//       className="images-carousel"
//     >
//       {/* Land Images */}
//       <Carousel.Item>
//         <img className="carousel-image" src="https://via.placeholder.com/800x600?text=Land+1" alt="Land 1" />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img className="carousel-image" src="https://via.placeholder.com/800x600?text=Land+2" alt="Land 2" />
//       </Carousel.Item>

//       {/* House Images */}
//       <Carousel.Item>
//         <img className="carousel-image" src="https://via.placeholder.com/800x600?text=House+1" alt="House 1" />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img className="carousel-image" src="https://via.placeholder.com/800x600?text=House+2" alt="House 2" />
//       </Carousel.Item>

//       {/* Apartment Images */}
//       <Carousel.Item>
//         <img className="carousel-image" src="https://via.placeholder.com/800x600?text=Apartment+1" alt="Apartment 1" />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img className="carousel-image" src="https://via.placeholder.com/800x600?text=Apartment+2" alt="Apartment 2" />
//       </Carousel.Item>
//     </Carousel>
//   );
// };

// export default Images;
import React from "react";
import Carousel from "better-react-carousel";
import "./ImageGallery.css";
import image1 from "../assets/image1.avif";
import land1 from "../assets/land1.avif";
import land3 from "../assets/land3.jpg";
import about from "../assets/about.jpg";
import apt from "../assets/apt.jpg";

const Images = () => {
  return (
    <div className="imagegallery">
      <Carousel
        cols={2}
        rows={1}
        gap={0}
        loop
        autoPlay={2000}
        showDots
        className="images-carousel"
      >
        <Carousel.Item>
          <img className="carousel-image" src={land1} alt="Land 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={image1} alt="Land 2" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="carousel-image" src={land1} alt="House 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={about} alt="House 2" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="carousel-image" src={land3} alt="Apartment 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={apt} alt="Apartment 2" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Images;
