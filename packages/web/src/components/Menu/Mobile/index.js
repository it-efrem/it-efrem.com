import React from "react";
import * as Style from "./style.module.scss";
import {useEventOutside} from "./useOutsideEvent";
import {Icon} from "../../Icon";
import * as Color from "../../../styles/Colors.module.scss";
import * as Size from "../../../styles/sizes.module.scss";
import {Button} from "../../Button";

import bars_solid from "../../Icon/icons/bars-solid.svg";
import times_solid from "../../Icon/icons/times-solid.svg";
import telegram from "../../Icon/icons/telegram-plane-brands.svg";
import email from "../../Icon/icons/at-solid.svg";
import pdf from "../../Icon/icons/file-pdf-regular.svg";

export const MenuMobile = () => {
    const [ref, isOpen, changeVisible] = useEventOutside(false);

    const changeMenuVisible = () => {
        const newValue = !isOpen

        if (!newValue) {
            setTimeout(() => changeVisible(newValue), 200)
        } else {
            changeVisible(newValue);
        }
    }

    const openLink = (url) => () => {
        window.open(url, '_blank');
    }

    // ToDo: Language change (AppStore)
    const pdfDownLoad = () => {
        // ToDo: pdfDownLoad
    }

    return (
        <div className={Style.menu}>
            {
                isOpen &&
                <div className={Style.menuFloat}
                     ref={ref}>
                    <div className={Style.buttons}>
                        <Button className={Size.small}>
                            <Icon text={"EN"}
                                  className={Color.secondary}/>
                        </Button>

                        <Button className={Size.small}
                                onClick={openLink('https://t.me/it_efrem')}>
                            <Icon svg={telegram}
                                  className={Color.secondary_bg}/>
                        </Button>

                        <Button className={Size.small}
                                onClick={openLink('mailto:web@it-efrem.com')}>
                            <Icon svg={email}
                                  className={Color.secondary_bg}/>
                        </Button>

                        <Button className={Size.small}>
                            <Icon svg={pdf}
                                  className={Color.secondary_bg}/>
                        </Button>
                    </div>
                </div>
            }

            <Button onClick={changeMenuVisible}
                    className={Size.normal}>
                {
                    isOpen && <Icon svg={times_solid}
                                    className={Color.secondary_bg}/>
                }
                {
                    !isOpen && <Icon svg={bars_solid}
                                     className={Color.secondary_bg}/>
                }
            </Button>
        </div>
    )
}