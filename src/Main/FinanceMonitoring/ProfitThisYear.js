import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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
    pv: 1000,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 1200,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 1600,
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
    amt: 5000,
  },
];

export const ProfitThisYear = ({ profit, upProfit }) => {
  const years = [2023, 2022, 2021];
  const [currYear, setCurrYear] = useState(years[0]);

  const quarters = [
    { amount: '30,342.15', quarter: 'First', up: 2.3 },
    { amount: '48,036.90', quarter: 'Second', up: 6.8 },
    { amount: '68,156.00', quarter: 'Third', up: 10.5 },
    { amount: '64,896.65', quarter: 'Fourth', up: 0.8 },
  ];

  return (
    <div style={{ width: '75%', height: '100%', background: '#FFFFFF', borderRadius: 10, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
      {/* Background Chart */}
      <div style={{
          position: 'absolute', 
          bottom: 0, 
          left: 0, 
          width: '100%', 
          height: '35%', 
          zIndex: 1, // Keeps the chart behind the main content
      }}>
          <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                  data={data}
                  margin={{
                      top: 5,
                      right: 0,
                      left: 0,
                  }}
                  style={{ borderRadius: 20 }}
              >
                  <defs>
                      <linearGradient id="gradientUv" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#6581DD', stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: '#E3E8F3', stopOpacity: 1 }} />
                      </linearGradient>
                  </defs>

                  <Tooltip />
                  <Area 
                      type="monotone" 
                      dataKey="uv" 
                      stroke="#6581DD" 
                      strokeWidth={3} // Adjust stroke width here
                      fill="url(#gradientUv)" // Use gradient for fill
                  />
              </AreaChart>
          </ResponsiveContainer>
      </div>

      {/* Main Content */}
      <div style={{ padding: 10, position: 'relative', zIndex: 2 }}>

        {/* Profi + Years */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ color: '#41505F', fontSize: '14px', fontWeight:'bolder' }}>Profit This Year</p>

          <div style={{ display: 'flex' }}>
            {years.map((year) => (
              <p
                key={year}
                style={{ color: year === currYear ? '#506FD9' : 'grey', marginLeft: '10px', cursor: 'pointer' }}
                onClick={() => setCurrYear(year)}
              >
                {year}
              </p>
            ))}
          </div>
        </div>

        <p style={{ color: '#202830', fontSize: '40px', margin: '0px' }}>
          $<b>{profit}</b> USD
        </p>

        <p style={{ margin: 0 }}>
          <span style={{color:'#506FD9', fontWeight:'bold'}}>↑{upProfit}%</span> vs last year
        </p>

        <p style={{ color: '#41505F', width: '50%', fontSize: '12px', marginTop: '10px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
        </p>

        <div style={{ width: '60%', display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
          {quarters.map((quarter, index) => (
            <div key={index}>
              <b style={{ fontSize: '15px' }}>${quarter.amount} USD</b>
              <p style={{ fontSize: '14px', margin:0 }}>{quarter.quarter} Quarter</p>
              <p style={{ color: quarter.up > 1 ? '#0AB784' : '#E16673', fontSize: '14px', margin:0 }}>
                {quarter.up > 1 ? "↑" : "↓"}{quarter.up}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
