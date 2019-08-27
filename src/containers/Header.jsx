import React, {Component} from 'react';
import {connect} from 'react-redux'
import {setAuthentication} from "../store/actions/actions";


class Header extends Component {

    handleLogged = () => {
        this.props.setAuthentication(!this.props.isAuth)
    }

    renderAuthLabel = () => {
        const authLabelConnexion = <a className="nav-link" href="#" onClick={this.handleLogged}>Connexion</a>;
        const authLabelDeconnexion = <a className="nav-link" href="#" onClick={this.handleLogged}>Déconnexion</a>;

       return  !this.props.isAuth ? authLabelConnexion : authLabelDeconnexion;
    }

    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>

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
                            <a className="nav-link" href="#">
                                Home <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Ressources
                            </a>
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
