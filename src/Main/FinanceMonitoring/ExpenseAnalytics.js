import React from 'react'
import { Icons } from '../Icons/Icons'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Header } from '../Shared/Header'

export const ExpenseAnalytics = () => {
    const sides = [
        {
            text: 'Fixed Expenses',
            littleText:'Fixed expenses are generally fixed in both amount and interval.',
            icon: ''
        },
        {
            text: 'Periodic Expenses',
            littleText:'Periodic expenses are usually less frequent and the amount can vary.',
            icon: ''
        },
        {
            text: 'Variable Expenses',
            littleText:'Change as the quantity of good or service that produces changes.',
            icon: ''
        }
    ]

    return (
        <div style={{
            width:'60%', height:'100%', background:'#fff', borderRadius:10, boxShadow:'0px 4px 10px rgba(0, 0, 0, 0.1)',
            display:'flex', justifyContent:'center', alignItems:'center'
        }}>
            <div style={{width:'95%', height:'95%'}}>

                <Header name="Expense Analytics"/>

                <div style={{display:'flex', width:'100%', height:'100%', alignItems:'center'}}>
                    {/* Graph */}
                    <div style={{height:'80%', width:'55%'}}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={700}
                                height={800}
                                data={data}
                                margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                                }}
                            >
                                <XAxis dataKey={"pv"} tick={{fontSize: 10}}/>
                                <YAxis dataKey={"pv"} tick={{fontSize: 10}}/>
                                <Bar dataKey="pv" stackId="a" fill={"#6B85DF"} />
                                <Bar dataKey="uv" stackId="a" fill="#E5E9F2" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Side Stuff */}
                    <div style={{width:'45%', display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
                        {sides.map((side, index) => 
                            <Side 
                                key={index}
                                text={side.text}
                                littleText={side.littleText}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Side = ({icon, text, littleText}) => {
    return (
        <div style={{display:'flex', alignItems:'center'}}>
            <div style={{display:'flex'}}>
                <Icons 
                    width="25px" height="25px" icon={text}
                />
            </div>
            <div style={{marginLeft:'20px'}}>
                <b>{text}</b>
                <p style={{color:'grey', fontSize:'13px'}}>{littleText}</p>
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