import { useState } from "react";
import "./App.css";
import CreateNote from "./Components/CreateNote/CreateNote";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Note from "./Components/Note/Note";

function App() {
  const [note, setNote] = useState([]);
  const addNote = (newNote) => {
    setNote((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };
  const deleteNote = (id) => {
    setNote((prevNotes) => {
      return prevNotes.filter((no, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="App">
      <Header />
      <Footer />

      <CreateNote onAdd={addNote} />
      <div className="app_Note">
        {note.map((not, index) => {
          return (
            <Note
              id={index}
              title={not.title}
              content={not.content}
              deleteNote={deleteNote}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
