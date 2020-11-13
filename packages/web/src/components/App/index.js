import React, {useRef} from "react";
// import {MenuMobile} from "../Menu/Mobile";
// import {MenuDesktop} from "../Menu/Desktop";
// import {IndexPage} from "../../pages/index";
import cat_run from "../../files/img/cat_run.gif";
import cyber_track from "../../files/img/cyber_track.gif";
import CSS from "./style.module.scss";

// export const App = () => {
//     return (
//         <>
//             {/*ToDo: Add Routing*/}
//             <IndexPage/>
//
//             <MenuMobile/>
//             <MenuDesktop/>
//         </>
//     )
// }

export const App = () => {
  const isLinkClicked = useRef(false);

  const fakeLink = () => {
    if (isLinkClicked.current) {
      window.open('https://t.me/it_efrem', '_blank')
    } else {
      isLinkClicked.current = true;
    }
  }

  return (
    <div className={CSS.container}>
      <div className={CSS.wrapper}>
        <h1>Eugene Efremov</h1>

        <ul className={CSS.list}>
          <li>
            <div className={CSS.mark}>🔥</div>
            <span>Senior Frontend Developer</span>
          </li>
          <li>
            <div className={CSS.mark}>⚛️</div>
            <span>ReactJS & NodeJS</span>
          </li>
          <li>
            <div className={CSS.mark}>{(new Date).getFullYear() - 2014}</div>
            <span>years of experience</span>
          </li>
        </ul>

        <div className={CSS.contacts}>
          <a data-cursor-reaction="true"
             onClick={fakeLink}>
            @it_efrem</a> — Telegram
        </div>

        <div className={CSS.cyber_track}>
          <img id="cyber_track"
               src={cyber_track}
          />
        </div>
      </div>

      <img id="cat_run"
           src={cat_run}
           className={CSS.cat_run}
           style={{opacity: '0'}}
      />
    </div>
  )
}
