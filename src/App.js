import { BrowserRouter, Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './css/responsive.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Services from './pages/Services';
import NotFound from './pages/NotFound';
import AllBus from './pages/bus/AllBuses';
import AddBus from './pages/bus/AddBus';
import SingleBus from './pages/bus/SingleBus';
import EditBus from './pages/bus/EditBus';
import AllEmployee from './pages/employee/AllEmployees';
import EditEmployee from './pages/employee/EditEmployee';
import SingleEmployee from './pages/employee/SingleEmployee';
import AddEmployee from './pages/employee/AddEmployee';
import AllGuest from './pages/guest/AllGuests';
import AddGuest from './pages/guest/AddGuest';
import SingleGuest from './pages/guest/SingleGuest';
import EditGuest from './pages/guest/EditGuest';
import AllMotel from './pages/motel/AllMotel';
import AddMotel from './pages/motel/AddMotel';
import SingleMotel from './pages/motel/SingleMotel';
import EditMotel from './pages/motel/EditMotel';
import AllTrip from './pages/trip/AllTrips';
import AddTrip from './pages/trip/AddTrip';
import SingleTrip from './pages/trip/SingleTrip';
import EditTrip from './pages/trip/EditTrip';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Header />
              <Routes>
                    <Route
                    path='/'
                    element = { <Home /> } />
                    <Route 
                    path='/about'
                    element = { <About /> } />
                    <Route
                    path='/contact'
                    element = { <Contact /> } />
                    <Route
                    path='/blog'
                    element = { <Blog /> } />
                    <Route
                    path='/services'
                    element = { <Services /> } />
                    <Route
                    path='/allbus'
                    element= { <AllBus /> } />
                    <Route
                    path='/addbus'
                    element= { <AddBus /> } /> 
                    <Route
                    path='/onebus/:id'
                    element= { <SingleBus /> } />
                    <Route
                    path='/editbus/:id'
                    element= { <EditBus /> } />
                    <Route
                    path='/allemployee'
                    element= { <AllEmployee /> } />
                    <Route
                    path='/addemployee'
                    element= { <AddEmployee /> } />
                    <Route
                    path='/oneemployee/:id'
                    element= { <SingleEmployee /> } />
                    <Route
                    path='/editemployee/:id'
                    element= { <EditEmployee /> } />
                    <Route
                    path='/allguest'
                    element= { <AllGuest /> } />
                    <Route
                    path='/addguest'
                    element= { <AddGuest /> } />
                    <Route
                    path='/oneguest/:id'
                    element= { <SingleGuest /> } />
                    <Route
                    path='/editguest/:id'
                    element= { <EditGuest /> } />
                    <Route
                    path='/allmotel'
                    element= { <AllMotel /> } />
                    <Route
                    path='/addmotel'
                    element= { <AddMotel /> } />
                    <Route
                    path='/onemotel/:id'
                    element= { <SingleMotel /> } />
                    <Route
                    path='/editmotel/:id'
                    element= { <EditMotel /> } />
                    <Route
                    path='/alltrip'
                    element= { <AllTrip /> } />
                    <Route
                    path='/addtrip'
                    element= { <AddTrip /> } />
                    <Route
                    path='/onetrip/:id'
                    element= { <SingleTrip /> } />
                    <Route
                    path='/edittrip/:id'
                    element= { <EditTrip /> } />  
                    <Route
                    path='*'
                    element = { <NotFound /> } />
                    
              </Routes>
          <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
