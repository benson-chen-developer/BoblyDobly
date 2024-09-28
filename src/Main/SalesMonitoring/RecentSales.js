import React, {Image} from 'react'
import { Header } from '../Shared/Header'

const items = [
    {
        png: "https://thumbs.dreamstime.com/b/handsome-man-businessman-suit-88931142.jpg",
        id: '11111',
        name: 'Andy Lee'
    },
    {
        png: "https://thumbs.dreamstime.com/b/young-man-22092273.jpg",
        id: '22222',
        name: 'Mandy Top'
    }
]

export const RecentSales = () => {
    return (
        <div className='blk' style={{height:'100%', width:'33%'}}>
            <div className='blk2'>
                <Header name="Recent Sellers"/>

                <div style={{width:'100%'}}>
                    {items.map((item, i) => <Item key={i} item={item} /> )}
                </div>

                <div style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', height:'40px'}}>
                    <p style={{color:'#506FD9', margin:0, fontSize:'14px'}}>Manage Customers</p>
                </div>
            </div>
        </div>
    )
}

const Item = ({item}) => {
    return (
        <div style={{width:'100%', height:'60px', display:'flex', alignItems:'center', borderBottom:'1px solid #EEF1F4'}}>
            {/* PFP */}
            <div style={{width:'15%'}}>
                <div style={{width:'40px', height:'40px', borderRadius:100}}>
                    <img 
                        style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius:100}} 
                        src={item.png} 
                        alt="Profile"
                    />
                </div>
            </div>

            {/* Name + Email */}
            <div style={{width:'70%', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <b style={{margin:0, fontSize:'14px'}}>{item.name}</b>
                <p style={{margin:0, color:'grey', fontSize:'12px'}}>Customer ID#{item.id}</p>
            </div>

            {/* Icon */}
            <div style={{width:'15%', display:'flex', alignItems:'center'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 16 16">
                    <path fill="#6E7985" d="M7.9 8.548h-.001a5.53 5.53 0 0 1 3.1 4.659a.75.75 0 1 1-1.498.086A4.01 4.01 0 0 0 5.5 9.5a4.01 4.01 0 0 0-4.001 3.793a.75.75 0 1 1-1.498-.085a5.53 5.53 0 0 1 3.1-4.66a3.5 3.5 0 1 1 4.799 0M13.25 0a.75.75 0 0 1 .75.75V2h1.25a.75.75 0 0 1 0 1.5H14v1.25a.75.75 0 0 1-1.5 0V3.5h-1.25a.75.75 0 0 1 0-1.5h1.25V.75a.75.75 0 0 1 .75-.75M5.5 4a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 4" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 32 32">
                    <path fill="#6E7985" d="M15 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m-8.5 2A3.5 3.5 0 0 0 3 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C8.859 29.177 11.802 30 15 30q1.118-.001 2.185-.13A8.98 8.98 0 0 1 14 23c0-1.85.558-3.57 1.516-5zm24 5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m-8.212-4.862l-.94 2.828h-2.994c-.731 0-1.03.938-.434 1.361l2.406 1.707l-.929 2.792c-.228.687.555 1.267 1.146.848L23 25.931l2.457 1.743c.591.42 1.374-.16 1.146-.848l-.93-2.792l2.407-1.707c.597-.423.297-1.361-.434-1.361h-2.994l-.94-2.828c-.228-.684-1.196-.684-1.424 0" />
                </svg>
            </div>
        </div>
    )
}