import logo from './logo.svg';
import './App.css';
import LearnComponent from './components/LearnComponent';
import ArticleDisplay from './components/ArticleDisplay';
import ParticleAnimation from './components/ParticleAnimation';

function App() {

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column'}}>
      <header style={{ backgroundColor: '#89CBF0', flex: '0 0 auto', color: '#FFFFFF', fontFamily: 'Quicksand, sans-serif', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Header</h1>
      </header>
      <ParticleAnimation />
      <ArticleDisplay />

    </div>
  );
}

export default App;
