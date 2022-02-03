import BookContextProvider from './contexts/BookContext';
import Nabvar from './components/Nabvar';
import BookList from './components/BookList';
import NewBookForm from './components/BookForm';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Nabvar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
