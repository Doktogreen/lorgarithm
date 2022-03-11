import './App.css';
import Footer from './views/components/footer';
import Header from './views/components/header';
import Home from './views/components/home'; 

function App() {
  return (
    <div className="App">
      <Header />
        <Home />
      <Footer />
    </div>
  );
}

export default App;
