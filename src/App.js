import { UserListContainer } from "./components/UserListContainer";
import { Routes, Route } from "react-router-dom";
import { UserForm } from "./components/UserForm";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<UserListContainer />} exact />
        <Route path="/add" element={<UserForm />} />
      </Routes>
    </>
  );
}

export default App;
