/**
 * Created by Naveen Kumawat on 27-10-2017.
 */
import Home from './home'

ReactDOM.render((
    <Router history = {browserHistory}>
        <Route path = "/" component = {App}>
            <IndexRoute component = {Home} />
            <Route path = "home" component = {Home} />
            <Route path = "about" component = {About} />
            <Route path = "contact" component = {Contact} />
        </Route>
    </Router>

), document.getElementById('app'))