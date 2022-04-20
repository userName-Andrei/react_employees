import { Component } from "react";

class EmployeesSearch extends Component{
    
    constructor(props) {
        super(props);

        this.state = {
            phrase: ""
        }
    }

    setPhrase = (e) => {
        const phrase = e.target.value.trim().toLowerCase();
        this.setState({phrase});

        this.props.onUpdateSearch(phrase);
    }
    
    render() {
        return (
            <input 
            type="text"
            className='form-control search-input'
            placeholder='Найти сотрудника'
            value={this.state.phrase}
            onChange={this.setPhrase} />
        );
    }
}

export default EmployeesSearch;