import { Link } from "react-router-dom";
import logoNav from "../../assets/img/car_navbar.png"

export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark text-light" >
      <img src={logoNav} alt="" className="col-md-1" /> &nbsp;
        <div className="container-fluid ">
           
          <Link to="/init" className="nav-link h2 MarginNavbar">
            Inicio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link to="/create" className="nav-link h2 text-light">
                  Crear
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="/product"
                  className="nav-link dropdown-toggle h2 text-light"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Vehiculos
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/catalogo" className="dropdown-item">
                      Catalogo
                    </Link>
                  </li>
                  <li>
                    <Link to="/admi" className="dropdown-item">
                      Administrar
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};