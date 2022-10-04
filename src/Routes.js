import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Initial from './pages/Initial_page';
import Register from './pages/Register_page';
import About from './pages/About';
import Home from './pages/Home'
import Payments from './pages/Payments';
import Subscription from './pages/Subscriptions';
import Profile from './pages/Profile';
import Private from './components/private';
import Invites from './pages/Invites';

function AppRoutes() {

    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Initial />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/register' element={<Register />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/home' element={<Private Component={Home}/>} />
                <Route exact path='/subscripition' element={<Private Component={Subscription}/>} />
                <Route exact path='/payment' element={<Private Component={Payments}/>} />
                <Route exact path='/invite' element={<Private Component={Invites}/>} />
                <Route exact path='/profile' element={<Private Component={Profile}/>} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;
