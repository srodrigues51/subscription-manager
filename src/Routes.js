import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Initial from './pages/Initial_page';
import Register from './pages/Register_page';
import About from './pages/About';
import Home from './pages/Home'
import Payments from './pages/Payments';
import Subscription from './pages/Subscriptions';
import Users from './pages/User_control';
import Profile from './pages/Profile';


function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Initial />} />
                <Route path='/login' element={<Login />} />
                <Route path='/about' element={<About />} />
                <Route path='/register' element={<Register />} />
                <Route path='/home' element={<Home />} />
                <Route path='/subscripition' element={<Subscription />} />
                <Route path='/payments' element={<Payments />} />
                <Route path='/users' element={<Users />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;