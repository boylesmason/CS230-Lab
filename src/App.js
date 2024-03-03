import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import myNavbar from './Navbar';
import myCard from './Card';

function App() {
  return (
    <div className="App">
      <myNavbar />
      <h1>CS 230L</h1>
      <h2>Section - 002</h2>
      <p>WVU ID: 800365945</p>
      <p>Hi, I am Mason</p>
      <myCard />
    </div>
  );
}

export default App;
