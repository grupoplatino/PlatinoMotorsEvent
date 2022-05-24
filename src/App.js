
import './App.css';
import Body from './components/body';
import Footer from './components/footer';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header calssName="App-header">
        <Container fluid>
          <Body />
          <Footer />
        </Container>
      </header>
    </div >
  );
}

export default App;
