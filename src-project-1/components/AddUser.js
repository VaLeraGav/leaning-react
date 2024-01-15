import { useState } from 'react';

let acc = {
  firstname: '',
  lastname: '',
  bio: '',
  age: 0,
  isHappy: false
};

const AddUser = (props) => {
  let [state, setState] = useState(acc);
  let myForm;

  const setUser = () => {
    myForm.reset();
    if (props.user) {
      state.id = props.user.id;
    }
    props.onAdd(state);
    setState(acc);
  };

  return (
    <form ref={(el) => myForm = el}>
      <input placeholder="Имя" onChange={(e) => setState(prev => ({ ...prev, firstname: e.target.value }))}></input>
      <input placeholder="Фамилия" onChange={(e) => setState(prev => ({ ...prev, lastname: e.target.value }))}></input>
      <textarea placeholder="Биограф" onChange={(e) => setState(prev => ({ ...prev, bio: e.target.value }))}></textarea>
      <input placeholder="Возраст" onChange={(e) => setState(prev => ({ ...prev, age: e.target.value }))}></input>
      <label htmlFor="isHappy">Счастлив ?</label>
      <input type="checkbox" id="isHappy" onChange={(e) => setState(prev => ({ ...prev, isHappy: e.target.value }))}></input>
      <button type="button" onClick={() => {
        setUser();
        console.log(props);

        if (props.clickButton) {
          props.clickButton();
        }
      }
      }>Добавить</button>
    </form >
  );
};

export default AddUser;
