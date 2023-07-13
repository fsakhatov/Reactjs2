import React from "react";
import { student } from "./mock";
import './App.css';

class State extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            data: student,
            name: 'Farrukh',
            surname: 'Sakhatov',
        };
    }
    render() {

        const onChange = (event) => {
            this.setState({[event.target.name] : event.target.value });
        };
       
        const onFilter = (e)=>{
            console.log(e.target.value);
           let res = student.filter(value=> value.name.includes(e.target.value))
           this.setState({
            data: res
           })
        };

        
        return (
            <div>
                <h1>name: {this.state.name}</h1>
                <h1>surname: {this.state.surname}</h1>
                <h1>State {this.state.count}</h1>
                <input name="name" onChange={onChange} type="text" placeholder="name" />
                <input name="surname" onChange={onChange} type="text" placeholder="surname" />
                
                <br />
                <input onChange={onFilter} type="text" placeholder="filter" />
               
                {
                    this.state.data.map(({id, name, status}) => {
                        return(
                            <h1 key={id}> {id} {name} {status}</h1>
                        )
                    })
                }
            </div>
        );
    }
    }

    export default State;











