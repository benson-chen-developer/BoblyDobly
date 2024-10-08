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
      pv: -1000,
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
      pv: 3000,
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
      pv: 100,
      amt: 2100,
    },
  ];
  
export const IncomeExpenses = () => {
    return (
        <div style={{
            width:'49%', height:'100%', background:'#fff', borderRadius:10, boxShadow:'0px 4px 10px rgba(0, 0, 0, 0.1)'
            ,justifyContent:'center', alignItems:'center', display:'flex'
        }}>
            <div style={{
                width:'95%', height:'95%'
            }}>
                <Header name="Income & Expenses"/>

                <div style={{display:'flex', width:'100%', justifyContent:'space-between', height:'90%'}}>
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
                            <YAxis dataKey="uv" tick={{ fontSize: 10 }}/>
                            <XAxis dataKey="pv" tick={{ fontSize: 10 }}/>
                            <ReferenceLine y={0} stroke="#000" />
                            <Bar dataKey="pv" fill="#B2E7FF" />
                            <Bar dataKey="uv" fill="#506FD9" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}
