
import BlogDetails from './BlogDetails';
import Create from './Create';
import Home from './Home';
import NotFound from './NotFound';
import NavBar from './NavBar';
import  {BrowserRouter as Router ,Route, Switch} from 'react-router-dom'
function App() {
 
  return (
    <div className="App">
       <Router>
       <div className="content">
          <NavBar/>
          <div className="container m-5">
            <Switch>
             <Route exact path="/">
                <Home/>
             </Route>
             <Route path="/create">
                <Create/>
             </Route>
             <Route path="/blogs/:id">
                <BlogDetails/>
             </Route>
             <Route path="*">
                <NotFound/>
             </Route>
            </Switch>
          </div>

        </div>
       </Router>
    </div>
  );
}

export default App;
