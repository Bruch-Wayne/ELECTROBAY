import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "../../styles/Hero.css";

const Hero = () => {
  return (
    <div id="hero">
      <Carousel fade pause="hover" interval={5000}>
        <Carousel.Item
          style={{
            backgroundImage: `url('./images/Razer.jpg')`,
            height: "100vh",
          }}
        >
          <Carousel.Caption className="text-right">
            <h3>Experience Gaming Like Never Before.</h3>
            <p className="text-right">
              Get the latest gaming gear and accessories at our store.
            </p>
            <Button variant="primary" className="btn-shop" href="#All-products">
              Shop Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{
            backgroundImage: `url('./images/gold-smartphones.jpg')`,
            height: "100vh",
          }}
        >
          <Carousel.Caption className="text-right">
            <h3>Get the Best Deals on Mobile Devices.</h3>
            <p className="text-right">
              Discover the latest smartphones and tablets for all your mobile
              needs.
            </p>
            <Button variant="primary" className="btn-shop" href="#All-products">
              Shop Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{
            backgroundImage: `url('./images/TV.jpg')`,
            height: "100vh",
          }}
        >
          <Carousel.Caption className="text-right">
            <h3>Bring Your Home Theater to Life</h3>
            <p className="text-right">
              Shop our wide range of high-quality TVs and sound systems for an
              immersive entertainment experience.
            </p>
            <Button variant="primary" className="btn-shop" href="#All-products">
              Shop Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
