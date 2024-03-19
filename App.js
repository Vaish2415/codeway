import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import JobListingsPage from './components/JobListingsPage';
import JobDetailPage from './components/JobDetailPage';
import EmployerDashboard from './components/EmployerDashboard';
import CandidateDashboard from './components/CandidateDashboard';
import JobApplicationForm from './components/JobApplicationForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/job-listings" component={JobListingsPage} />
        <Route exact path="/job/:id" component={JobDetailPage} />
        <Route exact path="/employer-dashboard" component={EmployerDashboard} />
        <Route exact path="/candidate-dashboard" component={CandidateDashboard} />
        <Route exact path="/apply/:id" component={JobApplicationForm} />
      </Switch>
    </Router>
  );
}

export default App;
