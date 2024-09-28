import React from 'react'
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
  } from 'recharts';
import { Header } from '../Shared/Header';
  
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: -3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: -2000,
      pv: -9800,
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
      uv: -1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: -3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

export const AccountRetention = () => {
    return (
        <div className='blk'>
            <div className='blk2'>
                <Header name="Account Retention" />

                <div style={{height:'40%', width:'100%'}}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="pv" />
                        <ReferenceLine y={0} stroke="#000" />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <p style={{color:'grey', fontSize:'12px'}}>
                    Number of customers who have active subscription with you.
                </p>

                <div style={{
                    width:'95%', height:'20%',display:'flex', alignItems:'center',
                    borderRadius:5, border:'1px solid #E2E5EB',
                }}>
                     <div style={{
                        width:'50px', height:'50px', background:'#506FD9', marginRight:'10px',
                        borderRadius: 8, display:'flex', justifyContent:'center', alignItems:'center',
                        marginLeft:'10px'
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
                            <path fill="#fff" d="M20 13.75a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v6.75H14V4.25c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172C12.949 2.002 12.478 2 11.75 2s-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546V20.5H8V8.75A.75.75 0 0 0 7.25 8h-3a.75.75 0 0 0-.75.75V20.5H1.75a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5H20z" />
                        </svg>
                    </div>
                    
                    <div style={{}}>
                        <b style={{fontSize:'17px'}}>53,100</b>
                        <p style={{fontSize:'14px', margin:0}}>Expansions</p>
                        <p style={{fontSize:'12px', color:'grey', margin:0}}>Customers who have upgraded the level of your products or service.</p>
                    </div>
                </div>

                <div style={{
                    width:'95%', height:'20%',display:'flex', alignItems:'center',
                    borderRadius:5, border:'1px solid #E2E5EB', marginTop:'10px'
                }}>
                     <div style={{
                        width:'50px', height:'50px', background:'#84B6FF', marginRight:'10px', 
                        borderRadius: 8, display:'flex', justifyContent:'center', alignItems:'center',
                        marginLeft:'10px'
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
                            <path fill="#fff" d="M20 13.75a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v6.75H14V4.25c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172C12.949 2.002 12.478 2 11.75 2s-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546V20.5H8V8.75A.75.75 0 0 0 7.25 8h-3a.75.75 0 0 0-.75.75V20.5H1.75a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5H20z" />
                        </svg>
                    </div>
                    
                    <div style={{}}>
                        <b style={{fontSize:'17px'}}>1,300</b>
                        <p style={{fontSize:'14px', margin:0}}>Cancellations</p>
                        <p style={{fontSize:'12px', color:'grey', margin:0}}>Customers who have canceled the level of your products or service.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
