import { Link } from 'react-router-dom'
import Button from './components/Button/Submit';
import { Container } from './components/style'
function App() {
  return (
    <Container>
      <Link to="/form"><Button title="Формы">Form</Button></Link>
      <Link to="/map"><Button title="Карта">Map</Button></Link>
    </Container>
  );
}
export default App;
