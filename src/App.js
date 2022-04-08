import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Jumbotron from './Components/Jumbotron/Jumbotron';
import FormSearch from './Components/FormSearch/FormSearch';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Jumbotron/>
      <FormSearch/>
      <Footer/>
    </div>
  );
}

export default App;
