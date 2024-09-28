import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

export const Dash = () => {
    return (
        <div className='blk' style={{
            gridArea: 'left',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            height: '100%',
        }}>
            <div className='blk2' style={{ zIndex: 2, position: 'relative', padding: '20px' }}>
                <h1 style={{ marginTop: 10, fontWeight: 'bold' }}>$14,869.95</h1>

                <div style={{ margin: 0 }}><b style={{ fontSize: '19px' }}>Ticket Earnings</b></div>
                <p style={{ fontSize: '14px', color: 'grey', margin: 0, width: '80%' }}>tiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.s</p>

                <button style={{
                    width: '125px',
                    height: '38px',
                    background: '#516FD9',
                    color: '#fff',
                    border: '1px solid #516FD9',
                    borderRadius: 5,
                    marginTop: 20
                }}>
                    <p style={{ color: '#fff', fontSize: '13px', margin: 0 }}>View Statements</p>
                </button>

                <div style={{
                    display: 'flex', marginTop: '125px'
                }}>
                    <p style={{ marginRight: 30 }}><b>11,716</b> Tickets Sold</p>
                    <p><b>12,716</b> Tickets Unsold</p>
                </div>
            </div>

            <div style={{
                position: 'absolute', // Position the chart absolutely
                bottom: 0, // Align to the bottom of the parent
                left: 0,
                width: '100%',
                height: '50%', // Adjust height as needed
                zIndex: 1 // Lower zIndex for the chart
            }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            left: 0,
                            bottom: 0,
                        }}>
                        <defs>
                            <linearGradient id="gradientUv" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#84B6FF" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#ffffff" stopOpacity={0.2} />
                            </linearGradient>
                            <linearGradient id="gradientPv" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#506FD9" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#ffffff" stopOpacity={0.2} />
                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="uv" stackId="1" stroke="#84B6FF" fill="url(#gradientUv)" />
                        <Area type="monotone" dataKey="pv" stackId="1" stroke="#506FD9" fill="url(#gradientPv)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
