import React, { components } from "react";

function Services() {
  return (
    <>
      <div className="service-content" id="services">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="left-text">
                <h4>More about SakuraWave</h4>
                <div className="line-dec" />
                <p>
                  We at SakuraWave have an ambition of uniting the anime
                  community through a large number of ways.
                </p>
                <ul>
                  <li>- Praesent porta urna id eros</li>
                  <li>- Curabitur consectetur malesuada</li>
                  <li>- Nam pretium imperdiet enim</li>
                  <li>- Sed viverra arcu non nisi efficitur</li>
                </ul>
                <div className="primary-button">
                  <a href="#portfolio">Our Products</a>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6">
                  <div className="service-item">
                    <h4>Youtube Community</h4>
                    <div className="line-dec" />
                    <p>
                      Sed lacinia ligula est, at venenatis ex iaculis quis.
                      Morbi sollicitudin nulla eget odio pellentesque.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="service-item">
                    <h4>Vaporwave/Anime apparel</h4>
                    <div className="line-dec" />
                    <p>
                      Sed lacinia ligula est, at venenatis ex iaculis quis.
                      Morbi sollicitudin nulla eget odio pellentesque.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="service-item">
                    <h4>Instagram Community</h4>
                    <div className="line-dec" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed lacinia ligula est, at venenatis ex iaculis quis.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="service-item">
                    <h4>Lofi &amp; Chill</h4>
                    <div className="line-dec" />
                    <iframe
                      width="50%"
                      height="20%"
                      src="https://www.youtube.com/embed/Dy1v1Vwjw_c"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
