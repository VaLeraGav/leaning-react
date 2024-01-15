

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addNewTodo, fetchTodos } from './store/todoSlice';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

function App() {
  const [text, setText] = useState('');
  const { status, error } = useSelector(state => state.todos);

  const dispatch = useDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addNewTodo(text));
      setText('');
    }
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  // const addTodo = () => {
  //   if (text.trim().length)
  //     setTodos([
  //       ...todos,
  //       {
  //         id: new Date().toISOString(),
  //         text,
  //         completed: false
  //       }
  //     ]);
  //   setText('');
  // };

  // const toggleTodoComplete = (todoId) => {

  //   setTodos(
  //     todos.map(
  //       todo => {
  //         if (todo.id !== todoId) return todo;
  //         return {
  //           ...todo,
  //           completed: !todo.completed,
  //         };
  //       }
  //     )
  //   );
  // };

  // const removeTodo = (todoId) => {
  //   setTodos(todos.filter(todo => todo.id !== todoId));
  // };

  return (
    <div className='App'>
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />

      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}

      <TodoList />
    </div>
  );
}

export default App;
