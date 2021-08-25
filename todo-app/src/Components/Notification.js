import "../syle.css"
import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";
import {Button} from "react-bootstrap";
import success_logo from "../Images/check.png"
import loading_logo from "../Images/circles-loader.png"
import failed_logo from "../Images/cancel.png"

function Notification() {

    const requestState = useSelector(state => state.status)

    return (
        <div className="TodoForm">
            {
                requestState === "loading" &&
                <div className="notification-container loading-request">
                    Request Is Loading &nbsp;&nbsp;
                    <img src={loading_logo} width="50px" />
                </div>
            }

            {
                requestState === "success" &&
                <div className="notification-container request-successed">
                    Request Is Success &nbsp;&nbsp;
                    <img src={success_logo} width="50px" />
                </div>
            }

            {
                requestState === "failed" &&
                <div className="notification-container request-failed">
                    Request Is Failed &nbsp;&nbsp;
                    <img src={failed_logo} width="50px" />
                </div>
            }
        </div>
    );
}

export default Notification;
