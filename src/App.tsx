import { isMobile } from "react-device-detect";

import BrowserView from "./components/BrowserView";
import MobileView from "./components/MobileView";

function App() {
  return isMobile ? <MobileView /> : <BrowserView />;
}

export default App;
