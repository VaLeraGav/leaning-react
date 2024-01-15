import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5';
import AddUser from './AddUser';
import { useState } from 'react';

const User = (props) => {
  let user = props.user;

  let [state, setState] = useState({
    editForm: false
  });

  const toggleForm = () => {
    setState({ editForm: !state.editForm });
  };

  return (
    <div className="user">
      <IoCloseCircleSharp onClick={() => props.onDelete(user.id)} className="delete-icon" />
      <IoHammerSharp onClick={toggleForm} className="edit-icon" />
      <h3>{user.firstname} {user.lastname}</h3>
      <p>{user.bio}</p>
      <p>{user.isHappy ? 'Счастлив )' : 'Не особо ('}</p>
      {state.editForm && <AddUser user={user} onAdd={props.onEdit} clickButton={toggleForm} />}
    </div>
  );
};

export default User;
