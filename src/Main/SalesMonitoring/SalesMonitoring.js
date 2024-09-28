import React from 'react'
import { AccountRetention } from './AccountRetention'
import { MonthlyRev } from './MonthlyRev'
import { MostRecentEarning } from './MostRecentEarning'
import { RealTimeSales } from './RealTimeSales'
import { RecentSales } from './RecentSales'
import { SalesRevenue } from './SalesRevenue'
import { TransactionHistory } from './TransactionHistory'

export const SalesMonitoring = () => {
    return (
        <div style={{minWidth:"100%", minHeight:'100%', background: '#F7F8FC'}}>

            {/* Everything is sort of margined a little */}
            <div style={{padding:'15px', display:'flex', flexDirection:'column'}}>

                {/* Row 1 */}
                <div style={{display:'flex', justifyContent:'space-between', marginBottom:'20px', width:'100%'}}>
                    <div style={{display:'flex', width:'100%', height:'100px', justifyContent:'space-between'}}>
                        {boxes.map((box, i) => <Box box={box} i={i}/>)}
                    </div>
                </div>

                {/* Row 2 */}
                <div style={{
                    width: '100%', height: '500px', display: 'flex', justifyContent:'space-between',
                    marginTop:'20px'
                }}>
                    {/* Left Side */}
                    <div style={{
                        width: '58%', height: '100%', display: 'flex', justifyContent: ' v',
                        flexDirection:'column'
                    }}>
                        <MonthlyRev />
                    </div>

                    {/* Right Side */}
                    <div style={{ width: '40%', height: '100%', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
                        {/* Content for right side */}
                        <AccountRetention />
                    </div>
                </div>

                {/* Row 3 */}
                <div style={{
                    width: '100%', height: '400px', display: 'flex', justifyContent:'space-between',
                    marginTop:'20px'
                }}>
                    <RealTimeSales />
                    <RecentSales />
                    <TransactionHistory />
                </div>

                {/* Row 4 */}
                <div style={{
                    width: '100%', height: '600px', display: 'flex', justifyContent:'space-between',
                    marginTop:'20px'
                }}>
                    <SalesRevenue />
                    <MostRecentEarning />
                </div>
            </div>
            
        </div>
    )
}

const boxes = [
    {
        num: "8,327",
        name: 'Unique Purchases',
        percent: 0.7,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
            <g fill="none" stroke="#506FD9" stroke-width="1.5">
                <path d="M3.742 18.555C4.942 20 7.174 20 11.64 20h.72c4.466 0 6.699 0 7.899-1.445m-16.517 0c-1.2-1.446-.788-3.64.035-8.03c.585-3.12.877-4.681 1.988-5.603M3.742 18.555Zm16.517 0c1.2-1.446.788-3.64-.035-8.03c-.585-3.12-.878-4.681-1.989-5.603m2.024 13.633ZM18.235 4.922C17.125 4 15.536 4 12.361 4h-.722c-3.175 0-4.763 0-5.874.922m12.47 0Zm-12.47 0Z" />
                <path stroke-linecap="round" d="M9.17 8a3.001 3.001 0 0 0 5.66 0" />
            </g>
        </svg>
    },
    {
        num: "$12,105",
        name: 'Order Value',
        percent: 2.1,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
            <path fill="#506FD9" d="M8.5 17V6H9q0-1.25.875-2.125T12 3t2.125.875T15 6h.5v11zm2-11h3q0-.65-.425-1.075T12 4.5t-1.075.425T10.5 6M17 17V6h1q.825 0 1.413.588T20 8v7q0 .825-.587 1.413T18 17zM6 17q-.825 0-1.412-.587T4 15V8q0-.825.588-1.412T6 6h1v11zm-4 4v-2h20v2z" />
        </svg>
    },
    {
        num: "4,598",
        name: 'Order Quantity',
        percent: 0.3,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
            <path fill="#506FD9" d="M9 6h6a3 3 0 1 0-6 0M7 6a5 5 0 0 1 10 0h3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM5 8v12h14V8zm4 2a3 3 0 1 0 6 0h2a5 5 0 0 1-10 0z" />
        </svg>
    },
    {
        num: "6.28%",
        name: 'Conversion Rate',
        percent: 1.2,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
            <path fill="#506FD9" d="M20 13.75a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v6.75H14V4.25c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172C12.949 2.002 12.478 2 11.75 2s-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546V20.5H8V8.75A.75.75 0 0 0 7.25 8h-3a.75.75 0 0 0-.75.75V20.5H1.75a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5H20z" />
        </svg>
    }
]

const Box = ({box}) => {
    return(
        <div style={{
            width: '24%', 
            height: '100%', 
            background: '#fff', 
            borderRadius: 10,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
            display: 'flex',
            alignItems: 'center'
        }}>
            <div className='blk2' style={{
                display: 'flex', 
                flexDirection: 'column',
                marginLeft: '10px', 
                height: '80%', 
                width: '100%'
            }}>
                <b style={{color: 'grey', fontSize: '15px', margin: 0}}>{box.name}</b>
        
                <div style={{display: 'flex', marginTop:'5px'}}>
                    {box.icon}
                    <b style={{color: 'black', fontSize: '20px', marginLeft: '10px'}}>{box.num}</b>
                </div>
        
                <div style={{display: 'flex', marginTop:'5px'}}>
                    <p style={{
                        color: box.percent < 1 ? 'red' : 'green', 
                        fontSize: '12px',
                        display: 'flex'
                    }}>
                        {box.percent > 1 ? "↑" : "↓"}
                        {box.percent}% 
                        <span style={{color: 'grey', marginLeft: '10px'}}>than last week</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
