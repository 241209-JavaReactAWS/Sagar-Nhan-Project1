import React from 'react';

const Carousel: React.FC = () => (
  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    {/* Carousel Indicators */}
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="/assets/car6.jpg" className="d-block w-100" alt="First slide" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Car 6</h5>
          <p>Diecast model of a vintage car.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/assets/car7.jpg" className="d-block w-100" alt="Second slide" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Car 7</h5>
          <p>Diecast model of a modern car.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/assets/car8.jpg" className="d-block w-100" alt="Third slide" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Car 8</h5>
          <p>Diecast model of a race car.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/assets/car9.jpg" className="d-block w-100" alt="Fourth slide" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Car 9</h5>
          <p>Diecast model of a classic car.</p>
        </div>
      </div>
    </div>

    {/* Carousel Controls (Previous/Next Arrows) */}
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);

export default Carousel;
