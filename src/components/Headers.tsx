import { useState, useEffect } from "react";
import "../style/Headers.css";
// import UilReact from "iconscout/react-unicons/icons/uil-react";
import {
  UilHome,
  UilCompass,
  UilInfoCircle,
  UilDocumentLayoutLeft,
  UilEnvelope,
  UilApps,
  UilTimes,
  UilThunderstormSun,
} from "@iconscout/react-unicons";
import { Link as ScrollLink } from "react-scroll";

function Headers() {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const header = document.querySelector("header");
      header?.classList.toggle("sticky", window.scrollY > 0);
    });
  }, []);

  const openMenu = () => {
    setToggleMenu(true);
  };
  const closeMenu = () => {
    setToggleMenu(false);
  };
  return (
    <>
      <header>
        <div className="nav-bar">
          <ScrollLink to="home" smooth={true} className="logo">
            <UilThunderstormSun className="logo-icon" />
            seas
          </ScrollLink>
          <div className={toggleMenu ? "navigation active" : "navigation"}>
            <div className="nav-items">
              <UilTimes className="nav-close-btn" onClick={() => closeMenu()} />

              <ScrollLink to="home" smooth={true}>
                <UilHome className="menu-icons" />
                Home
              </ScrollLink>
              <a href="#">
                <UilCompass className="menu-icons" />
                Explore
              </a>
              <ScrollLink to="about" smooth={true}>
                <UilInfoCircle className="menu-icons" />
                About
              </ScrollLink>
              <a href="#">
                <UilDocumentLayoutLeft className="menu-icons" />
                Blog
              </a>
              <a href="">
                <UilEnvelope className="menu-icons" />
                Contact
              </a>
            </div>
          </div>
          <UilApps className="nav-menu-btn" onClick={() => openMenu()} />
        </div>
      </header>
    </>
  );
}

export default Headers;
