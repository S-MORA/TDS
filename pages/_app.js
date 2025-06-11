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
      <GlobalAOSProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </GlobalAOSProvider>
    </div>

  )
}

export default MyApp
