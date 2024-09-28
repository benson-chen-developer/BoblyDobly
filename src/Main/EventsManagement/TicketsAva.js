import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
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

  
export const TicketsAva = () => {
    return (
        <div className='blk' style={{
            gridArea: 'rightTop',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div className='blk2' style={{display:'flex'}}>
                <div style={{width:'50%', height:'100%', display:'flex', alignItems:'flex-end'}}>
                    <ResponsiveContainer width="100%" height="60%">
                        <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <Bar dataKey="pv" stackId="a" fill="#506FD9" />
                        <Bar dataKey="uv" stackId="a" fill="#E5E9F2" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div style={{width:'50%', height:'100%', display:'flex', justifyContent:'center', flexDirection:'column'}}>
                        <h1>24,580</h1>
                        <div style={{}}><b style={{fontSize:'19px'}}>Ticket Available</b></div>
                        <p style={{fontSize:'14px', color:'grey', margin:0, width:'80%'}}>tiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.s</p>
                </div>
            </div>
        </div>
    )
}
