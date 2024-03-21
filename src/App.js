import logo from './logo.svg';
import './App.css';
import RandomColor from "./components/project2/RandomColor";
import StarRating from "./components/project3/StarRating";
import LoadMore from "./components/project4/LoadMore";
import QRCodeGenerator from "./components/project5/QRCodeGenerator";
import Debounce from "./components/Debounce";
import LightDarkMode from "./components/project1/LightDarkMode";

function App() {
  return (
    <div className="App">
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10} /> */}
      {/* <LoadMore /> */}
      {/* <QRCodeGenerator /> */}
      {/* <Debounce /> */}
      <LightDarkMode />
    </div>
  );
}

export default App;
