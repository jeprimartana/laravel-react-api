import axios from 'axios';
import React, {Component} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TableRow from './TableRow';
import CreateModal from './Modals/CreateModal';
import './css/TableRow.css'

class Table extends Component {


    constructor(props) {
        super(props);

        this.state = {
            employees: [],
        }
    }

    componentDidMount() {
        this.getEmployeeList();
    }


    getEmployeeList = () => {
        let self = this;
        axios.get('/get/employee/list').then(function(response) {
            self.setState({
                employees: response.data
            });
        });
    }


    render () {
    return (
        <div className="container">
            <ToastContainer/>
            <CreateModal/>
            <div className="row justify-content-center Tabel">
                <div className="col-md-8">
                    <div className="card">
                        <div className="table table-hover">
                            <thead>
                                <tr className='list_nama container'>
                                    <th scope="col" width="100px">ID</th>
                                    <th scope="col" width="200px">Nama Barang</th>
                                    <th scope="col" width="100px">Keterangan</th>
                                    <th scope="col" width="100px">Harga</th>
                                    <th scope="col" width="100px">Persediaan</th>
                                    <th scope="col" width="250px" className='text-center'>Actions</th>
                                    </tr>
                            </thead>
                            <tbody>
                            {this.state.employees.map(function (x, i) {
                                return <TableRow key={i} data={x} />
                            })}
                            </tbody>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}


export default Table;

