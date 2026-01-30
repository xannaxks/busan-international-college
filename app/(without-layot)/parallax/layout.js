import '../../../styles/globals.css';
import { Navbar } from '../../../components';
import Footer from '../../../components/Footer';

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className="relative min-h-screen overflow-x-hidden">

      {/* Background layer */}
      <div className="fixed inset-0 -z-10 bg-[url(/background-celled-crimson.svg)] bg-cover bg-center">
        <div className="bg-effects">
          <div className="gradient-04-animated" />
        </div>
      </div>

      {/* Foreground content */}
      <Navbar />

      <main className="relative z-10">
        {children}
      </main>
      <div className="snap-none" >
        <Footer />
      </div>

    </body>
  </html>
);

export default RootLayout;
