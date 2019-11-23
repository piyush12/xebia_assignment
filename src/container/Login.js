import Login from '../components/Login';
import {connect} from 'react-redux';
import {logIn,clearLogin} from '../redux/login/action';

const mapState = state => ({
    login:state.loginReducer
})

const LoginContainer = connect(mapState,{logIn, clearLogin})(Login);

export default LoginContainer