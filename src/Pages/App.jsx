import Header from '../Components/Header.jsx'
import { BrowserRouter,Routes,Route } from 'react-router';
import Footer from '../Components/Footer.jsx';
import Food from '../Components/Food.jsx';

import HomePage from '../Components/HomePage.jsx';

function App() {
  
  return(
    
    <BrowserRouter>
    <HomePage/>
      <Routes>
         <Route path=''/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App
