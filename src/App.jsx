import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import SearchSection from "./components/SearchSection/SearchSection";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import "./styles/App.css";

export default function App() {
  const [data, setData] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) =>
        console.error("erro ao carregar lista de funcionarios", error)
      );
  }, []);

  return (
    <main className="container">
      <Header />
      <SearchSection pesquisa={pesquisa} setPesquisa={setPesquisa} />
      <EmployeeList data={data} pesquisa={pesquisa} />
    </main>
  );
}
