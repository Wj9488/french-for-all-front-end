import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div id="frenchForAll__appWrap_v1" className="bg-neutral-50 dark:bg-neutral-900 scroll-smooth">
        <Navbar />
        <div id="frenchForAll__content_v1">
        { children }
        </div>
        <Footer />
    </div>
  )
}

export default Layout