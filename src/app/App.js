import './App.css';
import Calendar from '../features/Calendar/Calendar';
import Nav from '../features/Nav/Nav';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Nav />
        <Calendar
          numberOfDays={1}
        />
      </div>
    </Provider>
  );
}

export default App;
