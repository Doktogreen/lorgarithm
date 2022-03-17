import './App.css';
import Footer from './views/components/footer';
import Header from './views/components/header';
import Landing from './views/components/landing';

function App() {
  return (
    <div className="App">
      <Header />
        <Landing />
      <Footer />
    </div>
  );
}

export default App;
