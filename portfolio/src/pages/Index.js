import React, { Component } from "react";
import Home from "../components/Home";
import About from "../components/About";


class Index extends Component {

    state = {
        search: [],
        employees: [],
        filteredEmployees: [],
        results: [],
        error: "",
        isActive: false,
      };

 // When the component mounts, get a list of all available employees
  componentDidMount() {
   
  }

  compare = (a,b) =>{
    console.log(a);
    const nameA = a.name.first.toUpperCase();
    const nameB = b.name.first.toUpperCase();
 
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }

  handleInputChange = event => {
    // console.log(event.target.value);
    this.setState({ search: event.target.value });

    event.target.value
       ? this.setState({isActive : true})
       : this.setState({isActive : false});
   
     const filteredList = this.state.employees.filter((item) => {
         let values = item.name.title + item.name.first + item.name.last + item.gender + item.dob.age +  item.dob + item.email + item.phone;
         return values.indexOf(this.state.search) !== -1;
     });

    //  console.log(filteredList);
     this.setState({
         filteredEmployees: filteredList
     });
};

render(){
  return (
    <div>
       <Home />
       <About />
    </div>
  );
  }
}

export default Index;
