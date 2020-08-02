import React from "react";
import "../styleAssets/Content.css";
import Icon from "@mdi/react";
import { mdiPlusCircleOutline } from "@mdi/js";
import TodoAppOne from "./TodoAppOne";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      isAddUserBtnClicked: false,
      isNameVisible: false,
      dataArray: [
        {
          id: "101",
          name: "Joseph Soza",
          age: 23,
        },
        {
          id: "102",
          name: "Arjun Santosh",
          age: 28,
        },
        {
          id: "103",
          name: "Arun Kumar",
          age: 22,
        },
      ],
    };
  }
  addUserBtnClicked = () => {
    this.setState({ isAddUserBtnClicked: true });
  };
  handleInputChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    this.state[name] = value;
    this.setState({
      dummy: "dummy",
    });
  };
  addUser = () => {
    this.setState({
      isNameVisible: true,
    });
  };
  render() {
    const contentheight = window.innerHeight - 250 + "px";
    return (
      <div className="content px-5 py-4" style={{ height: contentheight }}>
        <div className="welcome-text">Welcome Joseph,</div>
        <div className="card-container w-75 mx-auto row pt-5 d-none">
          <div className="col-md-4">
            <div className="card d-flex align-items-center justify-content-center">
              {this.state.isAddUserBtnClicked ? (
                <div className="text-center">
                  <div className="pb-3">
                    <input
                      type="text" placeholder="First Name" name="firstName"
                      onChange={(event) => { this.handleInputChange(event); }}
                    />
                  </div>
                  <div className="pb-3">
                    <input
                      type="text" placeholder="Last Name" name="lastName"
                      onChange={(event) => { this.handleInputChange(event); }}
                    />
                  </div>
                  <div>
                    <button className="add-btn" onClick={() => { this.addUser(); }} >
                      Add
                    </button>
                  </div>
                </div>
              ) : (
                  <div className="d-flex flex-column">
                    <div className="add-user-text">Add Users</div>
                    <div className="text-center" style={{ cursor: "pointer" }}>
                      <Icon
                        path={mdiPlusCircleOutline}
                        size={2}
                        color="#ffffff"
                        onClick={() => {
                          this.addUserBtnClicked();
                        }}
                      />
                    </div>
                  </div>
                )}
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3">
              {this.state.isNameVisible ? (
                <div className="name-text">
                  {this.state.firstName} {this.state.lastName}
                </div>
              ) : null}
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3">
              {this.state.dataArray.map((item, key) => {
                return (
                  <div key={key} className="name-text">
                    {item.name} ({item.age})
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <TodoAppOne />
      </div>
    );
  }
}
