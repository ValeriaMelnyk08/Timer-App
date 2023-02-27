import Timer from './JS/mainTimer'

function App() {
  return (
    <div className="App">
            <Timer startTime={10} step={1000} autostart={true}></Timer>
            <Timer startTime={10} step={100} autostart={true}></Timer>
            <Timer startTime={10} step={10} autostart={true}></Timer>
            <Timer startTime={10} step={1} autostart={true}></Timer>
    </div>
  );
}

export default App;
