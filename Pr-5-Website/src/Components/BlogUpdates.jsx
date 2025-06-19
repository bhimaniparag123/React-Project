import React, { useRef } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import "./BlogUpdates.css";

import blog1 from "../assets/asset 54.jpeg";
import blog2 from "../assets/asset 55.jpeg";
import blog3 from "../assets/asset 56.jpeg";
import blog4 from "../assets/asset 57.jpeg";
import blog5 from "../assets/asset 53.jpeg";
import blog6 from "../assets/asset 51.jpeg";

const blogData = [
  {
    img: blog1,
    tags: ["VEGETARIAN"],
    title: "The Best Ice Cream You'll Never Eat",
    date: "March 8, 2024",
    author: "admin",
    excerpt:
      "Summer is here, temperatures are rising, and we are all scrambling for something cold to cool us off. Frozen desserts fly off the shelves at our grocery stores, but...",
  },
  {
    img: blog2,
    tags: ["INGREDIENTS"],
    title: "5 Dreamy Ice Cream Hacks for Summer",
    date: "March 8, 2024",
    author: "admin",
    excerpt:
      "Summer is here, temperatures are rising, and we are all scrambling for something cold to cool us off. Frozen desserts fly off the shelves at our grocery stores, but...",
  },
  {
    img: blog3,
    tags: ["FOOD REVIEWS"],
    title: "French Vanilla Ice Cream For Any Occasion",
    date: "March 8, 2024",
    author: "admin",
    excerpt:
      "Summer is here, temperatures are rising, and we are all scrambling for something cold to cool us off. Frozen desserts fly off the shelves at our grocery stores, but...",
  },
  {
    img: blog4,
    tags: ["FOOD REVIEWS"],
    title: "Fancy Figs? Alake this Ice Cream",
    date: "March 8, 2024",
    author: "admin",
    excerpt:
      "Summer is here, temperatures are rising, and we are all scrambling for something cold to cool us off. Frozen desserts fly off the shelves at our grocery stores, but...",
  },
  {
    img: blog5,
    tags: ["FOOD REVIEWS"],
    title: "Cabernet Chocolate Chunk Ice Creanm",
    date: "March 8, 2024",
    author: "admin",
    excerpt:
      "Summer is here, temperatures are rising, and we are all scrambling for something cold to cool us off. Frozen desserts fly off the shelves at our grocery stores, but...",
  },
  {
    img: blog6,
    tags: ["FOOD REVIEWS"],
    title: "The Best XVays to Cool Off This Summer",
    date: "March 8, 2024",
    author: "admin",
    excerpt:
      "Summer is here, temperatures are rising, and we are all scrambling for something cold to cool us off. Frozen desserts fly off the shelves at our grocery stores, but...",
  },
];

function BlogUpdates() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <div className="blog-updates-wrapper py-5 position-relative">
      <h2 className="text-center fw-medium display-5 mb-5">The Latest & Tastiest Updates</h2>

      <button className="arrow-btn left" onClick={scrollLeft}>
        <BsArrowLeft />
      </button>
      <button className="arrow-btn right" onClick={scrollRight}>
        <BsArrowRight />
      </button>

      <div className="scroll-container" ref={scrollRef}>
        <div className="d-flex flex-nowrap gap-4 justify-content-start">
          {blogData.map((item, index) => (
            <div className="blog-card-wrapper" key={index}>
              <div className="blog-card">
                <div className="blog-img">
                  <Image src={item.img} fluid rounded />
                  <div className="blog-tags">
                    {item.tags.map((tag, idx) => (
                      <span className="custom-tag" key={idx}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="blog-content mt-3 px-2">
                  <div className="author-info mb-2 text-muted d-flex align-items-center gap-2">
                    <FaUserCircle size={40} />
                    <small>
                      By <span className="text-danger fw-semibold">{item.author}</span> &nbsp; {item.date}
                    </small>
                  </div>
                  <h4 className="fw-medium mb-2" style={{fontSize: "28px"}}>{item.title}</h4>
                  <p className="text-muted">{item.excerpt}</p>
                  <a href="#" className="read-more text-dark fw-semibold">
                    → Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <button className="top-btn">↑<br />TOP</button> */}
    </div>
  );
}

export default BlogUpdates;
