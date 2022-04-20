import {Component} from 'react';
import EmployeesInfo from '../employees-info/employees-info';
import EmployeesSearch from '../employees-search/employees-search';
import EmployeesFilter from '../employees-filter/employees-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAdd from '../employees-add/employees-add';

import './app.scss';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                {id: 1,name: "John S.", salary: 800, increase: false, rise: true},
                {id: 2,name: "Mathew M.", salary: 1600, increase: false, rise: false},
                {id: 3,name: "Robert D.", salary: 2000, increase: false, rise: false},
            ],
            phrase: "",
            activeFilter: "all"
        }
        this.nextId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        }))
    }

    createItem = ({name, salary}) => {
        let newItem = {id: this.nextId, name, salary, increase: false, rise: false};

        this.nextId++;
        this.setState(({data}) => ({
            data: [...data, newItem]
        }));
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => item.id === id ? {...item, [prop]: !item[prop]} : item)
        }));
    }

    searchEmployees = (items, phrase) => {
        if (phrase.length === 0 || phrase === '') return items;

        return items.filter(item => {
            return item.name.toLowerCase().indexOf(phrase) > -1;
        })
    }

    onUpdateSearch = (phrase) => {
        this.setState({phrase});
    }

    filterEmployees = (items, activeFilter) => {
        switch(activeFilter) {
            case 'all': 
                return items;
            case 'rise':
                return items.filter(item => item.rise);
            case '>1000':
                return items.filter(item => +item.salary > 1000);
            default:
                return items;
        }
    }

    onUpdateFilter = (activeFilter) => {
        this.setState({activeFilter});
    }

    onUpdateSalary = (id, newSalary) => {
        const salary = newSalary.replace(/\$/g, '');
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, salary: salary};
                }
                return item;
            })
        }));
    }

    render() {
        const {data, phrase, activeFilter} = this.state,
            employeesNum = data.length,
            increaseNum = data.filter(item => item.increase === true).length,
            riseNum = data.filter(item => item.rise === true).length,
            visibleData = this.filterEmployees(this.searchEmployees(data, phrase), activeFilter); //this.searchEmployees(data, phrase);
    
        return (
            <div className="employees">
                <EmployeesInfo
                    employeesNum={employeesNum}
                    increaseNum={increaseNum}
                    riseNum={riseNum}/>
    
                <div className="employees-search-panel">
                    <EmployeesSearch onUpdateSearch={this.onUpdateSearch}/>
                    <EmployeesFilter onUpdateFilter={this.onUpdateFilter} activeFilter={activeFilter}/>
                </div>
    
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onUpdateSalary={this.onUpdateSalary}/>
                <EmployeesAdd onAdd={this.createItem}/>
            </div>
        );
    }
}

export default App;