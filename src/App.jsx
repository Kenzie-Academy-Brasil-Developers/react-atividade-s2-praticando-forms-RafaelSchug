import './App.css';
import Form from './Pages/Form';
import {Switch, Route, useHistory} from 'react-router-dom';
import { useState } from 'react';
import Cards from './Pages/Cards'

function App() {

  const history = useHistory();
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const handleSwitch = event => {
    const target = event.target.dataset.goto;
    history.push(target);
  }

  return (
    <div className='main__container'>
      <div className='switch__container'>
        <div className='button__container'>
          <button onClick={handleSwitch} data-goto='/'>Novo Usuário</button>
          <button onClick={handleSwitch} data-goto='/users'>Exibir Usuários</button></div> 
        <Switch>
          <Route exact path='/'>
            <Form registeredUsers={registeredUsers} setRegisteredUsers={setRegisteredUsers}></Form>
          </Route>
          <Route path='/users/'>
            <Cards registeredUsers={registeredUsers}></Cards>
          </Route>
        </Switch>
      </div>
    </div>
  )
  
}

export default App;
