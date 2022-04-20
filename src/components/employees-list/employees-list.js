import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.scss';

const EmployeesList = ({data, onDelete, onToggleProp, onUpdateSalary}) => {

    const elems = data.map((item) => {
        return <EmployeesListItem 
                    key={item.id} 
                    {...item}
                    onDelete={() => onDelete(item.id)}
                    onToggleProp={(e) => onToggleProp(item.id, e.currentTarget.dataset.toggle)}
                    onUpdateSalary={(e) => onUpdateSalary(item.id, e.currentTarget.value)}/>
    });

    return (
        <ul className="employees-list list-group">
            {elems}
        </ul>
    );
}

export default EmployeesList;