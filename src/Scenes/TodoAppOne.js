import React from "react";
import "../styleAssets/TodoAppOne.css";
import Icon from "@mdi/react";
import { mdiTrashCan, mdiPencil } from "@mdi/js";

class TodoAppOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            userArray: [],
            isEditBoxVisible: false
        }
    }
    handleClick = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    addUser = () => {
        this.setState({
            userArray: [...this.state.userArray, this.state.user],   // using spread operator  -- destructuring
            user: ""
        })
    }
    deleteUser = (key) => {
        // var allUsers = [...this.state.userArray]
        // allUsers.splice(key, 1);
        this.setState({
            userArray: this.state.userArray.filter((data, index) => index !== key)
        })
    }
    editUser = (key, name) => {
        this.setState({
            editUserName: name,
            editKey: key,
        })
    }
    editSubmitUser = () => {
        var allUsers = [...this.state.userArray]
        allUsers.splice(this.state.editKey, 1, this.state.editUserName);
        this.setState({
            userArray: allUsers,
            editKey: ""
        })
    }
    render() {
        const { user } = this.state;
        return (
            <div className="todo-container text-center w-50 mx-auto">
                <div className="outer-box d-flex flex-column align-items-center justify-content-center py-3">
                    <div className="pb-2" style={{ fontWeight: 600, color: '#f7f7f7' }}>You can add users here!</div>
                    <div className="input-section w-75 mx-auto">
                        <input type="text" className="form-control my-input" value={user} name="user" placeholder="Enter User" onChange={this.handleClick} />
                        <button className="addBtn mt-3" onClick={this.addUser}>Add</button>
                    </div>
                    {this.state.userArray.length > 0 ?
                        <ul className="w-75 mx-auto text-left my-3 pt-2 pb-1 px-4">
                            {this.state.userArray.map((item, key) => {
                                return (
                                    <li key={key}>
                                        {this.state.editKey !== "" && this.state.editKey === key ?
                                            <span className="d-flex justify-content-between align-items-center">
                                                <span><input type="text" className="form-control my-input" style={{ height: 24 }} value={this.state.editUserName} name="editUserName" onChange={this.handleClick} /></span>
                                                <span>
                                                    <button className="editBtn" style={{ height: 24 }} onClick={this.editSubmitUser}>Change</button>
                                                </span>
                                            </span>
                                            :
                                            <span className="d-flex justify-content-between">
                                                <span>{item}</span>
                                                <span>
                                                    <Icon path={mdiPencil} size={0.8} style={{ cursor: 'pointer' }} onClick={() => { this.editUser(key, item) }} />
                                                    <Icon path={mdiTrashCan} size={0.8} style={{ cursor: 'pointer' }} onClick={() => { this.deleteUser(key) }} />
                                                </span>
                                            </span>
                                        }
                                    </li>
                                )
                            })}
                        </ul>
                        : null}
                </div>
            </div>)
    }
}

export default TodoAppOne;