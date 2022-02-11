import { Link } from 'react-router-dom';
import Button from './components/Button/Submit';
import { Container, Content } from './components/style';
function App() {
  return (
    <Container>
      <Content background="primary">
        <Link to="/form"><Button height="60px" width="200px" padding="16px" title="Формы">Form</Button></Link>
      </Content>
      <Content background="success">
        <Link to="/map"><Button height="60px" width="200px" padding="16px" title="Карта">Map</Button></Link>
      </Content>
    </Container>
  );
}
export default App;
