import User from "./User";

const Users = (props) => {
  return props.users.length > 0 ? (
    <div>
      {props.users.map((el, id) => (
        <User onDelete={props.onDelete} onEdit={props.onEdit} key={id} user={el} />
      ))}
    </div>
  ) : (
    <div className="user">
      <h3>Пользователей нет</h3>
    </div>
  );

};

export default Users;
