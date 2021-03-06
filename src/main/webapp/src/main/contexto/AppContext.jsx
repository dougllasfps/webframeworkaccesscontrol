import React from 'react'
import ReactLoading from 'react-loading'
import {Dialog} from 'primereact/dialog'

export const ApplicationContext = React.createContext()
export const ApplicationContextConsumer = ApplicationContext.Consumer

export default class AppContext extends React.Component{

    state = {
        loading: false,
        drawerOpen : false
    }

    showLoad = () => {
        this.setState({loading: true, ...this.state})
    }

    hideLoad = () => {
        this.setState({loading: false, ...this.state})
    }

    handleDrawerOpen = () => {
        this.setState({ drawerOpen: true });
    };

    handleDrawerClose = () => {
        this.setState({ drawerOpen: false });
    };

    render(){        

        let ctx = {
            showLoad : this.showLoad,
            hideLoad: this.hideLoad,
            handleDrawerOpen: this.handleDrawerOpen,
            handleDrawerClose: this.handleDrawerClose,
            drawerOpen: this.state.drawerOpen
        }

        return (
            <ApplicationContext.Provider value={ctx}>
                {this.props.children}
                <Dialog header="Aguarde" visible={this.state.loading} width="350px" modal={true} onHide={(e) => {}} >
                    <ReactLoading />
                </Dialog>
            </ApplicationContext.Provider>
        )
    }
}
