import React, { useState, useEffect, useRef } from 'react'
import ModalVideo from 'react-modal-video'

// Import images
import aboutMemecoinImage from '/public/images/about/shrimp_knife.gif';

import aboutMemecoin2Image from '/public/images/about/shrimp_balling.gif';
import shapeNetImage from '/public/images/shapes/shape_net.svg';
import Image from 'next/image';

const AboutSection = () => {

    const [isOpen, setOpen] = useState(false)

    const tiktokRef = useRef(null);

    // Add refs for the carousels
    const instagramCarouselRef = useRef(null);
    const tiktokCarouselRef = useRef(null);

    // Scrolling functions
    const scrollLeft = (ref) => {
        ref.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = (ref) => {
        ref.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    useEffect(() => {
        // Initialize Instagram embeds
        const igPosts = [
            `<blockquote class='instagram-media' data-instgrm-permalink='https://www.instagram.com/p/DBwvzRHRzBF/?utm_source=ig_embed&amp;utm_campaign=loading' data-instgrm-version='14' style='background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);'></blockquote>`,
            `<blockquote class='instagram-media' data-instgrm-permalink='https://www.instagram.com/p/C_YAmohRt53/?utm_source=ig_embed&amp;utm_campaign=loading' data-instgrm-version='14' style='background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);'></blockquote>`,
            `<blockquote class='instagram-media' data-instgrm-permalink='https://www.instagram.com/p/C9SyUc3x1D5/?utm_source=ig_embed&amp;utm_campaign=loading' data-instgrm-version='14' style='background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);'></blockquote>`,
            `<blockquote class='instagram-media' data-instgrm-permalink='https://www.instagram.com/reel/Cp3UImtrLiR/?utm_source=ig_embed&amp;utm_campaign=loading' data-instgrm-version='14' style='background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);'></blockquote>`,
            `<blockquote class='instagram-media' data-instgrm-permalink='https://www.instagram.com/reel/DHE66RLRGeO/?utm_source=ig_embed&amp;utm_campaign=loading' data-instgrm-version='14' style='background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);'></blockquote>`,
            `<blockquote class='instagram-media' data-instgrm-permalink='https://www.instagram.com/reel/DGMXt8nR7uk/?utm_source=ig_embed&amp;utm_campaign=loading' data-instgrm-version='14' style='background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);'></blockquote>`,
            `<blockquote class='instagram-media' data-instgrm-permalink='https://www.instagram.com/reel/DFTi7V3R94r/?utm_source=ig_embed&amp;utm_campaign=loading' data-instgrm-version='14' style='background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);'></blockquote>`,
            `<blockquote class='instagram-media' data-instgrm-permalink='https://www.instagram.com/reel/DFyQrAOxBA8/?utm_source=ig_embed&amp;utm_campaign=loading' data-instgrm-version='14' style='background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);'></blockquote>`,
            `<blockquote class='instagram-media' data-instgrm-permalink='https://www.instagram.com/reel/DElWqdSxekX/?utm_source=ig_embed&amp;utm_campaign=loading' data-instgrm-version='14' style='background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);'></blockquote>`,
            `<blockquote class='instagram-media' data-instgrm-permalink='https://www.instagram.com/reel/DCjFwqgNA1h/?utm_source=ig_embed&amp;utm_campaign=loading' data-instgrm-version='14' style='background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);'></blockquote>`,
            `<blockquote class='instagram-media' data-instgrm-permalink='https://www.instagram.com/reel/DAboAwqRUYR/?utm_source=ig_embed&amp;utm_campaign=loading' data-instgrm-version='14' style='background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);'></blockquote>`,
            `<blockquote class='instagram-media' data-instgrm-permalink='https://www.instagram.com/reel/DAUSmCgRmng/?utm_source=ig_embed&amp;utm_campaign=loading' data-instgrm-version='14' style='background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);'></blockquote>`,
           `<blockquote class='instagram-media' data-instgrm-permalink='https://www.instagram.com/reel/D9_00000000/?utm_source=ig_embed&amp;utm_campaign=loading' data-instgrm-version='14' style='background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);'></blockquote>`,
        ];

        igPosts.forEach((post, i) => {
            const igDiv = document.getElementById(`ig-embed-${i+1}`);
            if (igDiv) {
                igDiv.innerHTML = post;
            }
        });

        // Load the Instagram script once
        if (!document.getElementById('instagram-embed-script')) {
            const igScript = document.createElement('script');
            igScript.id = 'instagram-embed-script';
            igScript.src = "https://www.instagram.com/embed.js";
            igScript.async = true;
            document.body.appendChild(igScript);
        }

        // Initialize TikTok embeds
        const tiktokVideos = [
            "7390507330254785834",
            "7190926798341950763",
            "7199083928412736814",
            "7511866771004001578",
            "7511497483718233390",
            "7406093620966591787",
            "7201181005179407659",
            "7219359477093403950",
            "7280670456137518378",

            // Add more TikTok video IDs as needed
        ];

        tiktokVideos.forEach((id, i) => {
            const el = document.getElementById(`tiktok-embed-${i+1}`);
            if (el) {
                el.innerHTML = `
                    <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@the_dapper_shrimp/video/${id}" data-video-id="${id}" style="max-width: 340px;min-width: 325px;">
                        <section></section>
                    </blockquote>
                `;
            }
        });

        // Load the TikTok script once
        if (!document.getElementById('tiktok-embed-script')) {
            const tiktokScript = document.createElement('script');
            tiktokScript.id = 'tiktok-embed-script';
            tiktokScript.src = "https://www.tiktok.com/embed.js";
            tiktokScript.async = true;
            document.body.appendChild(tiktokScript);
        }
    }, []);

    return (
        <section id="id_about_memecoin_section" className="about_memecoin_section section_space section_decoration">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="memecoin_heading_block mb-0" data-aos="fade-up" data-aos-duration="800">
                            <h2 className="heading_text text-uppercase">
                                Shrimply the best investment
                            </h2>
                            <p className="heading_description mb-0 pe-lg-5" style={{ color: 'black', fontWeight: 700 }}>
                            He craves full flavor. He respects the drip. He will not be rushed.
                            Welcome to cursed elegance in crustacean form. Comment "F" to pay respects.
                            </p>
                        </div>

                    </div>
                    <div className="col-lg-6 text-lg-center">
                        <div ref={tiktokRef} />
                        <div className="image_block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                            <Image src={aboutMemecoinImage} alt="Dapper Shrimp" />
                        </div>
                    </div>
                </div>
                {/* Instagram Carousel Row */}
                <div className="row mt-5">
                    <div className="col-12 position-relative">
                        {/* Left arrow */}
                        <div className="carousel-arrow left-arrow" onClick={() => scrollLeft(instagramCarouselRef)}>
                            <i className="fa-solid fa-chevron-left"></i>
                        </div>
                        {/* Right arrow */}
                        <div className="carousel-arrow right-arrow" onClick={() => scrollRight(instagramCarouselRef)}>
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                        <div
                            className="instagram-carousel"
                            ref={instagramCarouselRef}
                        >
                            <div style={{ minWidth: 340, maxWidth: 540 }}>
                                <div id="ig-embed-1" />
                            </div>
                            <div style={{ minWidth: 340, maxWidth: 540 }}>
                                <div id="ig-embed-2" />
                            </div>
                            <div style={{ minWidth: 340, maxWidth: 540 }}>
                                <div id="ig-embed-3" />
                            </div>
                            <div style={{ minWidth: 340, maxWidth: 540 }}>
                                <div id="ig-embed-4" />
                            </div>
                            <div style={{ minWidth: 340, maxWidth: 540 }}>
                                <div id="ig-embed-5" />
                            </div>
                            <div style={{ minWidth: 340, maxWidth: 540 }}>
                                <div id="ig-embed-6" />
                            </div>
                            <div style={{ minWidth: 340, maxWidth: 540 }}>
                                <div id="ig-embed-7" />
                            </div>
                            <div style={{ minWidth: 340, maxWidth: 540 }}>
                                <div id="ig-embed-8" />
                            </div>
                        </div>

                    </div>
                </div>
                {/* TikTok Carousel Row */}
                <div className="row mt-4">
                    <div className="col-12 position-relative">
                        {/* Left arrow */}
                        <div className="carousel-arrow left-arrow" onClick={() => scrollLeft(tiktokCarouselRef)}>
                            <i className="fa-solid fa-chevron-left"></i>
                        </div>
                        {/* Right arrow */}
                        <div className="carousel-arrow right-arrow" onClick={() => scrollRight(tiktokCarouselRef)}>
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                        <div
                            className="tiktok-carousel"
                            ref={tiktokCarouselRef}
                        >
                            <div>
                                <div id="tiktok-embed-1" />
                            </div>
                            <div>
                                <div id="tiktok-embed-2" />
                            </div>
                            <div>
                                <div id="tiktok-embed-3" />
                            </div>
                            <div>
                                <div id="tiktok-embed-4" />
                            </div>
                            <div>
                                <div id="tiktok-embed-5" />
                            </div>
                            <div>
                                <div id="tiktok-embed-6" />
                            </div>
                            <div>
                                <div id="tiktok-embed-7" />
                            </div>
                            <div>
                                <div id="tiktok-embed-8" />
                            </div>
                            <div>
                                <div id="tiktok-embed-9" />
                            </div>
                            {/* Add more as needed, matching tiktokVideos array */}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
