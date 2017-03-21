import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Layout from './Layout';
import About from './About';
import Resume from './Resume';
import ProjectsIndexContainer from '../containers/ProjectsIndexContainer';
import ProjectShowContainer from '../containers/ProjectShowContainer';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return(

      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={About} />
          <Route path='/resume' component={Resume} />
          <Route path='/projects' component={ProjectsIndexContainer} />
          <Route path='/projects/:id' component={ProjectShowContainer} />
        </Route>
      </Router>

    )
  }
}

export default App;
