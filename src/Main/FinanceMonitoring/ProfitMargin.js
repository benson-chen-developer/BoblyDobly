import React from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
  LineChart
} from 'recharts';

// const data = [
//   { name: 'Page A', uv: 4000, pv: 2400 },
//   { name: 'Page B', uv: 3000, pv: 1398 },
//   { name: 'Page C', uv: 2000, pv: 9800 },
//   { name: 'Page D', uv: 2780, pv: 3908 },
//   { name: 'Page E', uv: 1890, pv: 4800 },
//   { name: 'Page F', uv: 2390, pv: 3800 },
//   { name: 'Page G', uv: 3490, pv: 4300 }
// ];
const data = [
  {
    name: 'Page A',
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: 'Page B',
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: 'Page C',
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: 'Page D',
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: 'Page E',
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: 'Page F',
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
];

export const ProfitMargin = ({ margin, text, littleText }) => {
  return (
    <div style={{
      width: '100%', height: '49%', background: '#fff', borderRadius: 10, 
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', position: 'relative'
    }}>
      <div style={{ padding: 10, position: 'relative', zIndex: 2 }}>
        <h3 style={{ margin: 0, fontWeight:'bold' }}>{margin} %</h3>
        <b style={{ fontSize: '15px', margin: 0 }}>{text}</b>
        <p style={{ fontSize: '13px', margin: 0, color: 'grey' }}>{littleText}</p>
      </div>

      {/* Charts in the background */}
      <div style={{
        position: 'absolute', 
        bottom: 0, 
        left: 0, 
        width: '100%', 
        height: '50%', 
        zIndex: 1,
        display: 'flex', 
        justifyContent: 'flex-start', // Align items to the start of the flex container
        alignItems: 'flex-end' // Align items at the bottom
      }}>
        {/* <ResponsiveContainer width="100%" height="100%" style={{opacity: 0.6}}>
          <BarChart data={data}>
            <XAxis dataKey="pv" tick={{ fontSize: 10 }} />
            <Tooltip />
            <Bar dataKey="pv" fill="#506FD9" />
          </BarChart>
        </ResponsiveContainer> */}
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          </ComposedChart>
        </ResponsiveContainer>

        {/* Overlay LineChart with Area */}
        {/* <div style={{
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%',
          pointerEvents: 'none', 
        }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <defs>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#506FD9" stopOpacity={1}/> 
                  <stop offset="95%" stopColor="#506FD9" stopOpacity={1}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="pv" hide={true}/>
              <Tooltip />
              <Area type="monotone" dataKey="pv" stroke="#506FD9" fillOpacity={1} fill="url(#colorPv)" />
              <Line type="monotone" dataKey="pv" stroke="#506FD9" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div> */}
      </div>
    </div>
  );
};
