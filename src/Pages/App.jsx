import Header from '../Components/Header.jsx'
import { BrowserRouter,Routes,Route } from 'react-router';
import Footer from '../Components/Footer.jsx';
import Food from '../Components/Food.jsx';
import Card from '../Components/Card.jsx';

function App() {
  
  return(
    
    <BrowserRouter>
    <Header/>
      <Routes>
         <Route path=''/>
         <Route index element={<Card/>}/>
         <Route index element={<Footer/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App
