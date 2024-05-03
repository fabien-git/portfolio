import Index from "./components/index";
import "./App.css";
import ReactGA from 'react-ga';
const TRACKING_ID = "G-SRMQ6H9L1H"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div className="App">
      <Index />
    </div>
  );
}

export default App;
