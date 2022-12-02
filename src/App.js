import './App.css';
import Calendar from './Components/Calendar/Calendar';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Calendar 
          numberOfDays={1}
        />
      </header>
    </div>
  );
}

export default App;
