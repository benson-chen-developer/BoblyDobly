import React from 'react'
import { Header } from '../Shared/Header'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Performing Arts',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Festivals',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Festivals',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Sports',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Politics',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const EventCategories = () => {
    return (
        <div className='blk' style={{height:'50%'}}>
            <div className='blk2'>
                <Header name={"Events Categories"}/>

                <ResponsiveContainer width="100%" height="90%" style={{marginTop:'10px'}}>
                    <BarChart
                        layout="vertical" 
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
                    <XAxis type="number" tick={{fontSize:'12px'}} />  {/* XAxis now shows the numeric values */}
                    <YAxis dataKey="name" type="category" tick={{fontSize:'12px'}}/>  {/* YAxis now shows the categorical values */}
                    <Tooltip />
                    <Bar dataKey="pv" fill="#506FD9" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                    <Bar dataKey="uv" fill="#86B6FF" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
