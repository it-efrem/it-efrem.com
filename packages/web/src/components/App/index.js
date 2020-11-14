import React from "react";
// import {MenuMobile} from "../Menu/Mobile";
// import {MenuDesktop} from "../Menu/Desktop";
// import {IndexPage} from "../../pages/index";
import cat_run from "../../files/img/cat_run.gif";
import cyber_track from "../../files/img/cyber_track.gif";
import do_it from "../../files/img/do_it.gif";
import fly_cat from "../../files/img/fly_cat.gif";
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

        <ul className={CSS.contacts}>
          <li>
            <a data-cursor-reaction="true"
               href='https://t.me/it_efrem'
               target='_blank'>Telegram</a>
          </li>
          <li>
            <a data-cursor-reaction="true"
               href='https://github.com/it-efrem'
               target='_blank'>GitHub</a>
          </li>
        </ul>

        <div className={CSS.easterEggs}
             data-cursor-reaction="true">
          <span title="Easter Egg...">🥚</span>
        </div>

        <div className={CSS.cyber_track}>
          <img id="cyber_track"
               src={cyber_track}
          />
        </div>
      </div>

      <div className={CSS.do_it}
           style={{opacity: '0'}}
           id="do_it">
        <img src={do_it}/>
      </div>

      <div className={CSS.circle}
           id="circle"
           style={{opacity: '0'}}/>

      <img id="cat_run"
           src={cat_run}
           className={CSS.cat_run}
           style={{opacity: '0'}}
      />

      <div className={CSS.fly_cat}>
        <img id="fly_cat"
             src={fly_cat}
        />
      </div>
    </div>
  )
}
