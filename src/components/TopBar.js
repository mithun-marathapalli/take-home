import React from "react"

class TopBar extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {}
    render() {
        return (
            <div className="top-bar">
                <div className="overlap">
                    <div className="frame-8">
                        <div className="icon-notification">
                            <div className="overlap-group">
                                <img
                                    className="vector"
                                    alt="Vector"
                                    src="https://cdn.animaapp.com/projects/6561965126b35bab7fddd829/releases/656198ae7109a597e416ff53/img/vector-1@2x.png"
                                />
                                <img
                                    className="vector-2"
                                    alt="Vector"
                                    src="https://cdn.animaapp.com/projects/6561965126b35bab7fddd829/releases/656198ae7109a597e416ff53/img/vector-2@2x.png"
                                />
                                <img
                                    className="img-2"
                                    alt="Vector"
                                    src="https://cdn.animaapp.com/projects/6561965126b35bab7fddd829/releases/656198ae7109a597e416ff53/img/vector-3@2x.png"
                                />
                                <div className="ellipse" />
                            </div>
                        </div>
                        <img
                            className="icon-message-text"
                            alt="Icon message text"
                            src="https://cdn.animaapp.com/projects/6561965126b35bab7fddd829/releases/656198ae7109a597e416ff53/img/icon-message-text-1@2x.png"
                        />
                        <div className="frame-9">
                            <img
                                className="ellipse-2"
                                alt="Ellipse"
                                src="https://cdn.animaapp.com/projects/6561965126b35bab7fddd829/releases/656198ae7109a597e416ff53/img/ellipse-580-1@2x.png"
                            />
                            <div className="frame-10">
                                <p className="john-doe">
                                    <span className="text-wrapper-6">
                                        John Doe
                                    </span>
                                </p>
                                <p className="administrator">
                                    <span className="text-wrapper-7">
                                        Administrator
                                    </span>
                                </p>
                            </div>
                            <img
                                className="icon-arrow-down"
                                alt="Icon arrow down"
                                src="https://cdn.animaapp.com/projects/6561965126b35bab7fddd829/releases/656198ae7109a597e416ff53/img/icon-arrow-down-2@2x.png"
                            />
                        </div>
                    </div>
                    <div className="frame-wrapper">
                        <div className="frame-11">
                            <img
                                className="img-2"
                                alt="Icon search normal"
                                src="https://cdn.animaapp.com/projects/6561965126b35bab7fddd829/releases/656198ae7109a597e416ff53/img/icon-search-normal-1@2x.png"
                            />
                            <p className="search-tasks">
                                <span className="span">Search tasks...</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopBar
