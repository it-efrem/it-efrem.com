import React from "react";
import * as Style from "./style.module.scss";
import cx from "classnames";

export const Icon = ({svg, text, className}) => {
    if (svg) {
        return (
            <div className={cx(Style.icon, className)}
                 style={{
                     'mask': `url(${svg}) no-repeat center / contain`,
                     '-webkit-mask': `url(${svg}) no-repeat center / contain`,
                 }}/>
        )
    } else {
        return (
            <div className={cx(Style.icon_text, className)}>
                {text}
            </div>
        )
    }
}