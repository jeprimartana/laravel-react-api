import React, {Component} from 'react';
import TableActionButtons from './TableActionButtons';


class TableRow extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <tr>
                <th>{ this.props.data.id}</th>
                <td>{ this.props.data.employee_name}</td>
                <td>{ this.props.data.keterangan}</td>
                <td>{ this.props.data.salary}</td>
                <td>{ this.props.data.persediaan}</td>
                <td>
                    <TableActionButtons eachRowId= { this.props.data.id }/>
                </td>
            </tr>
        )
    }
}

export default TableRow;