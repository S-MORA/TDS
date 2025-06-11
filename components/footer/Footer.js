import React from 'react';
import shapeIconBottom from '/public/images/shapes/shape_ico_hero_section_bottom.svg';
import { Link } from 'react-scroll'
import NavLink from 'next/link'
import Image from 'next/image';



const Footer = () => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <footer className="meme_site_footer section_decoration">
            <div className="container text-center">
                <h2 className="footer_heading text-uppercase" data-aos="fade-up" data-aos-duration="800">
                    let&apos;s buy a token
                </h2>
                <ul className="pagelist_block unordered_list justify-content-center text-uppercase" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                    <li>
                        <a className="nav-link" href="https://pump.fun/" target="_blank" rel="noopener noreferrer">
                            <span className="pagelist_label">Pump.fun</span>
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="https://twitter.com/the_dapper_shrimp" target="_blank" rel="noopener noreferrer">
                            <span className="pagelist_label">Twitter</span>
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="https://t.me/thedappershrimp" target="_blank" rel="noopener noreferrer">
                            <span className="pagelist_label">Telegram</span>
                        </a>
                    </li>
                </ul>
                <div className="footer_bottom mt-4">
                    <p className="copyright_text m-0">
                        Copyright© 2025 Dapper Shrimp. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
