import Dashboard from '../components/Dashboard';
import {connect} from 'react-redux';
import {getAllPlanets} from '../redux/dashboard/actions';

const mapState = state => ({
    dashBoard:state.dashBoard
})

const LoginContainer = connect(mapState,{getAllPlanets})(Dashboard);

export default LoginContainer