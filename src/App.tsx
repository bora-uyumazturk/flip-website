import { isMobile } from "react-device-detect";

import BrowserView from "./components/BrowserView";
import MobileView from "./components/MobileView";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {isMobile ? <MobileView /> : <BrowserView />}
      <Footer />
    </>
  );
}

export default App;
