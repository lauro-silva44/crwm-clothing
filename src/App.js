import './App.css';
import HomePage from './pages/homepage/homepage.component';
import  PulsateButton  from './components/pulsate-button/pulsate-button.component';

function App() {
  return (
    
    <div className="App">
      <HomePage/>
      <PulsateButton title='Maybe Something'/>

    </div>
  );
}

export default App;
