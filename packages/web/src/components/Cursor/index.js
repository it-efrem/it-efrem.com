import React, {useEffect, useRef} from 'react';
import CSS from "./style.module.scss";

const imageAnimationDurationMs = 2500;
let currentCursorColorId = 0;
const colors = [
  "white",
  "red",
  "blue",
  "yellow",
  "green"
]

document.oncontextmenu = (event)  => {
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
    document.body.onclick = () => {
      ++currentCursorColorId;

      if (currentCursorColorId >= colors.length) {
        currentCursorColorId = 0
      }

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
    }

    const reactionElements = document.querySelectorAll('[data-cursor-reaction]');
    reactionElements.forEach(el => {
      el.onmouseenter = () => {
        cursorRef.current.classList.add(CSS.active);
      }
      el.onmouseleave = () => {
        cursorRef.current.classList.remove(CSS.active);
      }
    })

    const setCursorPosition = cursorPosition(cursorRef)

    document.addEventListener('mousemove', setCursorPosition);
    return () => document.removeEventListener('mousemove', setCursorPosition);
  }, [])

  return <div className={CSS.cursor} ref={cursorRef}/>
}