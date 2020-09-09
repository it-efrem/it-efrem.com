import React from "react";
import * as Style from "./style.module.scss";
import cx from "classnames";

export const Section = ({
                            label,
                            classNames,
                            children
                        }) => {
    return (
        <>
            <h2 className={Style.header}>{label}</h2>
            <section className={cx(Style.section, classNames)}>
                {children}
            </section>
        </>
    )
};