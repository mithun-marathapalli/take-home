import React from "react"
import SideBar from "./components/SideBar"
import TopBar from "./components/TopBar"
import "./App.css"
import "./App1.css"
import MainContent from "./components/MainContent"

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {}
    render() {
        return (
            <div className="core-layout index">
                <SideBar />
                <div className="content-section">
                    <TopBar />
                    <MainContent />
                </div>
            </div>
        )
    }
}

export default App

const Index = () => {
    return (
        <div className="index">
            <div className="div">
                <div className="frame">
                    <div className="frame-2">
                        <div className="frame-3">
                            <img
                                className="img"
                                alt="Icon element"
                                src="https://cdn.animaapp.com/projects/6561965126b35bab7fddd829/releases/656198ae7109a597e416ff53/img/icon-element-1@2x.png"
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
                <p className="tasks-summary">
                    <span className="text-wrapper-8">Tasks summary</span>
                </p>
                <div className="div-wrapper">
                    <div className="frame-12">
                        <img
                            className="img-2"
                            alt="Icon calendar"
                            src="https://cdn.animaapp.com/projects/6561965126b35bab7fddd829/releases/656198ae7109a597e416ff53/img/icon-calendar-1@2x.png"
                        />
                        <p className="p">
                            <span className="span">19/07/2023</span>
                        </p>
                    </div>
                </div>
                <div className="frame-13">
                    <div className="frame-14">
                        <img
                            className="img-2"
                            alt="Ellipse"
                            src="https://cdn.animaapp.com/projects/6561965126b35bab7fddd829/releases/656198ae7109a597e416ff53/img/ellipse-589-1@2x.png"
                        />
                        <p className="p">
                            <span className="span">Customer 1</span>
                        </p>
                        <img
                            className="icon-arrow-down-2"
                            alt="Icon arrow down"
                            src="https://cdn.animaapp.com/projects/6561965126b35bab7fddd829/releases/656198ae7109a597e416ff53/img/icon-arrow-down-2@2x.png"
                        />
                    </div>
                </div>
                <div className="frame-15">
                    <div className="frame-16">
                        <img
                            className="img-2"
                            alt="Solar filter bold"
                            src="https://cdn.animaapp.com/projects/6561965126b35bab7fddd829/releases/656198ae7109a597e416ff53/img/solar-filter-bold-1@2x.png"
                        />
                        <p className="p">
                            <span className="span">Filter by</span>
                        </p>
                    </div>
                </div>
                <div className="frame-17">
                    <img
                        className="line"
                        alt="Line"
                        src="https://cdn.animaapp.com/projects/6561965126b35bab7fddd829/releases/656198ae7109a597e416ff53/img/line-7-1@2x.png"
                    />
                    <img
                        className="line-2"
                        alt="Line"
                        src="https://cdn.animaapp.com/projects/6561965126b35bab7fddd829/releases/656198ae7109a597e416ff53/img/line-8-1@2x.png"
                    />
                    <div className="frame-18">
                        <div className="frame-19">
                            <p className="current">
                                <span className="text-wrapper-9">Current</span>
                            </p>
                            <div className="element-wrapper">
                                <p className="element">
                                    <span className="text-wrapper-10">4</span>
                                </p>
                            </div>
                        </div>
                        <div className="frame-20">
                            <p className="completed">
                                <span className="span">Completed</span>
                            </p>
                            <div className="frame-21">
                                <p className="element">
                                    <span className="text-wrapper-10">10</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <img
                        className="frame-22"
                        alt="Frame"
                        src="https://cdn.animaapp.com/projects/6561965126b35bab7fddd829/releases/656198ae7109a597e416ff53/img/frame-707-1@2x.png"
                    />
                </div>
                <div className="frame-23">
                    <div className="frame-24">
                        <div className="icon-profile-wrapper">
                            <img
                                className="icon-profile"
                                alt="Icon profile"
                                src="https://cdn.animaapp.com/projects/6561965126b35bab7fddd829/releases/656198ae7109a597e416ff53/img/icon-profile-2user-3@2x.png"
                            />
                        </div>
                        <div className="frame-25">
                            <div className="email-chris-to-wrapper">
                                <p className="email-chris-to">
                                    <span className="text-wrapper-2">
                                        Email Chris to introduce us...
                                    </span>
                                </p>
                            </div>
                            <div className="frame-26">
                                <img
                                    className="icon-calendar"
                                    alt="Icon calendar"
                                    src="https://cdn.animaapp.com/projects/6561965126b35bab7fddd829/releases/656198ae7109a597e416ff53/img/icon-calendar-4@2x.png"
                                />
                                <p className="july">
                                    <span className="text-wrapper-11">
                                        July 19, 2021
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="frame-27">
                            <img
                                className="frame-28"
                                alt="Frame"
                                src="https://cdn.animaapp.com/projects/6561965126b35bab7fddd829/releases/656198ae7109a597e416ff53/img/frame-773-1@2x.png"
                            />
                            <p className="high">
                                <span className="text-wrapper-11">High</span>
                            </p>
                        </div>
                    </div>
                    <p className="span-wrapper-2">
                        <span className="text-wrapper-12">
                            Mention the purpose of the email - seeking an
                            introduction to Dan and Ravi.
                            <br />
                            Briefly explain why you believe they could be
                            valuable contacts.
                            <br />
                            Request Chris&#39;s assistance in making the
                            introduction.
                            <br />
                            Offer to provide more information if needed.
                        </span>
                    </p>
                </div>
                <img
                    className="frame-29"
                    alt="Frame"
                    src="https://cdn.animaapp.com/projects/6561965126b35bab7fddd829/releases/656198ae7109a597e416ff53/img/frame-778-1@2x.png"
                />
                <div className="frame-30">
                    <div className="frame-24">
                        <div className="icon-profile-wrapper">
                            <img
                                className="icon-profile"
                                alt="Icon profile"
                                src="https://cdn.animaapp.com/projects/6561965126b35bab7fddd829/releases/656198ae7109a597e416ff53/img/icon-profile-2user-3@2x.png"
                            />
                        </div>
                        <div className="frame-31">
                            <div className="setup-trainin-for-wrapper">
                                <p className="span-wrapper-3">
                                    <span className="text-wrapper-9">
                                        Setup trainin for Monica
                                    </span>
                                </p>
                            </div>
                            <div className="frame-26">
                                <img
                                    className="icon-calendar"
                                    alt="Icon calendar"
                                    src="https://cdn.animaapp.com/projects/6561965126b35bab7fddd829/releases/656198ae7109a597e416ff53/img/icon-calendar-4@2x.png"
                                />
                                <p className="july">
                                    <span className="text-wrapper-11">
                                        July 19, 2021
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="frame-32">
                            <img
                                className="frame-33"
                                alt="Frame"
                                src="https://cdn.animaapp.com/projects/6561965126b35bab7fddd829/releases/656198ae7109a597e416ff53/img/frame-773-2@2x.png"
                            />
                            <p className="span-wrapper-4">
                                <span className="text-wrapper-11">Low</span>
                            </p>
                        </div>
                    </div>
                    <p className="span-wrapper-2">
                        <span className="text-wrapper-12">
                            Identify the specific training needs for Monica.
                            <br />
                            Contact the appropriate department or trainer to
                            organize the training.
                            <br />
                            Determine the training schedule and location.
                            <br />
                            Inform Monica about the upcoming training and its
                            importance.
                        </span>
                    </p>
                </div>
                <div className="frame-34">
                    <div className="frame-24">
                        <div className="icon-profile-wrapper">
                            <img
                                className="icon-profile"
                                alt="Icon profile"
                                src="https://cdn.animaapp.com/projects/6561965126b35bab7fddd829/releases/656198ae7109a597e416ff53/img/icon-profile-2user-3@2x.png"
                            />
                        </div>
                        <div className="frame-35">
                            <div className="setup-a-call-with-wrapper">
                                <p className="span-wrapper-3">
                                    <span className="text-wrapper-9">
                                        Setup a call with..
                                    </span>
                                </p>
                            </div>
                            <div className="frame-26">
                                <img
                                    className="icon-calendar"
                                    alt="Icon calendar"
                                    src="https://cdn.animaapp.com/projects/6561965126b35bab7fddd829/releases/656198ae7109a597e416ff53/img/icon-calendar-4@2x.png"
                                />
                                <p className="july">
                                    <span className="text-wrapper-11">
                                        July 19, 2021
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="frame-36">
                            <img
                                className="frame-37"
                                alt="Frame"
                                src="https://cdn.animaapp.com/projects/6561965126b35bab7fddd829/releases/656198ae7109a597e416ff53/img/frame-773-3@2x.png"
                            />
                            <p className="span-wrapper-4">
                                <span className="text-wrapper-11">Medium</span>
                            </p>
                        </div>
                    </div>
                    <p className="span-wrapper-2">
                        <span className="text-wrapper-12">
                            Determine the objective of the call (e.g., project
                            collaboration, expertise assessment, etc.).
                            <br />
                            Suggest potential dates and times for the call.
                            <br />
                            Include relevant members from the product management
                            team.
                            <br />
                            Share necessary information about the call&#39;s
                            agenda and topics to be discussed.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

// export default Index
