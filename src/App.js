import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import SignupModal from "./components/SignupModal";
import Private from "./pages/Private/Private";
import PrivateHome from "./pages/Private/PrivateHome/PrivateHome";
import SignInModal from "./components/SignInModal";

function App() {
  return (
    <>
        <SignupModal />
        <SignInModal />
        <Navbar />
       <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/private' element={<Private />} >
               <Route path='/private/private-home' element={<PrivateHome />}/>
           </Route>
       </Routes>
    </>
  );
}

export default App;
