import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const GraphCard = ({
    progress, color, ratio, text, underText
}) => {
    return (
        <div style={{
            height:'100%', width:'28%', background:'#fff', borderRadius: 5,
            boxShadow:'0px 4px 10px rgba(0, 0, 0, 0.1)',
            display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'
        }}>
            <div style={{width:'95%', height:'95%', }}>
                <div style={{height:'45%', width:'100%'}}>
                    <ResponsiveContainer width="100%" height="100%">
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
                            <Bar dataKey="pv" stackId="a" fill={color} />
                            <Bar dataKey="uv" stackId="a" fill="#E5E9F2" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div style={{height:'43%', width:'100%', marginTop:'10px'}}>
                    <div><b style={{fontSize:'20px'}}>{ratio}</b></div>

                    <div style={{
                        width:'100%', height: 5, borderRadius: '15px', background:'#F2F5F9', marginTop:'10px',
                    }}> 
                        <div style={{width:progress, height: "100%", borderRadius: '15px', background: color}} />
                    </div>

                    <div style={{marginTop:'10px'}}><b style={{fontSize:'15px'}}>{text}</b></div>
                    <p style={{fontSize:'15px', color:'grey'}}>{underText}</p>
                </div>
            </div>
        </div>
    )
}

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