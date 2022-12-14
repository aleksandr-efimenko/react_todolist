import './App.css';
import Calendar from '../features/Calendar/Calendar';
import Nav from '../features/Nav/Nav';

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
