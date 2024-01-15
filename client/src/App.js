import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCar from './pages/BookingCar';
import UserBookings from './pages/UserBookings';
import AddCar from './pages/AddCar';
import EditCar from './pages/EditCar';
import AdminHome from './pages/AdminHome';
import HomeLandingPage from './components/HomeLandiingPage/HomeLandingPage';

// Simulating user authentication state (replace it with your actual authentication logic)
const isAuthenticated = true; // Set to true if the user is authenticated
const isAdmin = true; // Check if the user has admin privileges


function App() {

  return (
    <div className="App">


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLandingPage />} />
          <Route path="/rent" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/booking/:carid' element={<BookingCar />} />
          <Route path='/userbookings' element={<UserBookings />} />
          <Route path='/addcar' element={<AddCar />} />
          <Route path='/editcar/:carid' element={<EditCar />} />
         <Route
            path='/admin'
            element={isAuthenticated && isAdmin ? <AdminHome /> : <Navigate to='/' />}
          />
        </Routes>
     
       
      </BrowserRouter>

    </div>


  );
}

export default App;





/*export function ProtectedRoute({ component: Component, ...rest }) {
  if (localStorage.getItem('user')) {
    return <Route {...rest} element={<Component />} />;
  } else {
    // Use Navigate to redirect to '/login'
    return <Navigate to="/login" />;
  }

} 

function ProtectedRoute(props) {
  if (localStorage.getItem('user')) 
  {
    return <Route {...props} />;
  } else {
    // Use Navigate to redirect to '/login'
    return <Navigate to="/login" />;
  }
}

<BrowserRouter>
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/login' element={<Login />} />
           <Route path='/register' element={<Register />} />
           <Route path='/booking/:carid' element={<BookingCar />} />
           <Route path='/userbookings' element={<UserBookings />} />
           <Route path='/addcar' element={<AddCar />} />
           <Route path='/editcar/:carid' element={<EditCar />} />
           <Route path='/admin' element={<AdminHome />} />
          </Routes>
      </BrowserRouter>


  <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/booking/:carid' element={<BookingCar />} />
          <Route path='/userbookings' element={<UserBookings />} />
          <Route path='/addcar' element={<AddCar />} />
          <Route path='/editcar/:carid' element={<EditCar />} />
          <Route path='/admin' element={<AdminHome />} />
        </Routes>
      </BrowserRouter>
<BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/booking/:carid' element={<BookingCar />} />
          <Route path='/userbookings' element={<UserBookings />} />
          <Route path='/addcar' element={<AddCar />} />
          <Route path='/editcar/:carid' element={<EditCar />} />
          <Route path='/admin' element={<AdminHome />} />
        </Routes>
      </BrowserRouter>

*/