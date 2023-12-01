import { useState } from "react";
import navbar_personal from "../../styles/components/personal/navbar_personal.module.scss";

function Dropdown({ clickState }) { //clickState is a bool
    let dropdownlist = ["project 1", "project 2"];
    if (clickState==false) {
        dropdownlist=[];
    }
    return (
        <div className={navbar_personal.dropdownContainer}>
            {dropdownlist.map((arr) => {
                return <button>{arr}</button>;
            })}
        </div>
    )
}

export default function NavBar_Personal() {
    const [clickState, setClickState] = useState(false);

    const onClick = () => {
        setClickState(!clickState)
    }

    return (
        <div className={navbar_personal.Container}>
            <div className={navbar_personal.buttonsContainer}>
                <button>Home</button>
                <div className={navbar_personal.projectsContainer}>
                    <button onClick={onClick}>Projects</button>
                    <Dropdown clickState={clickState} />
                    </div>
                </div>
            </div>
    );
}