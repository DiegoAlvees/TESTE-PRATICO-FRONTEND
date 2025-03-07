import { useEffect, useState } from "react";
import logo from "../src/assets/Logo.svg";
import "../src/styles/App.css";
import search from "./assets/search.svg";
import charmUp from "./assets/up.svg";
import charmDown from "./assets/down.svg";
import { format } from "date-fns";

export default function App() {
  const [data, setData] = useState([]);
  const [tableInfo, setTableInfo] = useState(null);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) =>
        console.error("erro ao carregar lista de funcionarios", error)
      );
  }, []);
  console.log(data);

  const openInfo = (id) => {
    setTableInfo(tableInfo === id ? null : id);
  };

  const phoneFormat = (phone) => {
    const match = phone.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/);

    if (match) {
      return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}`;
    }

    return phone;
  };

  const formatDate = (date) => {
    return format(new Date(date), "dd/MM/yyyy");
  };

  const filterData = data.filter(({ name, job, phone }) =>
    [name, job, phone].some((field) =>
      field.toLowerCase().includes(pesquisa.toLowerCase())
    )
  );

  return (
    <main className="container">
      <header>
        <img className="logo" src={logo} alt="Logo BeTalent" />
      </header>
      <section className="searchSession">
        <div className="searchContainer">
          <h1>Funcionários</h1>
          <input
            className="searchEmployee"
            type="text"
            name="searchEmployee"
            id="searchInput"
            placeholder="Pesquisar"
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
          />
          <img className="imgSearch" src={search} alt="search" />
        </div>
      </section>
      <section className="employeeSession">
        <div className="employeeDescription">
          <div className="divInfos">
            <div className="info">
              <h2>foto</h2>
              <h2>nome</h2>
            </div>
            <div className="infoJob">
              <h2>cargo</h2>
            </div>
            <div className="infoDesktop">
              <h2>data de admissão</h2>
              <h2>telefone</h2>
            </div>
          </div>
          <div className="point"></div>
        </div>
        {filterData.length > 0 ? (
          filterData.map((employee) => (
            <div className="employeeContainer" key={employee.id}>
              <div className="divInfoApi">
                <div className="divName">
                  <img src={employee.image} alt="" />
                  <h3>{employee.name}</h3>
                </div>
                <div className="divJob">
                  <h3 className="jobjob">{employee.job}</h3>
                </div>
                <div className="divContato">
                <div>{formatDate(employee.admission_date)}</div>
                <div>{phoneFormat(employee.phone)}</div>

                </div>
                <button onClick={() => openInfo(employee.id)}>
                  <img
                    className="svgCharm"
                    src={tableInfo === employee.id ? charmUp : charmDown}
                    alt="botão abrir info"
                  />
                </button>
              </div>

              {tableInfo === employee.id && (
                <div className="containerMobile">
                  <div className="divCargo">
                    <h4>Cargo</h4>
                    <p>{employee.job}</p>
                  </div>
                  <div className="divDate">
                    <h4>Data de admissão</h4>
                    <p>{formatDate(employee.admission_date)}</p>
                  </div>
                  <div className="divTel">
                    <h4>Telefone</h4>
                    <p>{phoneFormat(employee.phone)}</p>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="noResults">Nenhum funcionário encontrado</p>
        )}
      </section>
    </main>
  );
}
