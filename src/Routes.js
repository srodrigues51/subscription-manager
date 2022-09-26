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
import Amazon from './pages/Services/amazon';
import Spotify from './pages/Services/spotify';
import Netflix from './pages/Services/netflix';


function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Initial />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/register' element={<Register />} />
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/subscripition' element={<Subscription />} />
                <Route exact path='/payments' element={<Payments />} />
                <Route exact path='/users' element={<Users />} />
                <Route exact path='/profile' element={<Profile />} />
                <Route path='/netflix' element={<Netflix />} />
                <Route exact path='/spotify' element={<Spotify />} />
                <Route exact path='/amazon' element={<Amazon />} />
                
            </Routes>
        </Router>
    )
}

export default AppRoutes;