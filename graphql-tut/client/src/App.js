import './App.css';
import { gql, useQuery } from '@apollo/client';

const query = gql`
  query GetTodos {
    getTodos {
      id 
      title
      completed
      user {
        id
        name
      }
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(query);

  if (loading) return (
    <div className="loading">
      <p>Loading todos...</p>
    </div>
  );

  if (error) return (
    <div className="error">
      <p>Error: {error.message}</p>
    </div>
  );

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="todos-container">
        {data?.getTodos.map((todo) => (
          <div key={todo.id} className={`todo-card ${todo.completed ? 'completed' : ''}`}>
            <div className="todo-content">
              <h3>{todo.title}</h3>
              <p className="user-info">Assigned to: {todo.user?.name || 'Unassigned'}</p>
              <span className={`status ${todo.completed ? 'done' : 'pending'}`}>
                {todo.completed ? 'Completed' : 'Pending'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
