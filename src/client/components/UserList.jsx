import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/userActions";

class UserList extends Component {

    componentDidMount(){
        this.props.fetchUser();
    }

    renderUserList() {
        return this.props.users.map(user => <li key={`${user.id}-${user.name}`}>{user.name}</li>)
    }

    render(){
        return (<div>
            This is a list of user in the app 
            <ul>
                {this.renderUserList()}
            </ul>
        </div>)
    }
}

function mapStateToProps(state) {
    
    return {
        users: state.users
    }   
}

export default connect(mapStateToProps, {fetchUser})(UserList);
