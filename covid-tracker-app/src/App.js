import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="selector" id="covid-selector"></div>
          <div className="selector" id="vaccine-selector"></div>
          <div className="selector" id="close-selector"></div>
          <div id="state-dropdown"></div>
        </div>
        <div className="row">
          <div className="column-heatmap" style={{backgroundColor: "#aaa"}}>
            <div id="heatmap"></div>
          </div>
          <div className="column-statistics" style={{backgroundColor: "#4287f5"}}>
            <div id="statistics"></div>
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
