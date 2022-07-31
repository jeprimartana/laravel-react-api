import axios from 'axios';
import React, {Component} from 'react';
import {toast} from 'react-toastify'

class CreateModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employeeName: null,
            keterangan: null,
            employeeSalary: null,
            persediaan: null,
        }
    }

     // Create name Sate
    inputEmployeeName = (event) => {
        this.setState({
            employeeName: event.target.value,
        });
    }
    // Create salary
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

    // Storing
    storeEmployeeData = () => {
        axios.post('/store/employee/data', {
            employeeName: this.state.employeeName,
            keterangan: this.state.keterangan,
            employeeSalary: this.state.employeeSalary,
            persediaan: this.state.persediaan,
        }).then(() => {
            toast.success("Barang Berhasil di Simpan");
            setTimeout(() => {
                location.reload();
            },2500)
        })
    }

    render() {
        return(
            <>
            <div className='row text-right mb-3 pb-3'>
                <button className='btn btn-info text-right col-3 offset-md-9'
                    data-toggle="modal"
                    data-target="#modalcreate"
                >
                    Tambah Barang
                </button>
            </div>
            <div className="modal fade" id="modalcreate" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Halaman Tambah Barang</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className='form'>
                            <div className="form-group">
                                <input type="text"
                                    id="employeeName"
                                    className='form-control mb-3 pb-3'
                                    placeholder="Nama Barang"
                                    onChange={this.inputEmployeeName}
                                />
                            </div>
                            <div className="form-group">
                                <input type="text"
                                    id="employeeSalary"
                                    className='form-control mb-3 pb-3'
                                    placeholder="Keterangan"
                                    onChange={this.inputKeterangan}
                                />
                            </div>
                            <div className="form-group">
                                <input type="text"
                                    id="employeeSalary"
                                    className='form-control mb-3 pb-3'
                                    placeholder="Harga"
                                    onChange={this.inputEmployeeSalary}
                                />
                            </div>
                            <div className="form-group">
                                <input type="text"
                                    id="employeeSalary"
                                    className='form-control mb-3 pb-3'
                                    placeholder="Ketersediaan"
                                    onChange={this.inputPersediaan}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <input type="button"
                            value="Simpan"
                            className='btn btn-info'
                            onClick={this.storeEmployeeData}
                         />
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Keluar</button>
                    </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default CreateModal;