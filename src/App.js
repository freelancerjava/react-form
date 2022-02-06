import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Map, Form } from './components/index'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Map />} /> */}
          <Route path="/" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
