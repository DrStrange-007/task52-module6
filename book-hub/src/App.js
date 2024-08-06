import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';
import SearchUser from './components/SearchUser';
import AddBook from './components/AddBook';
import UpdateBook from './components/UpdateBook';
import DeleteBook from './components/DeleteBook';
import SearchBook from './components/SearchBook';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/add-user" component={AddUser} />
        <Route path="/update-user" component={UpdateUser} />
        <Route path="/delete-user" component={DeleteUser} />
        <Route path="/search-user" component={SearchUser} />
        <Route path="/add-book" component={AddBook} />
        <Route path="/update-book" component={UpdateBook} />
        <Route path="/delete-book" component={DeleteBook} />
        <Route path="/search-book" component={SearchBook} />
      </Switch>
    </Router>
  );
};

export default App;
