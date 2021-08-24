import React from "react";
import * as Style from "./style.module.scss";
import cx from "classnames";

export const Button = ({
                           children,
                           className,
                           ...props
                       }) => {
    return (
        <div className={cx(Style.button, className)}
             {...props}>
            {children}
        </div>
    )
}