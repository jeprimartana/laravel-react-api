import axios from 'axios';
import React, {Component} from 'react';
import ViewModal from './Modals/ViewModal';
import UpdateModal from './Modals/UpdateModal';
import DeleteModal from './Modals/DeleteModal';

class TableActionButtons extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentEmployeeName: null,
            currentKeterangan: null,
            currentEmployeeSalary: null,
            currentPersediaan: null,
        }
    }

    getEmployeeDetails = (id) => {
        axios.post('/get/individual/employee/details', {
            employeeId: id
        }).then((response) => {
            this.setState({
                currentEmployeeName: response.data.employee_name,
                currentKeterangan: response.data.keterangan,
                currentEmployeeSalary: response.data.salary,
                currentPersediaan: response.data.persediaan
            })
            console.log(response.data);
        })
    }


    render() {
        return(
            <div className="btn-group" role="group">
                <button type="button" 
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target={'#viewModal'+this.props.eachRowId}
                onClick={ () => { this.getEmployeeDetails(this.props.eachRowId)}}
                >
                    Lihat</button>
                <ViewModal modalId= { this.props.eachRowId} employeeData={ this.state }/>
                <button type="button" 
                    className="btn btn-info"
                    data-bs-toggle="modal"
                    data-bs-target={'#updateModal'+this.props.eachRowId}
                    onClick={ () => { this.getEmployeeDetails(this.props.eachRowId)}}
                >
                    Update
                </button>
                <UpdateModal modalId= { this.props.eachRowId} employeeData={ this.state }/>
                <button type="button" 
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target={'#deleteModal'+this.props.eachRowId}
                    onClick={ () => { this.getEmployeeDetails(this.props.eachRowId)}}
                >
                    Hapus
                </button>
                <DeleteModal modalId= { this.props.eachRowId} employeeData={ this.state }/>
            </div>
        )
    }
}

export default TableActionButtons;