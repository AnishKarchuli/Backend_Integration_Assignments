import AddBookForm from "./components/AddBookForm";
import Books from './components/Books';
import BookByTitle from './components/BooksByTitle';
import BookByAuthor from './components/BooksByAuthor';

export default function App() {
  return (
    <>
      <AddBookForm />
      <Books />
      <BookByTitle title="Shoe Dog" />
      <BookByAuthor author="Dan Brown" />
    </>
  )
}