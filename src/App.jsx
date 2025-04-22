import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './Layout/NavBar';
import NavBarLink from "./Layout/NavBarLink";
import Index from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>

        <NavBar />
        <NavBarLink />

        <Routes>
          <Route path='/' element={<Index />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App
