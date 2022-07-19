import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import SignupModal from "./components/SignupModal";

function App() {
  return (
    <>
        <Navbar />
        <SignupModal />
       <Routes>
           <Route path='/' element={<Home />} />
       </Routes>
    </>
  );
}

export default App;
