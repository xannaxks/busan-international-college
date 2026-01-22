import '../styles/globals.css';
import { Navbar, Footer } from '../components';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body>
      <div className="bg-[url(/background-celled-crimson.svg)] overflow-hidden">
        <Navbar />
        {/* <div className="flex w-full items-center justify-center z-[100]"> */}
        {/*  <img src="/tu_logo_crimson.svg" alt="logo crimson" /> */}
        {/* </div> */}
        <div className="mt-16">
          {children}
        </div>
        <Footer />
      </div>
    </body>
  </html>
);

export default RootLayout;
