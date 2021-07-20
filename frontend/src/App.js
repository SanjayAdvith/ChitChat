
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Chat from './components/chat/Chat';
import Join from './components/join/Join';
function App() {


  return (
    <Router>
      <Header />
      <main>

        <div className='left'>All Friends</div>

        <div className='right'>
          <Route exact path='/' component={Join} />
          <Route exact path='/chat' component={Chat} />
        </div>


      </main>
      <Footer />
    </Router>
  );
}

export default App;
