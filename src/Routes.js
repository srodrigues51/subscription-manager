import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Initial from './pages/Initial_page';
import Register from './pages/Register_page';
import About from './pages/About';
import Home from './pages/Home'
import Payments from './pages/Payments';
import Subscription from './pages/Subscriptions';
import Users from './pages/User_control';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';



function AppRoutes() {


    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Initial />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/register' element={<Register />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/subscripition' element={<Subscription />} />
                <Route exact path='/payments' element={<Payments />} />
                <Route exact path='/users' element={<Users />} />
                <Route exact path='/profile' element={<Profile />} />
                <Route exact path='/notification' element={<Notifications />} />

            </Routes>
        </Router>
    )
}

export default AppRoutes;