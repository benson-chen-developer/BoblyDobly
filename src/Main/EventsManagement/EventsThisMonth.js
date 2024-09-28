import React from 'react'
import { Header } from '../Shared/Header'

export const EventsThisMonth = () => {
    return (
        <div className='blk' style={{width:'32%'}}>
            <div className='blk2'>
                <Header name="Events This Month"/>

                <div style={{
                    width:'100%', display:'flex', flexDirection:'column',
                    alignItems:'center', height:'100%', marginTop:'10px'
                }}>
                    {items.map((item, i) => <Item key={i} cal={item} picked={i === 0}/>)}
                </div>
            </div>
        </div>
    )
}

const items = [
    {
        day: 'MON',
        date: "23",
        time: '08:00am - 10:30am',
        event:'5th Religious Conference',
        text:'Duis aute irure dolor in repre hen derit in volup tate velit esse cillum.'
    },
    {
        day: 'THU',
        date: "05",
        time: '08:00am - 10:30am',
        event:'5th Religious Conference',
        text:'Duis aute irure dolor in repre hen derit in volup tate velit esse cillum.'
    },
    {
        day: 'TUE',
        date: "10",
        time: '09:00am - 10:30am',
        event:'5th Religious Conference',
        text:'Duis aute irure dolor in repre hen derit in volup tate velit esse cillum.'
    }
]

const Item = ({cal, picked}) => {
    return(
        <div style={{display:'flex', width:'100%', height:'100px', justifyContent:'space-evenly'}}>
            {/* Calendar */}
            <div style={{
                height:'60%', width:'15%', display:'flex', justifyContent:'space-evenly',
                alignItems:'center', flexDirection:'column', borderRadius:10,
                background: picked ? "#506FD9" : "#E2E5EB"
            }}>
                <p style={{color: picked ? "#C1CBF2" : "#6E7985", margin:0, fontSize:'12px'}}>{cal.day}</p>
                <b style={{fontSize:'20px', color: picked ? "#fff" : "#000", margin:0}}>{cal.date}</b>
            </div>

            {/* Right Part (Flag) */}
            <div style={{
                height:'90%', width:'80%', display:'flex', justifyContent:'space-evenly',
                flexDirection:'column', borderRadius:5,
                background: picked ? "#FBFCFE" : "#F1F4FC"
            }}>
                <div style={{
                    paddingLeft:'10px', borderLeft: picked ? '2px solid #506FD9' : '2px solid grey',
                }}>
                    <p style={{margin:0, fontSize:'12px', color:'grey'}}>{cal.time}</p>
                    <b style={{margin:0, fontSize:'14px', color:picked ? '#506FD9' : '#000',}}>{cal.event}</b>
                    <p style={{margin:0, fontSize:'13px', color:'grey'}}>{cal.text}</p>
                </div>
            </div>
        </div>
    )
}
