import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import  AppCars  from './pages/AppCars';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to='/cars'>Cars</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/cars'>
            <AppCars />
          </Route>
        </Switch>
        </BrowserRouter >
    </div>
  );
}

export default App;
