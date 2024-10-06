import "./App.css";
import Greets from "./Propertie-Components -(Props)/props";

function App() {
  return (
    <div className="App">
      <Greets name="Tony" heroName="Iron Man" />
      <Greets name="Natasha" heroName="Wonder Women" />
      <Greets name="" heroName="Odinson" />
    </div>
  );
}

export default App;
