import logo from './logo.svg';
import './App.css';
import Principal from './components/principal';
import Secundario from './components/secundario';
import {  BrowserRouter as Router,
   Route, Switch, Redirect
} from "react-router-dom";
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';

function App() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils} locale="es" moment={moment}>
    <Router>

        <Redirect
            from="/"
            to="/principal" />

<Switch>
            <Route path="/principal" component={Principal}/>
            <Route path="/secundario" component={Secundario}/>


        </Switch>
    </Router>
    </MuiPickersUtilsProvider>
  );
}

export default App;
