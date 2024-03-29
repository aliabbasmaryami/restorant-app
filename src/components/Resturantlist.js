import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

class Resturantlist extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/resturant").then((Response) => {
      Response.json().then((result) => {
        this.setState({ list: result });
      });
    });
  }
  render() {

    return (
      <div>
      <h1>resturant list</h1> 
      {
        this.state.list ?
      <div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Rating</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
          {
            this.state.list.map((item,person, i) =>

                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td><Link to={'/update/' +person.id}>Edit</Link></td>
                </tr>)
          }
          </tbody>
        </Table>
      </div>
      : <p>Please wait...</p>
      }
    </div>
    );
  }
}
  
    

export default Resturantlist;
