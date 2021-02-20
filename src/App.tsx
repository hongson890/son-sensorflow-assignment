import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserTable } from './pages/users-react-data-table-demo/UserTable';
import { UserList } from './pages/users-material-table-demo/UserList';
import { BarChartDemo } from './pages/charts-demo/BarChartDemo';
import { LineChartDemo } from './pages/charts-demo/LineChartDemo';
import { MarbleChartDemo } from './pages/charts-demo/MarbleChartDemo';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/" component={MarbleChartDemo} exact />
          <Route path="/linechart-demo" component={LineChartDemo} exact />
          <Route path="/barchart-demo" component={BarChartDemo} exact />
          <Route path="/react-table-demo" component={UserTable} exact />
          <Route path="/material-table-demo" component={UserList} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
