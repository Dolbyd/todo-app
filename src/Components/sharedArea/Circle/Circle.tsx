import { useState } from "react";
import "./Circle.css";

interface CircleProps {
    num: number;
    // children: any;
}
function Circle(props: CircleProps): JSX.Element {


    const [num, setNum] = useState(props.num);


    return (
        <div className="Circle">
            {props.num}
        </div>
    );
}

export default Circle;
