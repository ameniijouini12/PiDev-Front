import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './data-table.js';
export default class Events extends Component {
    constructor(props) {
        super(props);
        this.state = { eventsCollection: [] };
    }
    componentDidMount() {
        axios.get('http://localhost:4000/events')
            .then(res => {
                this.setState({eventsCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    dataTable() {
        return this.state.eventsCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }
    render() {
        return (
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}