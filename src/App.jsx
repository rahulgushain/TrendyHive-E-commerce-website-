import './App.css';
import { Route, Routes, useLoaderData, useLocation, useParams } from 'react-router-dom';
import Contact from './Components/Contact';
import About from './Components/About';
import Home from './Components/home';
import Login from './Components/login';
import Signup from './Components/signup';
import NavBar from './Components/navbar';
import Dashbord from './Components/dashbord';
import { useState } from 'react';
import Private from './Components/private';
import Products from './Components/products';
import Cart from './Components/cart';
import DetailPage from './Components/DetailPage.jsx';
import SearchPage from './Components/SearchPage.jsx';
import ContextFunc from './Components/Context.jsx';





function App() {

  const pathName=useLocation()
  const {procategory}= useParams()
  console.log(procategory)
  const[islogin,setlogin] = useState(false)

  return (
    
    <div className="App ">
  <div className='w-full h-[146px] z-50'>
    <NavBar islogin={islogin} setlogin={setlogin}/>
       
  </div>



    <Routes>
    <Route path="/" element={<Login setlogin={setlogin} islogin={islogin}/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path="/support" element={<About/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/labs" element={<Contact/>}/>
    <Route path="/dashbord" element={
      <Private islogin={islogin} >
         <Dashbord/>
      </Private>
   }/>
    <Route path="/search/:title" element={<SearchPage/>}/>
    <Route path="/details/:proid" element={<DetailPage/>}/>
    <Route path="/products/:procategory" element={<Products />}/>
    <Route path="*" element={<div>Page not found</div>}/>
  
    </Routes>
      
    
    </div>
  );
}

export default App;
