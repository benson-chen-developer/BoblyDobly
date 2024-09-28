import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

export const TicketsSold = ({ num, text, littleText }) => {
    return (
        <div
            className='blk'
            style={{
                width: '49%',
                height: '100%',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
            }}
        >
            {/* Chart in the background */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'flex-end',
                    zIndex: 0,
                    opacity: 0.5,
                }}
            >
                <ResponsiveContainer width="100%" height="30%">
                    <AreaChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 0,
                            left: 0,
                        }}
                    >
                        <defs>
                            <linearGradient id="gradientUv" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#506FD9" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#ffffff" stopOpacity={0.2} />
                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="uv" stroke="#506FD9" fill="url(#gradientUv)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            {/* Content */}
            <div
                className='blk2'
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    zIndex: 1,
                    position: 'relative',
                }}
            >
                <h1 style={{ marginTop: 15 }}>{num}</h1>
                <div style={{ margin: 0 }}>
                    <b style={{ fontSize: '19px' }}>{text}</b>
                </div>
                <p
                    style={{
                        fontSize: '14px',
                        color: 'grey',
                        margin: 0,
                        width: '80%',
                        textAlign: 'center',
                    }}
                >
                    {littleText}
                </p>
            </div>
        </div>
    );
};
