import "./App.css";
import Timer from "./Timer";

function App() {
  const onExpired = () => {
    console.log("expired the callback function");
  };

  return (
    <div className="App">
      <Timer onExpired={onExpired} duration={2 * 60 * 60 * 60 * 1000} />
      {/* change the time duration from here */}
    </div>
  );
}

export default App;
