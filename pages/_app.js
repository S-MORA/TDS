import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import GlobalAOSProvider from "../GlobalAOSProvider/GlobalAOSProvider ";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/fontawesome.css';
import '../styles/themify-icons.css';
import '../styles/animate.min.css';
import '../styles/cursor.css';
import '../styles/style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Dapper Shrimp</title>
      </Head>
      {/* Global Background Video & Overlay */}
      <video
        className="global-background-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/clouds.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="global-video-overlay" />

      {/* Global styles for video backdrop */}
      <style jsx global>{`
        .global-background-video {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          object-fit: cover;
          z-index: -2;
          pointer-events: none;
        }
        .global-video-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          z-index: -1;
          pointer-events: none;
        }
      `}</style>

      <GlobalAOSProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </GlobalAOSProvider>
    </div>

  )
}

export default MyApp
