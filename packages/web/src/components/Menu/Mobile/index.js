import React from "react";
import * as Style from "./style.module.scss";
import {useEventOutside} from "./useOutsideEvent";

export const MenuMobile = () => {
    const [ref, isOpen, changeVisible] = useEventOutside(false);

    const handleClick = () => {
        const newValue = !isOpen

        if (!newValue) {
            setTimeout(() => changeVisible(newValue), 200)
        } else {
            setIsOpen(newValue);
        }
    }

    return (
        <div className={Style.menu}>
            {
                isOpen &&
                <div className={Style.menuFloat}
                     ref={ref}>
                    <ul>
                        <li>adasdsad</li>
                        <li>adasdsad</li>
                        <li>adasdsad</li>
                        <li>adasdsad</li>
                        <li>adasdsad</li>
                    </ul>
                </div>
            }

            <div className={Style.button}
                 onClick={handleClick}/>
        </div>
    )
}