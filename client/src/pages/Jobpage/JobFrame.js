import React from 'react';
import "./style.css";
import { Frame, useMotionValue, useTransform, useAnimation } from "framer";

function JobFrame() {

    const motionVal = useMotionValue(0);

    const rotateVal = useTransform(motionVal, [-200, 200], [-50, 50]);

    const opacityVal = useTransform(motionVal, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);

    const animationContrl = useAnimation();

    return(
        <div>
            <Frame 
                className="job-card"
                center
                drag="x"
                x={motionVal}
                rotate={rotateVal}
                opacity={opacityVal}
                dragConstraints = {{ left: -1000, right: 1000 }}
                onDragEnd={ (event, info) => {
                    if (Math.abs(info.point.x) <= 150) {
                        animationContrl.start({ x: 0 });
                    } else {
                        animationContrl.start({ x: info.point.x < 0 ? -200 : 200 });
                    }
                }}
            />
        </div>
    )
}

export default JobFrame;