import '../styles/globals.css';
import Head from './head';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <Head />
      {/*<link rel="preconnect" href="https://stijndv.com" />*/}
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body className="overflow-x-hidden">
      {children}
    </body>
  </html>
);

export default RootLayout;
