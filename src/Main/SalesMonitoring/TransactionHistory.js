import React, {Image} from 'react'
import { Header } from '../Shared/Header'

const items = [
    {
        png: "https://thumbs.dreamstime.com/b/handsome-man-businessman-suit-88931142.jpg",
        name: 'Purchase from #10322',
        date: 'Oct 21, 2023, 3:30pm',
        num: '+ $250.00',
        progress: 'Completed',
        color: '#33D685',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 48 48">
            <g fill="none">
                <path d="M39 32H13L8 12h36z" />
                <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M3 6h3.5L8 12m0 0l5 20h26l5-20z" />
                <circle cx="13" cy="39" r="3" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" />
                <circle cx="39" cy="39" r="3" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" />
            </g>
        </svg>
    },
    {
        png: "https://thumbs.dreamstime.com/b/handsome-man-businessman-suit-88931142.jpg",
        name: 'Process refund to #00910',
        date: 'Oct 11, 2023, 3:30pm',
        num: '- $16.00',
        progress: 'Processing',
        color: '#FFC007',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24">
            <path fill="#fff" d="M5.676 4.257c3.928-3.219 9.733-2.995 13.4.672c3.905 3.905 3.905 10.237 0 14.142s-10.237 3.905-14.142 0a9.99 9.99 0 0 1-2.678-9.304l.077-.313l1.934.51a8 8 0 1 0 3.053-4.45l-.22.166l1.017 1.017l-4.596 1.06l1.06-4.596zM13.005 6v2h2.5v2h-5.5a.5.5 0 0 0-.09.992l.09.008h4a2.5 2.5 0 0 1 0 5h-1v2h-2v-2h-2.5v-2h5.5a.5.5 0 0 0 .09-.992l-.09-.008h-4a2.5 2.5 0 1 1 0-5h1V6z" />
        </svg>
    },
]

export const TransactionHistory = () => {
    return (
        <div className='blk' style={{height:'100%', width:'33%'}}>
            <div className='blk2'>
                <Header name="Transaction History"/>

                <div style={{width:'100%'}}>
                    {items.map((item, i) => <Item key={i} item={item} /> )}
                </div>

                <div style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', height:'40px'}}>
                    <p style={{color:'#506FD9', margin:0, fontSize:'14px'}}>Manage Transactions</p>
                </div>
            </div>
        </div>
    )
}

const Item = ({item}) => {
    return (
        <div style={{width:'100%', height:'60px', display:'flex', alignItems:'center', borderBottom:'1px solid #EEF1F4'}}>
            {/* Icon */}
            <div style={{width:'15%'}}>
                <div style={{width:'40px', height:'40px', borderRadius:100, background:item.color, display:'flex', justifyContent:'center', alignItems:'center'}}>
                    {item.icon}
                </div>
            </div>

            {/* Name + Email */}
            <div style={{width:'65%', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <b style={{margin:0, fontSize:'14px',}}>{item.name}</b>
                <p style={{margin:0, color:'grey', fontSize:'12px',}}>{item.date}</p>
            </div>

            {/* Money */}
            <div style={{width:'20%', display:'flex', alignItems:'center', flexDirection:'column', justifyContent:'center', height:'100%'}}>
                <p style={{margin:0, fontSize:'12px'}}>{item.num}</p>
                <p style={{color:item.color, margin:0, fontSize:'12px'}}>{item.progress}</p>
            </div>
        </div>
    )
}