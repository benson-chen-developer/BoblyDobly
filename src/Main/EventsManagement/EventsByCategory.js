import React from 'react'
import { Header } from '../Shared/Header'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { 
    value: 400,
    name: "Festivals", 
    color:'#B9BDC9'
},
{ 
    value: 300,
    name: "Sports", 
    color:'#506FD9'
},
{ 
    value: 300,
    name: "Sports", 
    color:'#86B6FF'
},
{ 
    value: 200,
    name: "Concerts", 
    color:'#50586D'
},
];
const COLORS = ['#506FD9', '#50586D', '#86B6FF', '#B9BDC9'];

export const EventsByCategory = () => {
    return (
        <div className='blk' style={{width:'32%'}}>
            <div className='blk2'>
                <Header name="Events By Category"/>

                <div style={{
                    width:'100%', display:'flex', justifyContent:'center', flexDirection:'column',
                    alignItems:'center', height:'100%'
                }}>
                    <PieChart width={600} height={300} >
                        <Pie
                            data={data}
                            innerRadius={60}
                            fill="#8884d8"
                            paddingAngle={1}
                            dataKey="value"
                        >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        </Pie>
                    </PieChart>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr', // Two equal-width columns
                        gridTemplateRows: '1fr 1fr',    // Two equal-height rows
                        gap: '10px',                    // Optional: Adds space between grid items
                        width: '100%',
                        height: '40%',
                    }}>
                        {data.map((d, index) => {
                            const total = data.reduce((accumulator, currentItem) => {
                                return accumulator + currentItem.value;
                            }, 0);

                            return <Item item={d} total={total} key={index} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Item = ({item, total}) => {
    const percent = (item.value / total)*100;

    return(
        <div style={{
            width:'100%', height:'100%'
        }}>
            <p style={{color:'grey', marginBottom:'0px'}}>{item.name}</p>
            <div style={{marginBottom:'8px', display:'flex', alignItems:'center'}}>
                <b style={{fontSize:'20px', margin:0, marginRight:'5px'}}>{item.value} </b>
                <p style={{color:'grey',fontSize:'12px',margin:0}}>   {total}%</p>
            </div>

            <div 
                style={{width:'100%', background:'#F2F5F9', height:'5px', borderRadius:4}}
            >
                <div style={{width:`${percent}%`, background:item.color, height:'100%',borderRadius:4}}/>
            </div>
        </div>
    )
}
