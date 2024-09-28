import { Header } from "../Shared/Header"
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

export const Acquisition = ({w, h}) => {
    return (
        <div style={{
            width: w, 
            height: h, 
            background: '#fff', 
            borderRadius: 10,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center'
        }}>
            <div className='blk2'>
                <Header name="Acquisition"/>

                <div style={{ marginTop: '10px' }}>
                    <p style={{ fontSize: '13px', color: 'grey' }}>
                        Tells you where your visitors originated from, such as search engines, social networks or website referrals.
                        <span style={{ fontSize: '13px', color: '#4058AD', cursor: 'pointer' }}> Learn more</span>
                    </p>
                </div>

                {/* Two Pics */}
                <div style={{width:'100%', display:'flex'}}>
                    <div style={{
                        width:'45%', height:'20%',display:'flex', alignItems:'center',
                    }}>
                        <div style={{
                            width:'50px', height:'50px', background:'#506FD9', marginRight:'10px', marginTop:'5px',
                            borderRadius: 8, display:'flex', justifyContent:'center', alignItems:'center'
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
                                <path fill="#fff" d="M20 13.75a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v6.75H14V4.25c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172C12.949 2.002 12.478 2 11.75 2s-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546V20.5H8V8.75A.75.75 0 0 0 7.25 8h-3a.75.75 0 0 0-.75.75V20.5H1.75a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5H20z" />
                            </svg>
                        </div>
                        
                        <div style={{}}>
                            <b style={{fontSize:'22px'}}>33.50%</b>
                            <p style={{fontSize:'14px', margin:0}}>Bounce Back</p>
                        </div>
                    </div>

                    <div style={{
                        width:'45%', height:'20%',display:'flex', justifyContent:'center', alignItems:'center',
                    }}>
                        <div style={{
                            width:'50px', height:'50px', background:'#84B6FF', marginRight:'10px', marginTop:'5px',
                            borderRadius: 8, display:'flex', justifyContent:'center', alignItems:'center'
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
                                <path fill="#fff" d="M20 13.75a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v6.75H14V4.25c0-.728-.002-1.2-.048-1.546c-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172C12.949 2.002 12.478 2 11.75 2s-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546V20.5H8V8.75A.75.75 0 0 0 7.25 8h-3a.75.75 0 0 0-.75.75V20.5H1.75a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5H20z" />
                            </svg>
                        </div>
                        
                        <div style={{}}>
                            <b style={{fontSize:'22px'}}>9,002</b>
                            <p style={{fontSize:'14px', margin:0}}>Page Sessions</p>
                        </div>
                    </div>
                </div>

                <div style={{width:'100%', height:'50%', marginTop:'20px'}}>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="pv" />
                        <Area type="monotone" dataKey="uv" stackId="1" stroke="#84B6FF" fill="#fff" />
                        <Area type="monotone" dataKey="pv" stackId="1" stroke="#506FD9" fill="#506FD9" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}