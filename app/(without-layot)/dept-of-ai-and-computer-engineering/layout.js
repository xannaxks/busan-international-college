import '../../../styles/globals.css';
import { Navbar, Footer } from '../../../components';

const RootLayout = ({ children }) => (
  <div className="bg-[url(/background-celled-crimson.svg)] overflow-hidden">
    <Navbar />
    <div className="bg-effects">
      <div className="gradient-04-animated" />
    </div>

    <div>
      {children}
    </div>
    <Footer />
  </div>
);

export default RootLayout;
