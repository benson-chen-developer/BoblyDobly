import React from 'react'
import { Header } from '../Shared/Header'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mar',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Apr',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Jan',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'May',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Oct',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Sep',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Dec',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const RealTimeSales = () => {
    return (
        <div className='blk' style={{height:'100%', width:'33%'}}>
            <div className='blk2'>
                <Header name="Real Time Sales"/>

                <div style={{height:'90%', width:'100%', marginTop:'10px'}}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={data}
                            layout="vertical" // This is important for vertical bars
                            margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            {/* XAxis now represents the numerical values */}
                            <XAxis type="number" />
                            {/* YAxis now represents the categories (names) */}
                            <YAxis type="category" dataKey="name" />
                            <Bar dataKey="pv" fill="#1147FA" />
                            <Bar dataKey="uv" fill="#86B6FF" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}
