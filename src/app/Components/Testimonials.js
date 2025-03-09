import React from 'react'
import Slider from "react-slick";
import "./Testimonial.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    
  // Object for data managing it testimonials
  const testimonials = [
    {
      name: "Martha Evans",
      username: "Marketing Executive",
      content: "Aspen Nexus has us amazed with theirtargeting marketing skills. Theirteam have multiple ideas for your campaign and have helped us connect with our audience like never before",
    },
    {
      name: "Mark Bennett",
      username: "CEO design solutions",
      content: "Aspen Nexus transformed our outdated website with a modern design. We have tracked a noticeable difference in reach",
    },
    {
      name: "Emily Carter",
      username: "Shopify store owner",
      content: "Their product hunting and sourcing is a game changer! Introduced new productto our store and the sales are never ending",
    },
  ];

  
  var testimonialsSlideSettings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 800,
    cssEase: "ease",
    swipeToSlide: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Function to generate random gradient
  const generateRandomGradient = () => {
    const randomColor = () => Math.floor(Math.random() * 256);
    const color1 = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    const color2 = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    return `linear-gradient(45deg, ${color1}, ${color2})`;
  };


  return (
    <div>
      {/* Testimonial Section */}
      <section className="sectionSpace" id="testimonials">
        <div className="container">
          <div className="section_heading text-center">
            <h2>What our great customers say About us</h2>
          </div>
          <div className="testimonial_slider">
            <Slider {...testimonialsSlideSettings}>
              {testimonials.map((testimonial, index) => (
                <div className="testi_slide" key={index}>
                  <div className="testi_user">
                    <div className="testi_dp"
                    style={{
                      background: generateRandomGradient(),
                      width: "32px",
                      height: "32px",
                      borderRadius: "100%",
                    }}>
                      {/* <img src={testimonial.image} alt={testimonial.name} /> */}
                    </div>
                    <div className="testi_name">
                      <h3>{testimonial.name}</h3>
                      <p>{testimonial.username}</p>
                    </div>
                  </div>
                  <div className="testi_content">
                    <p>{testimonial.content}</p>
                  </div>
                </div>
              ))}
            </Slider>
        </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
