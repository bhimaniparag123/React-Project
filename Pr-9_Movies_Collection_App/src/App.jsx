import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import AddMovie from "./Components/AddMovie";
import EditMovie from "./Components/EditMovie";
import MovieList from "./Components/MoviesList";
import ViewMovie from "./Components/ViewMovies";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/add-Movie" element={<AddMovie />} />
        <Route path="/edit-Movie/:id" element={<EditMovie />} />
        <Route path="/view-Movie/:id" element={<ViewMovie />} /> {/* ✅ Add this */}
      </Routes>
    </>
  );
}

export default App;
