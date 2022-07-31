import React, {Component} from 'react';
import 'react-toastify/dist/ReactToastify.css';

class ViewModal extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="modal fade" id={"viewModal"+this.props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Detail Barang</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Nama : <strong>{ this.props.employeeData.currentEmployeeName }</strong>
                        <hr/>
                        Keterangan : <strong>{ this.props.employeeData.currentKeterangan }</strong>
                        <hr/>
                        Harga : <strong>{ this.props.employeeData.currentEmployeeSalary }</strong>
                        <hr/>
                        Persediaan : <strong>{ this.props.employeeData.currentPersediaan }</strong>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewModal;