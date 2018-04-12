import React from 'react'
import { Component } from 'react'
import Table from '../components/Table'
import { connect } from 'react-redux'
import { getUsers } from '../actions'
class TableContainer extends Component {
    constructor(props){
        super(props)
        // this.state = {
        //     list: []
        // }
        // console.log('Start Constructor');
        // setTimeout(() => {
        //     this.setState({
        //         list: this.getlist()
        //     });
        // }, 2000)
        // console.log('Finish Constructor');
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(getUsers())
    }

    getlist (){
        return [
            {
                id: 1,
                title: 'Title One'
            },
            {
                id: 2,
                title: 'Title Two'
            }
        ]
    }

    render (){
        return (
            <div>
                <Table list={this.props.users} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users.items
    }
}

export default connect(mapStateToProps)(TableContainer)