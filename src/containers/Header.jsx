import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import {setAuthentication} from "../store/actions/actions";


class Header extends Component {

    handleLogged = () => {
        this.props.setAuthentication(!this.props.isAuth)
    }

    renderAuthLabel = () => {
        const authLabelConnexion = <Link className="nav-link" to="/" onClick={this.handleLogged}>Connexion</Link>;
        const authLabelDeconnexion = <Link className="nav-link" to="/" onClick={this.handleLogged}>Déconnexion</Link>;

        return !this.props.isAuth ? authLabelConnexion : authLabelDeconnexion;
    }

    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                    Navbar
                </Link>

                <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarColor02"
                        aria-controls="navbarColor02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto align-content-lg-end">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">
                                Home <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/resource">
                                Ressources
                            </Link>
                        </li>

                        <li className="nav-item">
                            {this.renderAuthLabel()}
                        </li>
                    </ul>

                </div>
            </nav>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        isAuth: store.rootAuthReducer.isAuth
    }
}

const mapDispatchToProps = {
    setAuthentication
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);
