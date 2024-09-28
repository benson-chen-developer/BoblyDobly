import { Header } from "../Shared/Header"

export const AnalyticsPerformance = ({w, h}) => {
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
                <Header name="Analytics Performance"/>

                <div style={{display: 'flex', alignItems: 'center'}}>
                    <h3 style={{margin:0}}>9.8</h3>
                    <p style={{fontSize:'12px', color:'#0AB784', margin:0}}>
                        ↑2.8%
                    </p>
                </div>

                <p style={{fontSize:'14px'}}>Performance Score</p>

                <div style={{
                    width:'100%', height:'10px',  display:'flex'
                }}>
                    <div style={{width:'30%', height:'100%', background:'#6510F1', borderTopLeftRadius:5, borderBottomLeftRadius:5,}}></div>
                    <div style={{width:'20%', height:'100%', background:'#0AB784'}}></div>
                    <div style={{width:'15%', height:'100%', background:'#FD7E13'}}></div>
                    <div style={{width:'35%', height:'100%', background:'#506FD9', borderTopRightRadius:5, borderBottomRightRadius:5,}}></div>
                </div>

                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr>
                        <th style={{ padding: '10px', borderBottom: '2px solid #ddd', fontSize:'15px' }}>Rating</th>
                        <th style={{ padding: '10px', borderBottom: '2px solid #ddd', fontSize:'15px' }}>Count</th>
                        <th style={{ padding: '10px', borderBottom: '2px solid #ddd', fontSize:'15px'  }}>Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd', fontSize: '14px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" style={{marginRight:'10px'}}>
                                    <path fill="#506FD9" d="M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" />
                                </svg>
                                Excellent
                            </td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd', fontSize: '14px' }}>3,007</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd', fontSize: '14px' }}>50%</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd', fontSize: '14px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" style={{marginRight:'10px'}}>
                                    <path fill="#0AB784" d="M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" />
                                </svg>
                                Very Good</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd', fontSize: '14px' }}>1,674</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd', fontSize: '14px' }}>25%</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd', fontSize: '14px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" style={{marginRight:'10px'}}>
                                    <path fill="#FD7E13" d="M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" />
                                </svg>
                                Good</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd', fontSize: '14px' }}>125</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd', fontSize: '14px' }}>6%</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd', fontSize: '14px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" style={{marginRight:'10px'}}>
                                    <path fill="#506FD9" d="M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" />
                                </svg>
                                Fair</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd', fontSize: '14px' }}>98</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd', fontSize: '14px' }}>5%</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd', fontSize: '14px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" style={{marginRight:'10px'}}>
                                    <path fill="#6510F1" d="M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" />
                                </svg>
                                Poor</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd', fontSize: '14px' }}>512</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd', fontSize: '14px' }}>10%</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}