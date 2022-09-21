// import logo from "../Images/logo.png"
// import Bookmark from 'react-bookmark';
import { Link } from "react-router-dom";
{/* <Link to="/about">About</Link> */}
const Navbar = () => {
    return ( 
        <section className="top-bg">
  <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container-fluid">
    {/* <img src="{Logo}" alt="" /> */}
    <Link className="navbar-brand" to="/"><i> OMOLOYE </i></Link>
    <button className="navbar-toggler boton" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"  style={{border: " solid red !important"}}>
      <span className="navbar-toggler-icon boton" style={{backgroundColor: "#a7a7a7"}}></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        {/* <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5> */}
        <button type="button" className="btn-close boton" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link" href="#sect1" aria-current="page" to="/"> <span>01.</span> Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link"href="#sec2" to="#"><span>02.</span>About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#sec3" to="#"><span>03.</span>Resume</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#sec4" to="#"><span>04.</span>Stacks</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#sec5" to="#"><span>05.</span>Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#sect6" to="#"><span>06.</span>Contact</a>
          </li>
         
        </ul>
      </div>
    </div>
  </div>

</nav>
<div className="solid fixed-top">

</div>
{/* <hr className="solid"/> */}
        </section>
     );
}
 
export default Navbar;