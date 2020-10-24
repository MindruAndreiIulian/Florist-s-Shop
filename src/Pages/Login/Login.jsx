import React from 'react';
import {ReactComponent as Google} from '../../assets/icons/google.svg'
import {ReactComponent as Facebook} from '../../assets/icons/facebook.svg'
import './Login.css'
import { loginUser } from '../../Redux/User/UserActions';
import {loginFacebookUser} from '../../Redux/User/UserActions'
import {connect} from 'react-redux'
import Layout from '../../Components/Layout/Layout';

class Login extends React.Component {

    componentDidUpdate(prevProps) {
        if (this.props.user !== prevProps.user) {
            this.props.history.push('/');
        }
    }

    render(){
        console.log(this.props.user);
        return (
            <Layout>
            <div className = "container login-page">
                
               
                    <h3>Alege metoda de autentificare:</h3>
                    <button className = "btn btn-dark d-flex flex-row align-items-center mt-5"
                            onClick = {() => this.props.signInWithGoogle()}
                    >
                        <Google/>
                        <h4>Autentificre cu Google</h4>
                    </button>
                    <button className = "btn btn-light d-flex flex-row align-items-center mt-5"
                            onClick = {() => this.props.signinWithFacebook()}
                    >
                        <Facebook/>
                        <h4>Autentificre cu Facebook</h4>
                    </button>
            </div>
            </Layout>
    )
    }
}

function MapStateToProps(state){
    return{
        user: state.user.data
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        signInWithGoogle: () => dispatch(loginUser()),
        signinWithFacebook: () => dispatch(loginFacebookUser())
    }
}

export default connect(MapStateToProps,MapDispatchToProps)(Login);