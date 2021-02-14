import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserList } from './pages/users/UserList';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/" component={UserList} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
