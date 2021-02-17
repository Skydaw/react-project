import './App.css';
import Header from './components/Header';

function App() {
  const cake= true
  return (
    <div className="App">
      <h2> {cake ? "The cake is a lie":"it's true" }</h2>
      <Header title={0} />
      <Header title="C'est vrai"/>
      <Header/>
 
    </div>
  );
}

export default App;
