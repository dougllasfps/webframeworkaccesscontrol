import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

export default class DataTable extends React.Component{

    state = {
        page : 0
    }

    renderHeader = () => {
        let cols = this.props.cols || []

        return cols.map( (c,index) => (
            <TableCell key={index} className={c.className || ''}>{c.header}</TableCell>
        ))
         
    }

    renderBody = () => {
        let cols = this.props.cols || []

        const cells = cols.map( (c,index) => (
            <TableCell key={index} className={c.className || ''}>{c.value}</TableCell>
        ))

        return (
            <TableRow>
                {cells}
            </TableRow>
        )
    }

    renderPaginator = () => {
        let lazy = this.props.lazy || false
        console.log(lazy)
        return (
            <TablePagination
                rowsPerPageOptions={[10]}
                component="div"
                count={this.props.dataSize}
                rowsPerPage={this.props.rows}
                page={this.state.page}
                backIconButtonProps={{
                    'aria-label': 'Anterior',
                }}
                nextIconButtonProps={{
                    'aria-label': 'Próximo',
                }}
                onChangePage={() => this.props.onChangePage()}
                onChangeRowsPerPage={() => this.props.onChangeRowsPerPage()}
            />
        )
    }

    render(){
        return(
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            {this.renderHeader()}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.children}
                    </TableBody>
                </Table>
                {this.renderPaginator()}
            </div>
        )
    }
}

