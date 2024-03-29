import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div id="frenchForAll__appWrap_v1" className="scroll-smooth">
        <Navbar />
        <div id="frenchForAll__content_v1" className="lg:tracking-normal tracking-tighter">
        { children }
        </div>
        <Footer />
    </div>
  )
}

export default Layout