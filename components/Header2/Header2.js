import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'
import NavLink from 'next/link'
import Logo from '/public/images/site_logo/site_logo_2.png'
import MobileMenu2 from '../MobileMenu2/MobileMenu2';
import Image from 'next/image';
import pumpFunLogo from '/public/images/logos/pump_fun_logo.png';
import xLogo from '/public/images/logos/x_logo.png';

const Header2 = (props) => {

    const [mobailActive, setMobailState] = useState(false);

    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <header className={`site_header header_memecoin  ${isSticky ? 'sticky' : ''}`}>
            <div className="nav_wrapper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-5 d-flex align-items-center">
                            <div className="site_logo">
                                <NavLink onClick={ClickHandler} className="site_link" href="/">
                                    <Image loading="lazy" src={Logo} alt="Dapper Shrimp Logo" width={110} height={110} />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-9 col-7 d-flex justify-content-end align-items-center position-relative">
                            {/* Mobile menu button - visible only on mobile */}
                            <button
                                className="mobile_menu_btn d-lg-none me-2"
                                type="button"
                                aria-label="Toggle navigation"
                                aria-expanded={mobailActive}
                                onClick={() => setMobailState(!mobailActive)}
                                style={{ background: 'none', border: 'none', fontSize: 32 }}
                            >
                                <i className="far fa-bars"></i>
                            </button>
                            {/* External links (desktop only) */}
                            <nav className="main_menu navbar navbar-expand-lg d-none d-lg-flex">
                                <ul className="main_menu_list unordered_list text-uppercase main-menu d-flex gap-3 mb-0 align-items-center">
                                    <li>
                                        <a className="nav-link d-flex align-items-center" href="https://pump.fun/" target="_blank" rel="noopener noreferrer">
                                            <Image src={pumpFunLogo} alt="Pump.fun Logo" width={48} height={48} />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nav-link d-flex align-items-center" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                            <Image src={xLogo} alt="X Logo" width={48} height={48} />
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            {/* Mobile menu overlay */}
                            {mobailActive && (
                                <MobileMenu2 active={mobailActive} onClose={() => setMobailState(false)} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header2;