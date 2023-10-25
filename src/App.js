import './templatestyle.css';
import './App.css';
import Footer from './Footer';
import News from './News';
import Winter from './Winter';
import Delux from './Delux';

function App() {
  return (
    <div className="App">
      <Delux/>
      <Winter/>
      <News/>
      <Footer/>
    </div>
  );
}

export default App;
