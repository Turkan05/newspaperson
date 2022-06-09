import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Rooms from './Pages/Rooms/Rooms';
import Shop from './Pages/Shop/Shop';
import About from './Pages/About/About';
import News from './Pages/News/News';
import Contact from './Pages/Contact/Contact';
import Book from './Pages/Book/Book';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './App.css';

function App() {
  return (
    <div >
<Header/>
      <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/Rooms" exact element={<Rooms/>}/>
      <Route path="/Shop" element={<Shop/>}/>
      <Route path="/About" element={<About />}/>
      <Route path="/News" element={<News/>}/>
      <Route path="/Contact" element={<Contact />}/>
      <Route path="/Book" element={<Book />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
