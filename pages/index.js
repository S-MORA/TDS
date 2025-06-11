import React, { Fragment, useState, useEffect } from 'react';
import Header2 from '../components/Header2/Header2';
import Hero2 from '../components/hero2/hero2';
import Image from 'next/image';
import preloaderShrimp from '/public/images/backgrounds/preloader-shrimp.png';
import AboutSection from '../components/Memecoin-Components/AboutSection/AboutSection';

import Footer from '../components/Memecoin-Components/Footer/Footer';
import Scrollbar from '../components/scrollbar/scrollbar';


const HomePage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                background: '#B9CDEB',
                zIndex: 9999,
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
            }}>
                <div style={{
                    position: 'absolute',
                    zIndex: 10000,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    border: '8px solid #f3f3f3',
                    borderTop: '8px solid #D84C3E', // Shrimp Red
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    animation: 'spin 1s linear infinite',
                }}></div>
                <Image src={preloaderShrimp} alt="Loading..." layout="fill" objectFit="cover" />
                <style jsx>{`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}</style>
            </div>
        );
    }

    return (
        <Fragment>
           <div className='index_memecoin page_wrapper'>
   
                <Header2 />
                <main className="page_content">
                    <Hero2 />
                    <AboutSection />
                </main>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default HomePage;