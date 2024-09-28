import React from 'react'

export const Header = ({name}) => {
    return (
        <div style={{
            display:'flex', width:'100%', justifyContent:'space-between', height:'10%',
            alignItems:'center', borderBottom:'1px solid #E5EAF0'
        }}>
            <b>{name}</b>

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 20 20">
                    <g fill="grey">
                        <path d="M5.254 14.596a.5.5 0 0 1 .707-.707A5.5 5.5 0 0 0 15.35 10a.5.5 0 0 1 .999.001a6.5 6.5 0 0 1-11.096 4.596" />
                        <path d="M13.131 12.416a.5.5 0 0 1-.555-.832l3-2a.5.5 0 1 1 .555.832z" />
                        <path d="M18.266 12.723a.5.5 0 1 1-.832.554l-2-3a.5.5 0 0 1 .832-.554zm-3.912-7.518a.5.5 0 0 1-.708.707a5.5 5.5 0 0 0-9.389 3.89a.5.5 0 0 1-1-.001a6.5 6.5 0 0 1 11.097-4.596" />
                        <path d="M6.476 7.385a.5.5 0 0 1 .555.832l-3 2a.5.5 0 1 1-.555-.832z" />
                        <path d="M1.341 7.078a.5.5 0 1 1 .832-.554l2 3a.5.5 0 0 1-.832.554z" />
                    </g>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
                    <path fill="none" stroke="grey" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 5.92A.96.96 0 1 0 12 4a.96.96 0 0 0 0 1.92m0 7.04a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92M12 20a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92" />
                </svg>
            </div>
        </div>
    ) 
}
