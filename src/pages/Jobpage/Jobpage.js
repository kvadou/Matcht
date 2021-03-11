import React from 'react';
import "./style.css";
import { Frame, useMotionValue, useTransform, useAnimation } from "framer";

function Jobpage() {

    const motionVal = useMotionValue(0);

    const rotateVal = useTransform(motionVal, [-200, 200], [-50, 50]);

    const opacityVal = useTransform(motionVal, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);

    return(
        <div className="job-card">

        </div>
    )
}

export default Jobpage;