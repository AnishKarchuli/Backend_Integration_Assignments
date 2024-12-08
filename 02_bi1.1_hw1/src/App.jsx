import BookByAuthor from "./components/BookByAuthor";
import BookByTitle from "./components/BookByTitle";
import Books from "./components/Books";

export default function App() {
  return (
    <>
      <Books />
      <BookByTitle title="Shoe Dog" />
      <BookByAuthor author="Dan Brown" />
    </>
  )
}