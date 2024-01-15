import Header from "./Header";
import { useState } from 'react';
import Users from "./Users";
import AddUser from "./AddUser";


const App = () => {
  let userList = {
    users: [
      {
        id: 1,
        firstname: 'Bob',
        lastname: 'Marley',
        bio: 'Lorem ipsum dolor',
        age: 40,
        isHappy: true
      },
      {
        id: 2,
        firstname: 'John',
        lastname: 'Doe',
        bio: 'Lorem ipsum dolor age: 22, isHappy: false',
        age: 22,
        isHappy: false
      }
    ]
  };
  let [state, setState] = useState(userList);

  const addUser = (user) => {
    const id = state.users.length + 1;
    setState({ users: [...state.users, { id, ...user }] });
  };

  const deleteUser = (id) => {
    setState({
      users: state.users.filter((el) => el.id !== id)
    });
  };

  const editUser = (user) => {
    let allUsers = state.users;
    allUsers[user.id - 1] = user;

    console.log(allUsers);
    setState({ users: [] });
    setState({ users: [...allUsers] });
  };

  return (
    <div className="name">
      <Header title="Список пользователей" name="" />
      <main>
        <Users users={state.users} onDelete={deleteUser} onEdit={editUser} />
      </main>
      <aside>
        <AddUser onAdd={addUser} />
      </aside>
    </div>
  );
};

export default App;


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/home/Main';
const Main = () => {
  return (
    <>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'contacts/:contactId',
    element: <Contact />,
  },
]);

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const auth = false;
  if (!auth)
    return
  return children;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
