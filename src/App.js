import logo from './logo.svg';
import './App.css';
import RandomColor from "./components/project2/RandomColor";
import StarRating from "./components/project3/StarRating";
import LoadMore from "./components/project4/LoadMore";

function App() {
  return (
    <div className="App">
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10} /> */}
      <LoadMore />
    </div>
  );
}

export default App;
