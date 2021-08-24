import React, {useEffect, useRef} from 'react';
import CSS from "./style.module.scss";

const imageAnimationDurationMs = 2500;
let currentCursorColorId = 0;
const colors = [
  "white",
  "blue",
  "green",
  "yellow",
  "orange",
  "red",
  "black"
]

document.oncontextmenu = (event) => {
  event.stopPropagation();
  event.preventDefault();
}

const cursorPosition = (cursorRef) => (cursorEvent) => {
  if (cursorRef.current && cursorEvent) {
    const margin = parseInt(window.getComputedStyle(cursorRef.current).marginRight) * 2
    const width = cursorRef.current.offsetWidth + margin;
    const height = cursorRef.current.offsetHeight + margin;

    const pageY = cursorEvent.pageY - (height / 2);
    const pageX = cursorEvent.pageX - (width / 2);

    window.requestAnimationFrame(() =>
      cursorRef.current.setAttribute('style',
        `top: ${pageY}px; left: ${pageX}px; background-color: ${colors[currentCursorColorId]}`
      )
    )
  }
}

export const Cursor = () => {
  const cursorRef = useRef();

  useEffect(() => {
    const setCursorPosition = cursorPosition(cursorRef)

    document.body.onclick = (e) => {
      ++currentCursorColorId;

      if (currentCursorColorId >= colors.length) {
        currentCursorColorId = 0
      }

      setCursorPosition(e)

      if (currentCursorColorId % colors.length === 1) {
        document.getElementById('cat_run').setAttribute('style', 'opacity: 1;')
        setTimeout(() => {
          document.getElementById('cat_run').setAttribute('style', 'opacity: 0;')
        }, imageAnimationDurationMs)
      }

      if (currentCursorColorId % colors.length === 3) {
        document.getElementById('cyber_track').setAttribute('style', 'transform: translateX(-500%);')
        setTimeout(() => {
          document.getElementById('cyber_track').setAttribute('style', 'opacity: 0;')
        }, imageAnimationDurationMs)
      }

      if (currentCursorColorId % colors.length === 5) {
        document.getElementById('fly_cat').setAttribute('style', `transform: translateX(-${document.body.offsetWidth + 300}px);`)
        setTimeout(() => {
          document.getElementById('fly_cat').setAttribute('style', 'opacity: 0;')
        }, imageAnimationDurationMs)
      }

      if (colors[currentCursorColorId] === "black") {
        // Circle
        document.getElementById('circle').setAttribute('style', 'opacity: 1;')
        setTimeout(() => {
          document.getElementById('circle').setAttribute('style', 'opacity: 0;')
        }, imageAnimationDurationMs)

        // Cursor
        cursorRef.current.classList.add(CSS.triangle);
        setTimeout(() => {
          cursorRef.current.classList.remove(CSS.triangle);
          currentCursorColorId = 0;
        }, imageAnimationDurationMs)
      }
    }

    const reactionElements = document.querySelectorAll('[data-cursor-reaction]');
    reactionElements.forEach(el => {
      el.onmouseenter = () => {
        cursorRef.current.classList.add(CSS.active);
        document.getElementById('do_it').setAttribute('style', 'opacity: 1;')
      }
      el.onmouseleave = () => {
        cursorRef.current.classList.remove(CSS.active);
        document.getElementById('do_it').setAttribute('style', 'opacity: 0;')
      }
    })

    document.addEventListener('mousemove', setCursorPosition);
    return () => document.removeEventListener('mousemove', setCursorPosition);
  }, [])

  return <div className={CSS.cursor} ref={cursorRef}/>
}