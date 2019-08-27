import React, {Component} from 'react';
import {connect} from 'react-redux';

export default (ChildComponent) => {
    class RequireAuthentication extends Component {
        static getDerivedStateFromProps(props, state) {
            if (!props.isAuth) {
                return props.history.push("/")
            }

        }

        render() {
            return <ChildComponent/>;
        }
    }

    const mapStateToProps = (store) => {
        return {
            isAuth: store.rootAuthReducer.isAuth
        }
    }
    return connect(mapStateToProps)(RequireAuthentication)
}

