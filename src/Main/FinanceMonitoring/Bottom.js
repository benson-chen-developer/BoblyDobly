import React from 'react'
import { Icons } from '../Icons/Icons'

export const Bottom = () => {
    const circles = [
        {
            text: '4.7B',
            littleText: 'Total Income',
            background: '#F2F5F9'
        },
        {
            text: '60M',
            littleText: 'Total Expenses',
            background: '#F2F5F9'
        },
        {
            text: '2.1B',
            littleText: 'Net Profit',
            background: '#CCD2DA'
        },
        {
            text: '18.2%',
            littleText: 'Quick Ratio',
            background: '#F2F5F9'
        },
        {
            text: '6.8%',
            littleText: 'Current Ratio',
            background: '#F2F5F9'
        }
    ]

    const tags = [
        {
            text: 'Accounts Recievable',
            littleText: 'The proceeds or payment which the company will receive from its customers.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
                <path fill="grey" d="M21 18v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1h-9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2m0-2h10V8H12m4 5.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5" />
            </svg>
        },
        {
            text: 'Accounts Payable',
            littleText: 'Money owed by a business to its suppliers shown as a liability.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
                <path fill="grey" d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m-3.5-8v2h2.5v2h2v-2h1a2.5 2.5 0 1 0 0-5h-4a.5.5 0 1 1 0-1h5.5v-2h-2.5v-2h-2v2h-1a2.5 2.5 0 1 0 0 5h4a.5.5 0 0 1 0 1z" />
            </svg>
        },
        {
            text: 'Quick Ratio',
            littleText: 'Measures the ability of a company to use its near cash or quick assets.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
                <path fill="grey" d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-5-7h9v2h-4v3zm5-4v-3l5 5h-9v-2z" />
            </svg>
        },
        {
            text: 'Current Ratio',
            littleText: 'Measures whether a firm has enough resources to meet its short-term obligations.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
                <g fill="none">
                    <path d="M0 0h24v24H0z" />
                    <path fill="grey" d="m3.713 11.163l2.678 1.804c1.006.678.334 2.247-.85 1.987l-1.064-.234a8.002 8.002 0 0 0 14.804.605a1 1 0 0 1 1.82.828c-1.987 4.37-6.896 6.793-11.687 5.509A10 10 0 0 1 2 12.08c-.007-.903.996-1.402 1.713-.918M12 6a1 1 0 0 1 .993.883L13 7v1h2a1 1 0 0 1 .117 1.993L15 10h-5a.5.5 0 0 0-.09.992L10 11h4a2.5 2.5 0 0 1 .164 4.995L14 16h-1v1a1 1 0 0 1-1.993.117L11 17v-1H9a1 1 0 0 1-.117-1.993L9 14h5a.5.5 0 0 0 .09-.992L14 13h-4a2.5 2.5 0 0 1-.164-4.995L10 8h1V7a1 1 0 0 1 1-1m2.59-3.657a10 10 0 0 1 7.414 9.581c.007.903-.995 1.402-1.712.918l-2.678-1.804c-1.007-.678-.335-2.247.85-1.987l1.063.234A8.002 8.002 0 0 0 4.723 8.68a1 1 0 1 1-1.82-.828C4.89 3.482 9.8 1.06 14.59 2.343" />
                </g>
            </svg>
        }
    ]
    return (
        <div style={{
            width:'100%', height:'100%', background:'#fff', borderRadius:10, boxShadow:'0px 4px 10px rgba(0, 0, 0, 0.1)',
            display:'flex', justifyContent:'center', alignItems:'center'
        }}>
            <div style={{width:'95%', height:'95%'}}>

                <div style={{
                    width:'100%', display:'flex', height:'50%', justifyContent:'space-evenly', alignItems:'center'
                }}>
                    {circles.map((circle, index) => 
                        <Circle key={index} circle={circle}/>
                    )}
                </div>

                <div style={{
                    width:'100%', display:'flex', height:'50%', justifyContent:'space-evenly', alignItems:'center'
                }}>
                    {tags.map((tag, index) => 
                        <Tag key={index} tag={tag}/>
                    )}
                </div>
            </div>
        </div>
    )
}

const Circle = ({circle}) => {
    return (
        <div style={{
            width:'150px', height:'150px', background: circle.background, display:'flex', justifyContent:'center', borderRadius: 1000,
            alignItems:'center', flexDirection:'column'
        }}>
            <b style={{fontSize:'29px'}}>{circle.text}</b>
            <p style={{fontSize:'15px'}}>{circle.littleText}</p>
        </div>
    )
}

const Tag = ({tag}) => {
    return (
        <div style={{
            display:'flex', width: '22%', height: '40%',
        }}>
            <div>
                {tag.icon}
            </div>
            <div style={{marginLeft:'15px'}}>
                <b style={{fontSize:'16px'}}>{tag.text}</b>
                <p style={{fontSize:'15px', color:'grey'}}>{tag.littleText}</p>
            </div>
        </div>
    )
}
