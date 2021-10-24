import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Funcionario from './pages/Funcionario.js';
import Addfuncionario from './pages/Addfuncionario.js';
import Addcargo from './pages/Addcargo.js';
import Editfuncionario from './pages/Editfuncionario'

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Funcionario}/>
          <Route path="/add-funcionario" component={Addfuncionario}/>
          <Route path="/add-cargo" component={Addcargo}/>
          <Route path="/editar-funcionario/:id" component={Editfuncionario}/>
        </Switch>
    </Router>
  );
}

export default App;
