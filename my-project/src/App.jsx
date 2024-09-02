
import { Provider } from 'react-redux';
import { store } from './store';
import ProductList from './ProductList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>FakeStore App</h1>
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;