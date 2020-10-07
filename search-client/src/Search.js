import React, { Component } from 'react';
import {Form,Input } from "reactstrap";
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      id:'',
      name:'',
      company:'',
      department:'',
      designation:'',
      email:'',
      contact:''
  };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  handleSubmit(event) {
    this.setState({value: event.target.value});
    let url = `http://localhost:5000/search/` + this.state.value;
    console.log(url);
    if(event.target.value !== '') {
    axios.get(url).then(resp => {
        console.log(resp.data);
       this.setState({
         name:resp.data.name,
         company:resp.data.company,
         id:resp.data.id, 
         department:resp.data.department, 
         designation:resp.data.designation, 
         contact:resp.data.contact, 
         email:resp.data.email
       })
      });
    } else {
      console.log('!!!Empty Value!!!');
    }
    event.preventDefault();
  }

  render() {
    return (<div>
    <Form onSubmit={this.handleSubmit}>
          <Input type="search" value={this.state.value} onChange={this.handleSubmit} className="col-5" placeholder="search..."/>
    </Form>
    <table>
    <tbody>
    <tr>

      <td>{this.name}</td>
      <td>{this.company}</td>
      <td>{this.department}</td>
      <td>{this.designation}</td>
      <td>{this.contact}</td>
      <td>{this.email} </td>
    </tr>
    </tbody>
    </table>
      </div>
    );
  }
}



export default Search;