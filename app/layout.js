import '../styles/globals.css';
import { Navbar, Footer } from '../components';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body>
      <div className="bg-primary-black overflow-hidden">
        <Navbar />
        {children}
          <Footer/>
      </div>
    </body>
  </html>
);

export default RootLayout;
