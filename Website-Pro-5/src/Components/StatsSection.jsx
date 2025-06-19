import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./StatsSection.css";

const stats = [
  { number: 1.5, unit: "MILLION LITRES", label: "Produced Over" },
  { number: 29, unit: "MILLION", label: "Scoops Sold" },
  { number: 200, unit: "YEARS", label: "Our Experience" },
];

const Counter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 30);
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(parseFloat(start.toFixed(1)));
      }
    }, 30);
    return () => clearInterval(counter);
  }, [end]);

  return <span>{count % 1 !== 0 ? count.toFixed(1) : count}</span>;
};

const StatsSection = () => {
  return (
    <Container fluid className="stats-section py-5">
      <Row className="justify-content-center align-items-center">
        {stats.map((item, index) => (
          <React.Fragment key={index}>
            <Col lg={3} md={4} sm={12} className="stat-item d-flex">
              <div className="stat-number">
                <Counter end={item.number} />
              </div>
              <div className="ms-3">
              <div className="stat-unit">{item.unit}</div>
              <div className="stat-label">{item.label}</div>
              </div>
            </Col>
            {index < stats.length - 1 && (
              <Col xs="auto" className="d-none d-md-block">
                <div className="svg-divider">
                  <svg height="60" width="10" viewBox="0 0 10 60" fill="none">
                    <path
                      d="M5 0 C0 10, 10 20, 5 30 C0 40, 10 50, 5 60"
                      stroke="#e31c1c"
                      strokeWidth="2"
                      fill="transparent"
                    />
                  </svg>
                </div>
              </Col>
            )}
          </React.Fragment>
        ))}
      </Row>
    </Container>
  );
};

export default StatsSection;
