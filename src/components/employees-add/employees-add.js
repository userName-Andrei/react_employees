import { Component } from 'react';
import './employees-add.scss';

class EmployeesAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            salary: ''
        }
    }

    onInputsChages = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(this.state.name.length < 2) return;
        if(this.state.salary.length < 1) return;

        this.props.onAdd(this.state);
        this.setState({
            name: '',
            salary: '',
        });
    }
    
    render() {
        const {name, salary} = this.state;

        return (
            <div className="employees-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name" 
                        value={name}
                        onChange={this.onInputsChages}/>
                    <input 
                        type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name="salary"
                        value={salary}
                        onChange={this.onInputsChages}/>
                    <button 
                        type="submit" 
                        className="btn btn-outline-light">
                        Добавить
                    </button>
                </form>
            </div>
        );
    }
}

export default EmployeesAdd;