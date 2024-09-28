import React from 'react'
import { WhiteButton } from '../FinanceMonitoring/WhiteButton'
import { Dash } from './Dash'
import { EventCategories } from './EventCategories'
import { EventsByCategory } from './EventsByCategory'
import { EventsThisMonth } from './EventsThisMonth'
import { OverallReviews } from './OverallReviews'
import { PerformanceRating } from './PerformanceRating'
import { PerformanceReached } from './PerformanceReached'
import { TicketsAva } from './TicketsAva'
import { TicketsSold } from './TicketsSold'

export const EventsManagement = () => {
    const boxes = [
        {
            num: 358,
            name: 'Scheduled Events',
            percent: 0.7,
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24">
                <path fill="#506FD9" d="M9 2a1 1 0 0 1 1 1v1h4V3a1 1 0 1 1 2 0v1h3a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3V3a1 1 0 0 1 1-1M8 6H5v3h14V6h-3v1a1 1 0 1 1-2 0V6h-4v1a1 1 0 0 1-2 0zm11 5H5v8h14z" />
            </svg>
        },
        {
            num: 260,
            name: 'Attended Events',
            percent: 1.2,
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24">
                <path fill="grey" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m0 16H5V9h14zM5 7V5h14v2zm5.56 10.46l5.94-5.93l-1.07-1.06l-4.87 4.87l-2.11-2.11l-1.06 1.06z" />
            </svg>
        },
        {
            num: 38,
            name: 'Cancelled Events',
            percent: 0.6,
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 12 12">
                <path fill="grey" d="M3 5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M3.5 7a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M5 5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M5.5 7a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M7 5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m-6-2A2.5 2.5 0 0 1 3.5 1h5A2.5 2.5 0 0 1 11 3.5v5A2.5 2.5 0 0 1 8.5 11h-5A2.5 2.5 0 0 1 1 8.5zM3.5 2a1.5 1.5 0 0 0-1.415 1h7.83A1.5 1.5 0 0 0 8.5 2zM10 4H2v4.5A1.5 1.5 0 0 0 3.5 10h5A1.5 1.5 0 0 0 10 8.5z" />
            </svg>
        }
    ]
    return (
        <div style={{minWidth:"100%", minHeight:'100%', background: '#F7F8FC'}}>

            {/* Everything is sort of margined a little */}
            <div style={{padding:'15px', display:'flex', flexDirection:'column'}}>

                {/* Row 1 */}
                {/* <div style={{display:'flex', justifyContent:'space-between', marginBottom:'20px'}}>
                    <h1>Welcome To Dashboard</h1>

                    <div style={{display:'flex'}}>
                        <WhiteButton text={"Share"} back="#fff" textColor="#000"/>
                        <WhiteButton text={"Print"} back="#fff" textColor="#000"/>
                        <WhiteButton text={"Generate Report"} back="#506FD9" textColor="#fff"/>
                    </div>
                </div> */}

                {/* Row 2 */}
                <div style={{
                    width: '100%', 
                    height: '400px', 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1fr', 
                    gap: '20px',
                    gridTemplateRows: '1fr 1fr',    
                    gridTemplateAreas: `
                        "left rightTop"
                        "left rightBottom"
                    `,
                }}>
                    <Dash />

                    <TicketsAva />

                    <div style={{
                        gridArea: 'rightBottom',
                        display: 'flex', justifyContent:'space-between',
                        alignItems: 'center'
                    }}>
                        <TicketsSold
                             num="11,716" text="Tickets Sold" 
                             littleText="Ullam corper ultricies cura bitur nisi nam eget dui etia.
                        "/>
                        <TicketsSold
                             num="11,222" text="Tickets UnSold" 
                             littleText="Ullam corper ultricies cura bitur nisi nam eget dui etia.
                        "/>
                    </div>
                </div>

                {/* Row 3 */}
                <div style={{
                    width: '100%', height: '600px', display: 'flex', justifyContent:'space-between',
                    marginTop:'20px'
                }}>
                    {/* Left Side */}
                    <div style={{
                        width: '64%', height: '100%', display: 'flex', justifyContent: 'space-between',
                        flexDirection:'column'
                    }}>
                        {/* 3 Box */}
                        <div style={{
                            width:'100%', height:'30%', display:'flex',
                            justifyContent:'space-between', alignItems:'center'
                        }}>
                            {boxes.map((box, index) => <Box box={box} key={index} />)}
                        </div>

                        <PerformanceReached />
                    </div>

                    {/* Right Side */}
                    <div style={{ width: '35%', height: '100%', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                        
                        {/* Content for right side */}
                        <PerformanceRating />
                        <EventCategories />
                    </div>
                </div>

                {/* Row 4 */}
                <div style={{marginTop:'20px', display:'flex', justifyContent:'space-between', marginBottom:'20px', height:'600px'}}>
                    <div style={{display:'flex', width:'100%', height:'100%', justifyContent:'space-between', display:'flex'}}>
                        <EventsByCategory />
                        <OverallReviews />
                        <EventsThisMonth />
                    </div>
                </div>

            </div>
        </div>
    )
}

const Box = ({box}) => {
    return(
        <div style={{
            width:'32%', height:'100%', background:'#fff', borderRadius: 10,
            boxShadow:'0px 4px 10px rgba(0, 0, 0, 0.1)', display:'flex',
            justifyContent:'center', alignItems:'center'
        }}>
            <div className='blk2' style={{
                display:'flex', justifyContent:'space-evenly', flexDirection:'column',
                marginLeft:'10px'
            }}>
                {box.icon}
                <b style={{color:'black', fontSize:'25px', margin:0}}>{box.num}</b>
                <p style={{color:'black', fontSize:'15px', margin:0}}>{box.name}</p>

                <div style={{display:'flex'}}>
                    <p style={{
                        color: box.percent < 1 ? 'red' : 'green', fontSize:'14px'
                    }}>
                        {box.percent > 1 ? "↑" : "↓"} {box.percent}% than last week
                    </p>
                </div>
            </div>
        </div>
    )
}