
import './App.css';
import GetData from './Components/Getdata/index'
import Graph from './Components/Graph/index'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import '../node_modules/font-awesome/fonts/fontawesome-webfont.svg'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'



function App() {
  return (
    <div className="App">
    
      <Router>
        <Switch>
      
       
     
      <Route exact path="/" component={GetData} />
      <Route exact path="/graph" component={Graph} />
     
      </Switch>
      </Router>
    </div>
  );
}

export default App;
