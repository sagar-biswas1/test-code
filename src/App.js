import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import TeamMembers from './components/Team-Members/TeamMembers';
import Update from './components/Update/Update';

function App() {
  return (
    <>

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <TeamMembers></TeamMembers>
          </Route>
          <Route path="/update/:id">
              <Update></Update>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
