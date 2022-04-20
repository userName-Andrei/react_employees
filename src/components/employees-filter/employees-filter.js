import './employees-filter.scss';

const EmployeesFilter = (props) => {

    const btnsData = [
        {filter: "all", inner: "Все сотрудники"},
        {filter: "rise", inner: "Сотрудники на повышение"},
        {filter: ">1000", inner: "Зп больше 1000$"}
    ];

    const btns = btnsData.map(({filter, inner}, i) => {
        let activeFilter = props.activeFilter === filter,
            clazz = activeFilter ? "btn btn-light" : "btn btn-outline-light";

        return (
            <button 
                key={i}
                data-filter={filter} 
                className={clazz} 
                type="button"
                onClick={() => props.onUpdateFilter(filter)}>
                    {inner}
            </button>
        )
    });

    return (
        <div className="btn-group">
            {btns}
        </div>
    );
}

export default EmployeesFilter;