import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../../styles/carousel.css';

export default function BootstrapHomeCarousel() {
  return (
    <Carousel fade interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Products/corrugated-boxes.jpg"
          alt="Corrugated Boxes"
          style={{ height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Corrugated Boxes</h3>
          <p>High-quality packaging solutions.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Products/corrugated-2-boxes.jpg"
          alt="Corrugated Boards"
          style={{ height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Corrugated Boards</h3>
          <p>Strong and durable boards.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Products/corrugated-rolls.jpg"
          alt="Corrugated Rolls"
          style={{ height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Corrugated Rolls</h3>
          <p>Flexible packaging solutions.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

