import { BrowserRouter, Route ,Routes,} from 'react-router-dom';
import './App.css';
import Homepage from './homepage/home';
import Login from './loginpage/login';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route exact path="/" components={<Login/>}/>
        <Route path='/home' components={<Homepage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
