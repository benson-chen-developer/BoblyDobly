import React from 'react'
import { Header } from '../Shared/Header'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
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

export const PerformanceReached = () => {
    return (
        <div className='blk' style={{height:'67%'}}>
            <div className='blk2'>

                <Header name="Performance Reached"/>

                <ResponsiveContainer width="100%" height="40%">
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
                    <XAxis dataKey="pv" tick={{fontSize: 10}}/>
                    <Bar dataKey="pv" fill="#5772CD" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                    </BarChart>
                </ResponsiveContainer>

                <PerformerTable />
            </div>
        </div>
    )
}

const performersData = [
    {
      PerID: '00035',
      name: 'Allan R. Palban',
      email: 'allan@themepixels.me',
      status: 'Active',
      quota: 120,
      reached: 64,
      rating: 4,
      barColor: '#506FD9'
    },
    {
        PerID: '00022',
        name: 'Charlene S. Plateros',
        email: 'charlene@themepixels.me',
        status: 'Away',
        quota: 100,
        reached: 70,
        rating: 3,
        barColor: '#84B6FF'
      },
  ];
  
  const Star = ({ filled }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      style={{ color: filled ? '#506FD9' : '#E0E0E0' }}
    >
      <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );


export const PerformerTable = () => {

    return (
        <div style={{ width: '100%', borderRadius: '8px', backgroundColor: '#fff' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <thead>
                <tr style={{ textAlign: 'left' }}>
                    <th style={{ padding: '10px' }}>PerID</th>
                    <th style={{ padding: '10px' }}>Name of Performer</th>
                    <th style={{ padding: '10px' }}>Status</th>
                    <th style={{ padding: '10px' }}>Quota</th>
                    <th style={{ padding: '10px' }}>Reached</th>
                    <th style={{ padding: '10px' }}>Rating</th>
                </tr>
                </thead>
                <tbody>
                {performersData.map((performer, index) => (
                    <tr
                    key={index}
                    style={{
                        borderBottom: index !== performersData.length - 1 ? '1px solid #F2F5F9' : 'none', // Border bottom for all except the last row
                    }}
                    >
                    <td style={{ padding: '10px' }}>{performer.PerID}</td>
                    <td style={{ padding: '10px', display:'flex' }}>
                        <div style={{height:'40px', width:'40px', background:'#6E7985', display:'flex',
                            alignItems:'center', justifyContent:'center', borderRadius:100, marginRight:'10px', color:'#fff'
                        }}>
                            {performer.name[0]}
                        </div>

                        <div>
                            <b>{performer.name}</b>
                            <p style={{ color: 'grey', fontSize: '12px', margin: '5px 0 0 0' }}>{performer.email}</p>
                        </div>
                    </td>
                    <td style={{ padding: '10px', width: '40%' }}>
                        <div style={{
                            height: '100%', width: '100%', background: performer.barColor, borderRadius: 3, display: 'flex',
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                            <p style={{ color: '#fff', margin: 0 }}>{performer.status}</p>
                        </div>
                    </td>
                    <td style={{ padding: '10px', width: '15%' }}>{performer.quota}</td>
                    <td style={{ padding: '10px', width: '15%' }}>{performer.reached}</td>
                    <td style={{ padding: '10px', display: 'flex' }}>
                        {Array.from({ length: 5 }, (_, starIndex) => (
                        <Star key={starIndex} filled={starIndex < performer.rating} />
                        ))}
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
    );
};
