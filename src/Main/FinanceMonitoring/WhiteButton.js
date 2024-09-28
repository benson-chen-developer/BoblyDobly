import React from 'react'
import { Icons } from '../Icons/Icons'

export const WhiteButton = ({text, back, textColor}) => {
    return (
        <button style={{
            borderRadius: 3, background:back, border: '1px solid #41505F',
            marginLeft: 10
        }}>
            <div style={{paddingLeft: 15, paddingRight:15, display:'flex', alignItems:'center', justifyContent:'space-around'}}>
                <Icons icon={text} width={17} height={17}/>

                <p style={{fontSize:'15px', color:textColor, marginLeft:5}}>{text}</p>
            </div>
        </button>
    )
}
