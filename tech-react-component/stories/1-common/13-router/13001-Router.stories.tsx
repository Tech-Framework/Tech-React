import { Router, Route, Switch} from 'react-router'
import { createMemoryHistory } from 'history';
import { Link } from 'react-router-dom';

export default {
    title: 'Common|Router/Basic',
}

const App = () => (
    <div>App</div>
);

const About = () => (
    <div>About</div>
);

const User = () => (
    <div>User</div>
);

const memonryHistory = createMemoryHistory();

export const exampel = () => (
    <Router history={memonryHistory}>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/user">User</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/user" component={User} />
            <Route path="/contact" component={About} />
        </Switch>
    </Router>
)