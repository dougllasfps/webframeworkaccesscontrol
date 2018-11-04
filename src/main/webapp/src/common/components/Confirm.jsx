import React from 'react'
import {Dialog} from "primereact/dialog";
import {Button} from "primereact/button";

export default class Confirm extends React.Component{

    onHide = () => {
        if(this.props.onHide){
            this.props.onHide()
        }
    }

    render(){

        const footer = (
            <div>
                <Button label="Confirma" icon="pi pi-check" onClick={this.props.onConfirm} className="p-button-secondary" />
                <Button label="Cancela"  icon="pi pi-times" onClick={this.props.onCancel}  className="p-button-danger" />
            </div>
        );

        return(
                <Dialog header={this.props.header ? this.props.header : 'Confirmação'}
                        visible={this.props.visible}
                        width={this.props.width ? this.props.width : '350px'}
                        modal={this.props.modal ? this.props.modal : false}
                        footer={this.props.footer ? this.props.footer : footer}
                        minY={70}
                        onHide={() => this.onHide}
                        maximizable={false}
                        blockScroll={true}>
                    {this.props.message}
                </Dialog>
        )
    }
}