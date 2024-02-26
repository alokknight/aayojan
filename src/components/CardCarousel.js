import React, { useEffect } from 'react'
import $ from 'jquery'

function CardCarousel() {
    useEffect(()=>{
        var multipleCardCarousel = document.querySelector(
          "#carouselExampleControls"
        );
        if (window.matchMedia("(min-width: 768px)").matches) {
        //   var carousel = new Carousel(multipleCardCarousel, {
        //     interval: false,
        //   });
          var carouselWidth = $(".carousel-inner")[0].scrollWidth;
          var cardWidth = $(".carousel-item").width();
          var scrollPosition = 0;
          $("#carouselExampleControls .carousel-control-next").on("click", function () {
            if (scrollPosition < carouselWidth - cardWidth * 4) {
              scrollPosition += cardWidth;
              $("#carouselExampleControls .carousel-inner").animate(
                { scrollLeft: scrollPosition },
                600
              );
            }
          });
          $("#carouselExampleControls .carousel-control-prev").on("click", function () {
            if (scrollPosition > 0) {
              scrollPosition -= cardWidth;
              $("#carouselExampleControls .carousel-inner").animate(
                { scrollLeft: scrollPosition },
                600
              );
            }
          });
        } else {
          $(multipleCardCarousel).addClass("slide");
        }
      },[])
  return (
    <div>
        <div id="carouselExampleControls" className="carousel" data-bs-ride="carousel">
            <div className="carousel-inner text-center">
                <div className="carousel-item active">
                    <div className="card bg-info">
                        <div className="img-wrapper"><img src="https://github.com/shikhar790/imagepoint/blob/main/cs.jpg?raw=true" className="d-block w-95" alt="Gallery" /> </div>
                        <div className="card-body bg-dark">
                            <h5 className="card-title text-warning">Cultural Synod</h5>
                        
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card">
                        <div className="img-wrapper"><img src="https://github.com/shikhar790/imagepoint/blob/main/ces.jpg?raw=true" className="d-block w-100" alt="Gallery" /> </div>
                        <div className="card-body bg-dark">
                            <h5 className="card-title text-warning">CES</h5>
                            
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card">
                        <div className="img-wrapper"><img src="https://github.com/shikhar790/imagepoint/blob/main/robotics.jpg?raw=true" className="d-block w-100" alt="Gallery" /> </div>
                        <div className="card-body bg-dark">
                            <h5 className="card-title text-warning">Robotics Club</h5>
                            
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card">
                        <div className="img-wrapper"><img src="https://github.com/shikhar790/imagepoint/blob/main/sports_mmmut.jpg?raw=true" className="d-block w-100" alt="Gallery" /> </div>
                        <div className="card-body bg-dark">
                            <h5 className="card-title text-warning">Sports_MMMUT</h5>
                            
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card">
                        <div className="img-wrapper"><img src="https://github.com/shikhar790/imagepoint/blob/main/uic.jpg?raw=true" className="d-block w-100" alt="Gallery" /> </div>
                        <div className="card-body bg-dark">
                            <h5 className="card-title text-warning">University Innovation Cell</h5>
                            
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card">
                        <div className="img-wrapper"><img src="https://github.com/shikhar790/imagepoint/blob/main/ieee.jpg?raw=true" className="d-block w-100" alt="Gallery" /> </div>
                        <div className="card-body bg-dark">
                            <h5 className="card-title text-warning">IEEE</h5>
                            
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card">
                        <div className="img-wrapper"><img src="https://github.com/shikhar790/imagepoint/blob/main/tnp.jpg?raw=true" className="d-block w-100" alt="Gallery" /> </div>
                        <div className="card-body bg-dark">
                            <h5 className="card-title text-warning">Training and Placement Cell</h5>
                            
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card">
                        <div className="img-wrapper"><img src="https://github.com/shikhar790/imagepoint/blob/main/eel.jpg?raw=true" className="d-block w-100" alt="Gallery" /> </div>
                        <div className="card-body bg-dark">
                            <h5 className="card-title text-warning">EEL</h5>
                            
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card">
                        <div className="img-wrapper"><img src="https://github.com/shikhar790/imagepoint/blob/main/sae.jpg?raw=true" className="d-block w-100" alt="Gallery" /> </div>
                        <div className="card-body bg-dark">
                            <h5 className="card-title text-warning">SAE</h5>
                            
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default CardCarousel