import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar({ currentPage, height = 100 }) {
  useEffect(() => {
    const editclass = document.getElementById(currentPage);
    editclass.classList.add("active");

    console.log(height);
    const select = (el, all = false) => {
      el = el.trim();
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };

    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all);
      if (selectEl) {
        if (all) {
          selectEl.forEach((e) => e.addEventListener(type, listener));
        } else {
          selectEl.addEventListener(type, listener);
        }
      }
    };

    const onscroll = (el, listener) => {
      el.addEventListener("scroll", listener);
    };

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select("#navbar .scrollto", true);
    const navbarlinksActive = () => {
      let position = window.scrollY + 200;
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        let section = select(navbarlink.hash);
        if (!section) return;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          navbarlink.classList.add("active");
        } else {
          navbarlink.classList.remove("active");
        }
      });
    };
    window.addEventListener("load", navbarlinksActive);
    onscroll(document, navbarlinksActive);

    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      let header = select("#header");
      let offset = header.offsetHeight;

      let elementPos = select(el).offsetTop;
      window.scrollTo({
        top: elementPos - offset,
        behavior: "smooth",
      });
    };

    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select("#header");
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > height) {
          selectHeader.classList.add("header-scrolled");
        } else {
          selectHeader.classList.remove("header-scrolled");
        }
      };
      window.addEventListener("load", headerScrolled);
      onscroll(document, headerScrolled);
    }

    /**
     * Mobile nav toggle
     */
    on("click", ".mobile-nav-toggle", function (e) {
      select("#navbar").classList.toggle("navbar-mobile");
      this.classList.toggle("bi-list");
      this.classList.toggle("bi-x");
    });

    /**
     * Mobile nav dropdowns activate
     */
    on(
      "click",
      ".navbar .dropdown > a",
      function (e) {
        if (select("#navbar").classList.contains("navbar-mobile")) {
          e.preventDefault();
          this.nextElementSibling.classList.toggle("dropdown-active");
        }
      },
      true
    );

    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on(
      "click",
      ".scrollto",
      function (e) {
        if (select(this.hash)) {
          e.preventDefault();

          let navbar = select("#navbar");
          if (navbar.classList.contains("navbar-mobile")) {
            navbar.classList.remove("navbar-mobile");
            let navbarToggle = select(".mobile-nav-toggle");
            navbarToggle.classList.toggle("bi-list");
            navbarToggle.classList.toggle("bi-x");
          }
          scrollto(this.hash);
        }
      },
      true
    );
  });

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="all-wrapper">
        <header id="header" className="fixed-top desktop-menu menu-top-w">
          <div className="container d-flex align-items-center justify-content-lg-between">
            <h1 className=" me-auto me-lg-0">
              <Link to="/">
                VIVA LA VIDA
              </Link>
            </h1>
            <nav id="navbar" className="navbar order-last order-lg-0 ">
              <ul>
                <li>
                  <Link id="home" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link id="services" to="/product/:id">
                    Services
                  </Link>
                </li>
                <li>
                  <Link id="aboutus" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>

            <a href="mailto:contact@weblessproject.com" target="_blank" className="get-started-btn scrollto">
              Contact Us
            </a>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;
