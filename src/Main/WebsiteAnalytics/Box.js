import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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

export const Box = ({box}) => {
    return(
        <div style={{
            width: '33%', 
            height: '100%', 
            background: '#fff', 
            borderRadius: 10,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center'
        }}>
            <div className='blk2' style={{
                display: 'flex', 
                justifyContent: 'space-evenly', 
                marginLeft: '10px', 
                height: '80%', 
                width: '100%',
            }}>

                {/* Left Text */}
                <div style={{height:'100%', width:'50%', justifyContent:'space-evenly', display:'flex', flexDirection:'column'}}>
                    <b style={{margin: 0, fontSize:'25px'}}>{box.num}</b>
                    <h6 style={{margin: 0, fontSize:'15px'}}>{box.name}</h6>
                    <h6 style={{margin: 0, fontSize:'12px', color:'grey'}}>{box.text}</h6>
                </div>

                {/* Right Bars */}
                <div style={{width:'50%', height:"100%"}}>
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
                        <Bar dataKey="pv" stackId="a" fill={box.color} />
                        <Bar dataKey="uv" stackId="a" fill="#E5E9F2" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}
