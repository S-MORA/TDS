import React, { useState } from 'react';
import Link from 'next/link'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import shape from '/public/images/shapes/shape_bored.gif'
import shape2 from '/public/images/shapes/shape_circle_zigzag.svg'

import shape5 from '/public/images/shapes/shape_cartoon_1_shrimp.gif'
import shape6 from '/public/images/shapes/shape_cartoon_2_shrimp.gif'
import Image from 'next/image';


const Hero2 = () => {


  const [copySuccess, setCopySuccess] = useState('');
  const contractAddress = '0000xx000000xxx0';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
      .then(() => {
        setCopySuccess('Copied!');
        setTimeout(() => setCopySuccess(''), 2000); // Reset message after 2 seconds
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

    return (
        <section className="memecoin_hero_section section_decoration text-center" style={{ backgroundImage: `url('/images/backgrounds/shrimp_meme_bg.png')` }}>
          {/* Overlay Div */}
          <div className="hero-overlay">
            <div className="container" style={{ position: 'relative', zIndex: 3 }}>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h1
                    className="hero_title text-uppercase"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    style={{ position: 'relative', zIndex: 3 }}
                  >
                    THE DAPPER 

                    <mark>SHRIMP</mark>
                  </h1>
                  <p
                    className="hero_description"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="100"
                    style={{ position: 'relative', zIndex: 3, color: 'black', fontWeight: 700 }}
                  >
                   Every decision you made in life led you to seeing this shrimp.
                  </p>
                    {/* Contract Address Text */}
                    <p
                      className="contract-address"
                      onClick={copyToClipboard}
                      title="Click to copy"
                      style={{ position: 'relative', zIndex: 3, color: 'white' }}
                    >
                      <span className="copy-tooltip">Click to copy</span>
                      {copySuccess ? copySuccess : contractAddress}
                    </p>

                    {/* Buttons Group */}
                    <ul
                      className="btns_group unordered_list justify-content-center p-0"
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="200"
                    >
                      <li>
                        <Link className="memecoin_btn bg-white" href="/token">
                          <span className="btn_label">Buy Now</span>
                          <span
                            className="btn_bg"
                            style={{ maskImage: `url('/images/shapes/btn_mask_bg.png')` }}
                          ></span>
                        </Link>
                      </li>
                      {/* Removed 'Contract Address' button */}
                    </ul>

                  <AnchorLink className="scrollspy_btn scroll_down" href='#id_about_memecoin_section'>
                    <i className="fa-solid fa-chevron-down"></i>
                    <i className="fa-solid fa-chevron-down"></i>
                    <i className="fa-solid fa-chevron-down"></i>
                    <Image className="spin_image" src={shape2} alt="Zigzag"/>
                  </AnchorLink>
                </div>
              </div>
            </div>
          </div>

          <div className="decoration_item shape_cartoon_1" style={{ zIndex: 3 }}>
            <Image src={shape5} alt="Shape Cartoon" width={450}  />
          </div>
          <div className="decoration_item shape_cartoon_2" style={{ zIndex: 3 }}>
            <Image src={shape6} alt="Shape Cartoon" width={450}  />
          </div>
        </section>
    )
}

export default Hero2;