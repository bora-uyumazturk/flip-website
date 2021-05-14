import { isMobile, isSafari } from "react-device-detect";

import BrowserView from "./components/BrowserView";
import MobileView from "./components/MobileView";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      {isMobile || isSafari ? <MobileView /> : <BrowserView />}
      <Footer />
    </>
  );
}

export default App;
