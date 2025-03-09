/* eslint-disable react/prop-types */
import charmUp from '../../assets/up.svg';
import charmDown from '../../assets/down.svg';
import { formatDate, phoneFormat } from '../../utils';
import './EmployeeCard.css'

const EmployeeCard = ({ employee, tableInfo, openInfo }) => {
  return (
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
  );
};

export default EmployeeCard;
