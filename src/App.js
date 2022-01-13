import { Routes, Route } from "react-router-dom";
import {ContextProvider} from "./context/GlobalContext";
import { UserListContainer } from "./components/UserListContainer";
import { UserForm } from "./components/UserForm";
import { Header } from "./components/Header";

function App() {
  return (
    <ContextProvider>
      <Header />

      <Routes>
        <Route path="/" element={<UserListContainer />} exact />
        <Route path="/add" element={<UserForm />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
