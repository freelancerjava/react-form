import { Map, Form } from './components/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Map />} />
          {/* <Route path="/form" element={<Form />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
