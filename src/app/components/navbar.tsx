import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import M from "materialize-css";
import COFFIE_URL from "../assets/coffie.png";
import AVATAR_URL from "../assets/avatar.png";

export const Navbar = () => {
  useEffect(() => {
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
  }, []);

  const closeSidenav = () => {
    const sidenavElement = document.querySelector(".sidenav");
    if (sidenavElement) {
      const sidenavInstance = M.Sidenav.getInstance(sidenavElement);
      sidenavInstance.close();
    }
  };

  return (
    <>
      <nav>
        <div className="nav-wrapper teal lighten-2 px1">
          <NavLink to="/todo-list/" className="brand-logo">
            Todo list
          </NavLink>
          <a href="#" data-target="slide-out" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink
                to="/todo-list"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Todo list
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/todo-list/about/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Information
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <ul id="slide-out" className="sidenav">
        <li>
          <div className="user-view">
            <div className="background">
              <img src={COFFIE_URL} alt="office" width={300} />
            </div>
            <img className="circle" src={AVATAR_URL} alt="avatar" />
            <p className="white-text name">John Doe</p>
            <p className="white-text email">jdandturk@gmail.com</p>
          </div>
        </li>
        <li>
          <h5 className="nav-text px1">Navigation</h5>
        </li>
        <li className="nav-link">
          <NavLink to="/todo-list/" onClick={closeSidenav}>
            Todo list
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/todo-list/about/" onClick={closeSidenav}>
            Information
          </NavLink>
        </li>
      </ul>
    </>
  );
};
