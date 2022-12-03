import './App.css';
import Calendar from './Components/Calendar/Calendar';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className="App">
        <Nav />
        <Calendar 
          numberOfDays={1}
        />
    </div>
  );
}

export default App;
