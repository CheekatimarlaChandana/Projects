import { Provider } from 'react-redux';
import  store from "./Redux/store";
import TodoList from './Component/TodoList';

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
