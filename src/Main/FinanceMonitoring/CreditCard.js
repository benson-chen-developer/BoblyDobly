import React from 'react'
import { Icons } from '../Icons/Icons'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const CreditCard = () => {
    return (
        <div className='blk' style={{width: '41%', position: 'relative'}}> {/* Set position to relative for absolute positioning of children */}
    
            <ResponsiveContainer width="100%" height="60%" style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                zIndex: 1, 
            }}>
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <defs>
                        <linearGradient id="gradientUv" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#EAF2FF', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#EAF2FF', stopOpacity: 0 }} />
                        </linearGradient>
                        <linearGradient id="gradientAmt" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#E1E7F9', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#E1E7F9', stopOpacity: 0 }} />
                        </linearGradient>
                    </defs>
                    
                    <Area 
                        type="monotone" 
                        dataKey="uv" 
                        stroke="#EAF2FF" 
                        fill="url(#gradientUv)" 
                    />
                    <Area 
                        type="monotone" 
                        dataKey="amt" 
                        stroke="#E1E7F9" 
                        fill="url(#gradientAmt)" 
                    />
                </AreaChart>
            </ResponsiveContainer>

            <div className='blk2' style={{
                width: '90%', 
                height: '90%', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                flexDirection: 'column',
                position: 'relative', // Allow content to be positioned above the chart
                zIndex: 2 // Set higher z-index for the content
            }}>
                
                <div style={{width: '100%', display: 'flex', height: '50%', justifyContent: 'space-between'}}>
                    <div>
                        <p style={{fontSize: '15px', color: 'grey', margin: 0}}>Available Balance</p>
                        <b style={{fontSize: '24px', marginTop: '5px'}}>$130,058.50</b>
                    </div>

                    <Icons icon={"visa"} width="40px" height={"40px"}/>
                </div>

                <div style={{
                    width: '100%', 
                    display: 'flex', 
                    height: '50%', 
                    justifyContent: 'space-between', 
                    flexDirection: 'column'
                }}>
                    <div>
                        <p style={{fontSize: '15px', color: 'grey', margin: 0}}>Account Number</p>
                        <b style={{fontSize: '18px', marginTop: '5px'}}>•••• •••• •••• 5314</b>
                    </div>

                    <div>
                        <p style={{fontSize: '15px', color: 'grey', margin: 0}}>Account Name</p>
                        <b style={{fontSize: '18px', marginTop: '5px'}}>Richard M. Christensen</b>
                    </div>
                </div>
            </div>
        </div>
    )
}
