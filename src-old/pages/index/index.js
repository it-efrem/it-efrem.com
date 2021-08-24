import React from "react";
import {Section} from "../../components/Section";
import cx from "classnames";
import * as Style from "./style.module.scss";
import * as Layout from "../../styles/layout.module.scss";

export const IndexPage = () => {
    return (
        <div>
            <div className={cx(Style.aboutMe, Layout.container)}>
                <p>Hi, my name is Eugene Efremov</p>
                <p>I develop JavaScript SaaS applications more 6 years</p>
                <p>Участвую в OpenSource и преподаю</p>
            </div>

            <Section label="What tasks do I solve"
                     classNames={Layout.container}>
                Content
            </Section>

            <Section label="My projects"
                     classNames={Layout.container}>
                Content
            </Section>

            <Section label="My articles"
                     classNames={Layout.container}>
                Content
            </Section>

            <Section label="My teaching"
                     classNames={Layout.container}>
                Content
            </Section>

            <Section label="My open source"
                     classNames={Layout.container}>
                Content
            </Section>

            <Section label="My methodology"
                     classNames={Layout.container}>
                Content
            </Section>

            <Section label="My story book"
                     classNames={Layout.container}>
                Content
            </Section>
        </div>
    )
};