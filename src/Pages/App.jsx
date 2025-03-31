import Header from '../Components/Header.jsx'
import { BrowserRouter,Routes,Route } from 'react-router';
import Footer from '../Components/Footer.jsx';
import Food from '../Components/Food.jsx';
import Card from '../Components/Card.jsx';

function App() {
  
  return(
    
    <BrowserRouter>
      <Routes>
         <Route path=''/>
         <Route index element={<Header/>}/>
      </Routes>
        <Food/>
        <Card/>
        <Footer/>
    </BrowserRouter>
  );
}

export default App
