/* eslint-disable react/prop-types */
import { useState } from 'react';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import './EmployeeList.css'

const EmployeeList = ({ data, pesquisa }) => {
  const [tableInfo, setTableInfo] = useState(null);

  const openInfo = (id) => {
    setTableInfo(tableInfo === id ? null : id);
  };

  const filterData = data.filter(({ name, job, phone }) =>
    [name, job, phone].some((field) =>
      field.toLowerCase().includes(pesquisa.toLowerCase())
    )
  );

  return (
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
          <EmployeeCard
            key={employee.id}
            employee={employee}
            tableInfo={tableInfo}
            openInfo={openInfo}
          />
        ))
      ) : (
        <p className="noResults">Nenhum funcionário encontrado</p>
      )}
    </section>
  );
};

export default EmployeeList;
