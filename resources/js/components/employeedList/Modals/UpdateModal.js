import axios from 'axios';
import React, {Component} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class UpdateModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employeeName: null,
            persediaan: null,
            employeeSalary: null,
            keterangan: null,
        }
    }
    // Update name Sate
    /* ========================================*/
    inputEmployeeName = (event) => {
        this.setState({
            employeeName: event.target.value,
        });
    }

    inputKeterangan = (event) => {
        this.setState({
            keterangan: event.target.value,
        });
    }
    inputEmployeeSalary = (event) => {
        this.setState({
            employeeSalary: event.target.value,
        });
    }
    inputPersediaan = (event) => {
        this.setState({
            persediaan: event.target.value,
        });
    }
    /* ========================================*/

    static getDerivedStateFromProps(props, current_state) {
        let employeeUpdate = {
            employeeName: null,
            keterangan: null,
            employeeSalary: null,
            persediaan: null,
        }

        // INPUT

        if(current_state.employeeName && (current_state.employeeName !== props.employeeData.currentEmployeeName)) {
            return null;
        }

        if(current_state.keterangan && (current_state.keterangan !== props.employeeData.currentKeterangan)) {
            return null;
        }
        if(current_state.employeeSalary && (current_state.employeeSalary !== props.employeeData.currentEmployeeSalary)) {
            return null;
        }
        if(current_state.persediaan && (current_state.persediaan !== props.employeeData.currentPersediaan)) {
            return null;
        }

        // OUTPUT
        if(current_state.employeeName !== props.employeeData.currentEmployeeName ||
            current_state.employeeName === props.employeeData.currentEmployeeName) {
            employeeUpdate.employeeName = props.employeeData.currentEmployeeName;
        }
        if(current_state.keterangan !== props.employeeData.currentKeterangan ||
            current_state.keterangan === props.employeeData.currentKeterangan) {
            employeeUpdate.keterangan = props.employeeData.currentKeterangan;
        }
        if(current_state.employeeSalary !== props.employeeData.currentEmployeeSalary ||
            current_state.employeeSalary === props.employeeData.currentEmployeeSalary) {
            employeeUpdate.employeeSalary = props.employeeData.currentEmployeeSalary;
        }
        if(current_state.persediaan !== props.employeeData.currentPersediaan ||
            current_state.persediaan === props.employeeData.currentPersediaan) {
            employeeUpdate.persediaan = props.employeeData.currentPersediaan;
        }
        return employeeUpdate;
    }

    // Employee Data
    updateEmployeeData = () => {
        axios.post('/update/employee/data', {
            employeeId: this.props.modalId,
            employeeName: this.state.employeeName,
            keterangan: this.state.keterangan,
            employeeSalary: this.state.employeeSalary,
            persediaan: this.state.persediaan,
        }).then(() => {
            toast.success("Barang Behasil di Update");
            setTimeout(() => {
                location.reload();
            },2500)
        })
    }

    render() {
        return(
            <div className="modal fade" id={"updateModal"+this.props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Barang Update</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className='form'>
                            <div className="form-group">
                                <input type="text"
                                    id="employeeName"
                                    className='form-control mb-3 pb-3'
                                    value={this.state.employeeName ?? ""}
                                    onChange={this.inputEmployeeName}
                                />
                            </div>
                            <div className="form-group">
                                <input type="text"
                                    id="keterangan"
                                    className='form-control mb-3 pb-3'
                                    value={this.state.keterangan ?? ""}
                                    onChange={this.inputKeterangan}
                                />
                            </div>
                            <div className="form-group">
                                <input type="text"
                                    id="employeeSalary"
                                    className='form-control mb-3 pb-3'
                                    value={this.state.employeeSalary ?? ""}
                                    onChange={this.inputEmployeeSalary}
                                />
                            </div>
                            <div className="form-group">
                                <input type="text"
                                    id="persediaan"
                                    className='form-control mb-3 pb-3'
                                    value={this.state.persediaan ?? ""}
                                    onChange={this.inputPersediaan}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                                <input type="submit"
                                    className='btn btn-info'
                                    id="employeeSalary"
                                    value="Update"
                                    onClick={this.updateEmployeeData}
                                />
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateModal;