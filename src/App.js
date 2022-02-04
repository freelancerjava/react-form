import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Map } from './components/index'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
