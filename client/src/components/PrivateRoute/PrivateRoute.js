import React from "react";
import {
    Route,
    Redirect
} from "react-router-dom";

export default function PrivateRoute({
    children,
    path,
    login
}) {
    return ( <
        Route path = {
            path
        }
        render = {
            () => {
                return login === true ? children : < Redirect to = "/login" / > ;
            }
        }
        />
    );
}
