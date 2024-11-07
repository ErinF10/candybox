import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Create from './pages/create';
import Gallery from './pages/Gallery';
import Edit from './pages/edit';

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route index={true} path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/create" element={<Create />} />


        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
