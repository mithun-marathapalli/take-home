import React from "react"
import dashboardIcon from "../static/icons/dashboard-icon.svg"

class SideBar extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {}
    render() {
        return (
            <div className="side-bar">
                <div className="frame">
                    <div className="frame-2">
                        <div className="frame-3">
                            <img
                                className="img"
                                alt="Icon element"
                                src={dashboardIcon}
                            />
                            <p className="dashboard">
                                <span className="text-wrapper">Dashboard</span>
                            </p>
                        </div>
                        <div className="frame-4">
                            <img
                                className="img"
                                alt="Icon profile"
                                src="https://cdn.animaapp.com/projects/6561965126b35bab7fddd829/releases/656198ae7109a597e416ff53/img/icon-profile-2user-1@2x.png"
                            />
                            <p className="span-wrapper">
                                <span className="span">Customers</span>
                            </p>
                        </div>
                        <div className="frame-5">
                            <img
                                className="img"
                                alt="Icon calendar"
                                src="https://cdn.animaapp.com/projects/6561965126b35bab7fddd829/releases/656198ae7109a597e416ff53/img/icon-calendar-1@2x.png"
                            />
                            <p className="span-wrapper">
                                <span className="span">Integration</span>
                            </p>
                        </div>
                        <div className="frame-6">
                            <img
                                className="iconoir-task-list"
                                alt="Iconoir task list"
                                src="https://cdn.animaapp.com/projects/6561965126b35bab7fddd829/releases/656198ae7109a597e416ff53/img/iconoir-task-list-1@2x.png"
                            />
                            <p className="tasks">
                                <span className="text-wrapper-2">Tasks</span>
                            </p>
                        </div>
                    </div>
                    <div className="frame-7">
                        <img
                            className="fluent-photo-filter"
                            alt="Fluent photo filter"
                            src="https://cdn.animaapp.com/projects/6561965126b35bab7fddd829/releases/656198ae7109a597e416ff53/img/fluent-photo-filter-20-filled-1@2x.png"
                        />
                        <p className="AI-COPILOT">
                            <span className="text-wrapper-3">AI</span>
                            <span className="text-wrapper-4">&nbsp;</span>
                            <span className="text-wrapper-5">COPILOT</span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideBar
