import React, {Component} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

class DeleteModal extends Component {

    constructor(props) {
        super(props);
    }

    // delete function 

    deleteEmployeeData = (employee) => {
        axios.delete('/delete/employee/data/'+employee).then(() => {
            toast.error("Employee Berhasil Dihapus");

            setTimeout(() => {
                location.reload();
            },2500)
        })
    }

    render() {
        return(
            <div className="modal fade" id={"deleteModal"+this.props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Halaman Hapus Barang</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Apakah kamu yakin, ingin menghapus Data Employee ini ??
                    </div>
                    <div className="modal-footer">
                        <button type="button" 
                            className="btn btn-danger" 
                            data-bs-dismiss="modal"
                            onClick={ () => {this.deleteEmployeeData(this.props.modalId)}}
                            >
                            Yes
                        </button>
                        <button type="button" 
                            className="btn btn-secondary" 
                            data-bs-dismiss="modal"
                            >
                            Close
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteModal;