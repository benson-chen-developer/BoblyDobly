import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Header } from '../Shared/Header';

// Data for the pie chart
const data = [
    { name: '1.8B 86.24%', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const COLORS = ['#EEF1F5', '#51596C', '#84B6FF', '#506FD9'];

export const BilledOpportunities = () => {
    return (
        <div style={{
            width: '39%', 
            height: '100%', 
            background: '#fff', 
            borderRadius: 10, 
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            position: 'relative', // Set parent container to relative for absolute positioning
        }}>
            <div style={{ 
                width: '95%', height: '95%', position: 'relative',
                display:'flex', alignItems:'center' , flexDirection:'column'
            }}>
                <Header name="Billed Opportunities" />
                
                <div style={{width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center',flexDirection:'column'}}>
                    <h3 style={{ color: '#41505F', fontWeight: 'bold', textAlign:'center' }}>1.8B</h3>
                    <p style={{ color: '#41505F', fontWeight: 'bold', fontSize:'14px',  textAlign:'center'  }}>86.24%</p>
                </div>

                {/* Background Pie Chart */}
                <div style={{
                    position: 'absolute', 
                    width: '100%', 
                    height: '100%', 
                    display:'flex', justifyContent:'center', alignItems:'center',
                    zIndex: 0, 
                }}>
                    <PieChart width={200} height={200}>
                        <Pie
                            data={data}
                            innerRadius={60}
                            outerRadius={100}
                            fill="#8884d8"
                            paddingAngle={1}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};
