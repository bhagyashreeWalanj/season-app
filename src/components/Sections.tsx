import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Autumn from "../assets/autumn.jpeg";
import Winter from "../assets/winter.jpeg";
import Summer from "../assets/summer.jpeg";
import Spring from "../assets/spring.jpeg";
import {
  UilArrowRight,
  UilFacebook,
  UilInstagram,
  UilTwitter,
} from "@iconscout/react-unicons";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../style/sections.css";

// import required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
SwiperCore.use([Thumbs]);

function Sections() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

  return (
    <>
      <div className="media-icons">
        <a href="">
          <UilFacebook />
        </a>
        <a href="">
          <UilInstagram />
        </a>
        <a href="">
          <UilTwitter />
        </a>
      </div>
      <section className="home" id="home">
        <Swiper
          loop={true}
          spaceBetween={0}
          navigation={true}
          mousewheel={true}
          keyboard={{ enabled: true }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="bg-slider"
        >
          <SwiperSlide className="dark-layer">
            <img src={Autumn} alt="autumn" />
            <div className="text-content">
              <h2 className="title">
                Autumn <span>Season</span>{" "}
              </h2>
              <p>
                Autumn, also known as fall in North American English, is one of
                the four temperate seasons. Outside the tropics, autumn marks
                the transition from summer to winter, in September or March.
                Autumn is the season when the duration of daylight becomes
                noticeably shorter and the temperature cools considerably.
              </p>
              <button className="read-btn">
                Read more <UilArrowRight className="arrow-right" />
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="dark-layer">
            <img src={Winter} alt="winter" />
            <div className="text-content">
              <h2 className="title">
                Winter <span>Season</span>{" "}
              </h2>
              <p>
                Winter is the coldest season of the year in polar and temperate
                zones. It occurs between autumn and spring.The tilt of Earth's
                axis causes seasons; winter occurs when a hemisphere is oriented
                away from the Sun. Different cultures define different dates as
                the start of winter, and some use a definition based on weather.
              </p>
              <button className="read-btn">
                Read more <UilArrowRight className="arrow-right" />
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="dark-layer">
            <img src={Summer} alt="summer" />
            <div className="text-content">
              <h2 className="title">
                Summer <span>Season</span>{" "}
              </h2>
              <p>
                Summer is the hottest of the four temperate seasons, occurring
                after spring and before autumn. At or aroundthe summer solstice,
                the earliest sunrise and latest sunset occurs, daylight hours
                are longest and dark hours are shortest, with day length
                decreasing as the season progresses after the solstice.
              </p>
              <button className="read-btn">
                Read more <UilArrowRight className="arrow-right" />
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Spring} alt="spring" />
            <div className="text-content">
              <h2 className="title">
                Spring <span>Season</span>{" "}
              </h2>
              <p>
                Spring, also known as a springtime,is one of the four temperate
                seasons, succeeding winter and preceding summer. There are
                various technical definations of spring, but the local usage of
                the term varies according to local climate, cultures and
                customs. When it is spring in the Northern Hemisphere, it is
                autumn in the Southern Hemisphere and vice versa.
              </p>
              <button className="read-btn">
                Read more <UilArrowRight className="arrow-right" />
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={(swiper) => setThumbsSwiper(swiper)}
          loop={true}
          spaceBetween={0}
          slidesPerView={4}
          //freeMode={true}
          //watchSlidesProgress={true}
          modules={[Thumbs]}
          className="bg-slider-thumbs thumbs-container"
        >
          <SwiperSlide>
            <img src={Autumn} alt="autumn" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Winter} alt="winter" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Summer} alt="summer" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Spring} alt="spring" />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
export default Sections;
