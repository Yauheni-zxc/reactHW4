import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import ThemeSwitcher from './components/ThemeSwitcher';


function App() {
  return (
    <Provider store={store}>
      <div>        
        <ThemeSwitcher />
      </div>
    </Provider>
  );
}

export default App;
