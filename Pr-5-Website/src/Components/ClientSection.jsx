import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ClientSlider.css";
import Image1 from "../assets/asset 76.jpeg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Rengarajan",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text:
      "Would recommend trying any of the Lebagol’s Ice Cream parlor and I bet it will become a habit... Service quality is very good and welcoming with the support staff...",
  },
  {
    name: "Eshan B",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text:
      "While I’ve tried many varieties but Mango remains my all time favorite...! Have been visiting this outlet since few years with friends and family, mostly for takeaway orders...",
  },
  {
    name: "KPindia",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text:
      "It’s freshly made ice cream. The best place to have ice cream in Kharghar. The quality is good and worth its price. Hope the price don't increase...",
  },
];

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

const ClientSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div style={{ backgroundColor: "#fdf3ec", padding: "80px 0", position: "relative" }}>
      <Container>
        <div className="text-center mb-5">
          <h2 style={{ fontSize:"48px", fontFamily: "'Kalnia', serif", fontWeight: "500" }}>
            <span style={{ height:"1rem", width:"1rem", fontFamily: "'Kalnia', serif" ,color: "#e94d65" }}>”</span> <br />
            Happy Clients Say
          </h2>
        </div>

        <Slider {...settings}>
          {testimonials.map((client, index) => (
            <div key={index} className="px-3">
              <div
                style={{
                  background: "#fff",
                  padding: "30px",
                  borderRadius: "8px",
                  boxShadow: "0 0 15px rgba(0,0,0,0.05)",
                  height: "100%",
                }}
              >
                <div className="d-flex gap-3 align-items-center mb-3">
                  <img
                    src={client.image}
                    alt={client.name}
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <div style={{ color: "#f9b115", fontSize: "18px" }}>★★★★★</div>
                    <strong style={{ fontSize: "18px" }}>{client.name}</strong>
                  </div>
                </div>
                <p style={{ color: "#555", fontSize: "15px", marginTop: "10px" }}>
                  “{client.text}”
                </p>
              </div>
            </div>
          ))}
        </Slider>

        <div className="text-center my-4">
          <span
            style={{
              backgroundColor: "#e94d65",
              padding: "5px 15px",
              color: "white",
              borderRadius: "20px",
              fontWeight: "bold",
              marginRight: "10px",
            }}
          >
            ★★★★★
          </span>
          <span style={{ fontWeight: "500" }}>4.8/5</span>
          <span style={{ color: "#999", marginLeft: "10px" }}>
            Trusted by 199,087 Clients
          </span>
        </div>

        <div className="text-center">
          <img
            src={Image1}
            alt="happy clients"
            style={{
              maxWidth: "100%",
              height: "auto",
              marginTop: "40px",
            }}
          />
        </div>
        <div className="text-center my-5">
          <p style={{ fontSize: "20px", fontWeight: "500", color: "#555" }}>
            <span style={{ color: "red", fontSize: "22px", marginRight: "8px" }}>❤️</span>
            We make unforgettable, crave-worthy flavors that bring people together.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ClientSection;
