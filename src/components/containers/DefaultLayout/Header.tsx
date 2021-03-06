import { Link } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { AuthUserData } from "../../auth/Login/action";
import { useActions } from "../../../hooks/useActions";

const Header = () => {
  const { isAuth, user } = useTypedSelector((redux) => redux.auth);
  const {LogoutUser}=useActions();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Nikom.biz
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Головна
              </Link>
            </li>

            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/products">Продукти</a>
                
              
            </li>
          </ul>
          {isAuth ? (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                   {/* <img src={user?.image} alt="image" className="rounded-circle" width="32" />
                   &nbsp;&nbsp; */}
                   {user?.email}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={LogoutUser}>
                  Вихід
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Реєстація
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Вхід
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;