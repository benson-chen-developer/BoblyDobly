import React from 'react'
import { Header } from '../Shared/Header'

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

export const MonthlyRev = () => {
    const points = [
        {
            name:'Growth Actual',
            color:'#506FD9'
        },
        {
            name:'Actual',
            color:'#DBDFFC'
        },
        {
            name:'Plan',
            color:'#84B6FF'
        }
    ]
    return (
        <div className='blk'>
            <div className='blk2'>
                <Header name="Monthly Growth Revenue"/>

                <div style={{height:'100%', width:'100%'}}>

                    <div style={{display:'flex'}}>
                        {points.map((point, i) => <div style={{display:'flex', alignItems:'center', marginRight:'10px'}}>
                                <div style={{width:'10px', height:'10px', borderRadius:100, background:point.color}}/>
                                <p style={{fontSize:'14px', margin:0, marginLeft:'5px'}}>{point.name}</p>
                            </div>    
                        )}
                    </div>

                    <div style={{width:'100%', height:'50%', display:'flex', justifyContent:'center'}}>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                            width={500}
                            height={400}
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="uv" />
                            <Tooltip />
                            <Area type="monotone" dataKey="pv" stroke="#CCD1ED" fill="#CCD1ED" />
                            <Area type="monotone" dataKey="uv" stroke="#80ADEE" fill="#80ADEE" />
                            <Area type="monotone" dataKey="amt" stroke="#506FD9" fill="#506FD9" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    <div style={{width:'100%', height:'35%', display:'flex', justifyContent:'center', marginTop:'20px'}}>
                        <div style={{width:'49%'}}>
                            <b style={{fontSize:'22px'}}>$833,333.18</b>
                            <p style={{fontSize:'17px',  margin:'0px'}}>Monthly Revenue Growth</p>
                            <p style={{fontSize:'15px', color:'grey', margin:'0px'}}>  Measure how fast you're growing monthly recurring revenue.</p>
                        </div>
                        <div style={{width:'49%'}}>
                            <b style={{fontSize:'22px'}}>$19,204.15</b>
                            <p style={{fontSize:'17px',  margin:'0px'}}>Monthly Revenue/Customer</p>
                            <p style={{fontSize:'15px', color:'grey', margin:'0px'}}> The revenue generated per account on a monthly or yearly basis.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
