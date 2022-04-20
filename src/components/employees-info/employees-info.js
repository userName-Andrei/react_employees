import './employees-info.scss';

const EmployeesInfo = (props) => {

    const {employeesNum, increaseNum, riseNum} = props;

    return (
        <div className="employees-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {employeesNum}</h2>
            <h2>Преми получат: {increaseNum}</h2>
            <h2>Сотрудников на повышение: {riseNum}</h2>
        </div>
    );
}

export default EmployeesInfo;