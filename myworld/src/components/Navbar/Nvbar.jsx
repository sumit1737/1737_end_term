import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import logo from "../../pages/res/avatar-4.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {FaUserAstronaut} from "react-icons/fa"
import {AiOutlineFileAdd} from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.css';

import './navbar.css'

function Nvbar(props){
    console.log(props);
    return (
        <Router>
            <div className='navbar-holder-siri'>
                <Navbar className='navbar-siri' fixed="top">
                    <Container>
                        <Navbar.Brand className='navbar-brand-siri'>
                            <Link to={props.home.link} className='link-siri'>
                                <img 
                                alt=""
                                src={logo}
                                className="d-inline-block align-top logo-siri"/>
                            </Link>
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            
                            <div className='nav-item-siri'><Nav.Link><Link to={props.home.link} className='link-siri'>Home</Link></Nav.Link></div>
                            <div className='nav-item-siri'><Nav.Link><Link to={props.about.link} className='link-siri'>About</Link></Nav.Link></div>
                            <div className='nav-item-siri'><Nav.Link><Link to={props.contact.link} className='link-siri'>Contact</Link></Nav.Link></div>
                            {(props.userLoggedIn === "admin") && <div className='nav-item-siri'><Nav.Link><Link to={props.crud.link} className='link-siri'>Crud</Link></Nav.Link></div>}
                        </Nav>
                        <Nav>
                            {!props.isLoggedIn && <Nav.Link><Link to={props.login.link} className='link-siri'><Button variant="outline-info">Log In</Button></Link></Nav.Link>}
                            {!props.isLoggedIn && <Nav.Link><Link to={props.signin.link} className='link-siri'><Button variant="outline-warning">Sign In</Button></Link></Nav.Link>}
                            {props.isLoggedIn && <Nav.Link><Link to={props.upload.link} className='link-siri'><Button variant="outline-light"><AiOutlineFileAdd size={20} /></Button></Link></Nav.Link>}
                            {props.isLoggedIn && <Nav.Link><Button variant="outline-warning"><FaUserAstronaut size={20} /></Button></Nav.Link>}
                            {props.isLoggedIn && <Nav.Link><Button variant="outline-danger" onClick={()=>{props.toggleLogIn(false)}}>Log Out</Button></Nav.Link>}
                        </Nav>
                    </Container>
                </Navbar>
                <div className='spacer-siri'></div>
            </div>

            <Routes>
                <Route path={props.home.link} element={props.home.ele} />
                <Route path={props.about.link} element={props.about.ele} />
                <Route path={props.contact.link} element={props.contact.ele} />
                <Route path={props.login.link} element={props.login.ele} />
                <Route path={props.signin.link} element={props.signin.ele} />
                <Route path={props.crud.link} element={props.crud.ele} />
                <Route path={props.upload.link} element={props.upload.ele} />
                <Route path={props.edit.link} element={props.edit.ele} />
            </Routes>
        </Router>
    );
}

export default Nvbar;