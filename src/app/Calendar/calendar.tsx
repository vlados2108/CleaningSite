import React, { Children, Dispatch, ReactNode, SetStateAction, useState } from 'react'
import "../../styles/css/style.css";
interface ActiveProps{
    active:boolean,
    setActive: Dispatch<SetStateAction<boolean>>
    children:ReactNode
}
export default function Calendar({active, setActive, children}:ActiveProps) {
   
  return (
    <div className={active ? "modal active" : "modal"} onClick={()=>{setActive(false)}}>
        <div className={active ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

