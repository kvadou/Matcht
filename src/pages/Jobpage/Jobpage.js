import React from 'react';
import "./style.css";
import { Frame, useMotionValue, useTransform, useAnimation } from "framer";

function Jobpage() {

    const motionVal = useMotionValue(0);

    const rotateVal = useTransform(motionVal, [-200, 200], [-50, 50]);

    return(
        <div className="job-card">

        </div>
    )
}

export default Jobpage;