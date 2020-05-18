import React from "react";
import Slider from "react-slick";

import harden from "../assets/images/harden-1.png";
import hayward from "../assets/images/hayward-1.png";
import embiid from "../assets/images/embiid-1.png";
import prev from "../assets/images/prev.svg";
import next from "../assets/images/next.svg";

const PlayerSlick = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const slideNext = () => {
    slider.slickNext();
  };
  const slidePrevious = () => {
    slider.slickPrev();
  };
  return (
    <div className="nbaHammer-wrap">
      <div id="sequence" className="seq">
        <ul className="seq-canvas">
          <Slider ref={(c) => (slider = c)} {...settings}>
            <li className="step1 valign seq-in" key={1}>
              <div className="vcenter">
                <img
                  data-seq
                  className="feature"
                  src={harden}
                  // src="../images/harden-1.png"
                  width="389"
                  height="300"
                />
                <h2 data-seq className="title">
                  james Harden
                </h2>
              </div>
            </li>
            <li className="step1 valign seq-in" key={2}>
              <div className="vcenter">
                <img
                  data-seq
                  className="feature"
                  src={harden}
                  // src="../images/harden-1.png"
                  width="389"
                  height="300"
                />
                <h2 data-seq className="title">
                  james Harden
                </h2>
              </div>
            </li>
            <li className="step1 valign seq-in" key={3}>
              <div className="vcenter">
                <img
                  data-seq
                  className="feature"
                  src={harden}
                  // src="../images/harden-1.png"
                  width="389"
                  height="300"
                />
                <h2 data-seq className="title">
                  james Harden
                </h2>
              </div>
            </li>
            <li className="step1 valign seq-in" key={4}>
              <div className="vcenter">
                <img
                  data-seq
                  className="feature"
                  src={harden}
                  // src="../images/harden-1.png"
                  width="389"
                  height="300"
                />
                <h2 data-seq className="title">
                  james Harden
                </h2>
              </div>
            </li>
          </Slider>
        </ul>

        <fieldset
          className="nav"
          aria-label="Slider buttons"
          aria-controls="sequence"
        >
          <button
            onClick={slidePrevious}
            type="button"
            className="seq-prev"
            aria-label="Previous"
          >
            <img src={prev} alt="Previous" />
          </button>

          <ul
            role="navigation"
            aria-label="Pagination"
            className="seq-pagination"
          >
            <li className="seq-current">
              <a href="#step1" rel="step1" title="Go to bananas">
                <img src={harden} alt="Bananas" width="50" height="40" />
              </a>
            </li>
            <li>
              <a href="#step2" rel="step2" title="Go to coconut">
                <img src={hayward} alt="Coconut" width="50" height="40" />
              </a>
            </li>
            <li>
              <a href="#step3" rel="step3" title="Go to orange">
                <img src={embiid} alt="Orange" width="50" height="40" />
              </a>
            </li>
          </ul>

          <button
            onClick={slideNext}
            type="button"
            className="seq-next"
            aria-label="Next"
          >
            <img src={next} alt="Next" />
          </button>
        </fieldset>
      </div>
    </div>
  );
};
export default PlayerSlick;
