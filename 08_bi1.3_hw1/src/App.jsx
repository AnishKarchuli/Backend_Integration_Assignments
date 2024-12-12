import Books from './components/Books';
import AddBookForm from './components/AddBookForm';
import BookByTitle from './components/BookByTitle';
import BookByAuthor from './components/BookByAuthor';

export default function App(){
  return (
    <>
      <AddBookForm />
      <Books />
      <BookByTitle title="Shoe Dog" />
      <BookByAuthor author="Dan Brown" />
    </>
  )
}