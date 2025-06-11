import React from 'react';
import { Link } from 'react-scroll'
import NavLink from 'next/link'
import shapeCartoon1 from '/public/images/shapes/dapper_shrimp.png';
import shapeCartoon2 from '/public/images/shapes/dapper_shrimp_2.png';
import shapeCartoon3 from '/public/images/shapes/shrimp_sitting.png';
import Image from 'next/image';

const Footer = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
}
  return (
    <footer className="meme_site_footer section_decoration">
      <div className="container">
        <h2
          className="footer_heading text-center text-uppercase"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          i'm a shrimp
        </h2>
        <ul
          className="pagelist_block unordered_list justify-content-center text-uppercase"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <li>
            <a className="nav-link" href="https://pump.fun/" target="_blank" rel="noopener noreferrer">
              <span className="pagelist_label">Pump.fun</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="https://twitter.com/the_dapper_shrimp" target="_blank" rel="noopener noreferrer">
              <span className="pagelist_label">X</span>
            </a>
          </li>

        </ul>

      </div>
      <div className="decoration_item cartoon_shape_1">
        <Image src={shapeCartoon1} alt="Cartoon" width={400} />
      </div>
      <div className="decoration_item cartoon_shape_2">
        <Image src={shapeCartoon2} alt="Cartoon" />
      </div>
      <div className="decoration_item cartoon_shape_3">
        <Image src={shapeCartoon3} alt="Cartoon" width={300} />
      </div>
    </footer>
  );
};

export default Footer;
