import {RiArrowDropDownLine} from "react-icons/ri";
import "./navbar.css";
import {FaBars} from "react-icons/fa"

const Navbar = () => {
    return (
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1697264422/image_1_wzp2p8.png" alt="" className="mr-8"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><FaBars/></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-5/12 flex items-center justify-content-between">
        <li class="nav-item flex">
            <p>Solutions</p>
            <RiArrowDropDownLine className="nav-dropdown-icon"/>
        </li>
        <li class="nav-item flex">
            <p>Features</p>
            <RiArrowDropDownLine className="nav-dropdown-icon"/>
        </li>
        <li class="nav-item flex">
            <p>Blogs</p>
            <RiArrowDropDownLine className="nav-dropdown-icon"/>
        </li>
        <li class="nav-item flex">
            <p>About</p>
            <RiArrowDropDownLine className="nav-dropdown-icon"/>
        </li>
      </ul>
      <div>
        <button type="button" className="login-btn">Login</button>
        <button type="button" className="register-btn">Register</button>

      </div>
    </div>
  </div>
</nav>
    )
}

export default Navbar;