import { Header } from "../Shared/Header"
const data = [
    {
      source: 'Organic search',
      users: 350,
      newUsers: 22,
      sessions: 5628,
      bounceRate: '25.60%',
      pagesPerSession: 1.92,
      avgSession: '00:01:05',
      transactions: 340103,
      revenue: '$2.65M',
      conversionRate: '4.50%',
    },
    {
      source: 'Social media',
      users: 276,
      newUsers: 18,
      sessions: 5100,
      bounceRate: '23.66%',
      pagesPerSession: 1.89,
      avgSession: '00:01:03',
      transactions: 321960,
      revenue: '$2.51M',
      conversionRate: '4.36%',
    },
    {
      source: 'Referral',
      users: 246,
      newUsers: 17,
      sessions: 4880,
      bounceRate: '26.22%',
      pagesPerSession: 1.78,
      avgSession: '00:01:09',
      transactions: 302767,
      revenue: '$2.1M',
      conversionRate: '4.34%',
    },
    {
      source: 'Email',
      users: 187,
      newUsers: 14,
      sessions: 4450,
      bounceRate: '24.97%',
      pagesPerSession: 1.35,
      avgSession: '00:02:07',
      transactions: 279300,
      revenue: '$1.86M',
      conversionRate: '3.99%',
    },
    {
      source: 'Other',
      users: 125,
      newUsers: 13,
      sessions: 3300,
      bounceRate: '21.67%',
      pagesPerSession: 1.14,
      avgSession: '00:02:01',
      transactions: 240200,
      revenue: '$1.51M',
      conversionRate: '2.84%',
    }
  ];
  
export const Table = ({w, h}) => {
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

                <table style={{ borderCollapse: 'collapse', width: '100%', border: '1px solid #ddd' }}>
                <thead>
                    <tr>
                        <th colSpan=".5" style={{ padding: '10px', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', backgroundColor: '#F8F9FC' }}></th>
                        <th colSpan="3" style={{ padding: '10px', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', textAlign: 'center', backgroundColor: '#F8F9FC' }}>Acquisition</th>
                        <th colSpan="3" style={{ padding: '10px', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', textAlign: 'center', backgroundColor: '#F8F9FC' }}>Behavior</th>
                        <th colSpan="3" style={{ padding: '10px', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', textAlign: 'center', backgroundColor: '#F8F9FC' }}>Conversions</th>
                    </tr>
                    <tr>
                        <th style={{ padding: '10px', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', backgroundColor: '#F8F9FC' }}>Source</th>
                        <th style={{ padding: '10px', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', backgroundColor: '#F8F9FC' }}>Users</th>
                        <th style={{ padding: '10px', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', backgroundColor: '#F8F9FC' }}>New Users</th>
                        <th style={{ padding: '10px', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', backgroundColor: '#F8F9FC' }}>Sessions</th>
                        <th style={{ padding: '10px', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', backgroundColor: '#F8F9FC' }}>Bounce Rate</th>
                        <th style={{ padding: '10px', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', backgroundColor: '#F8F9FC' }}>Pages/Session</th>
                        <th style={{ padding: '10px', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', backgroundColor: '#F8F9FC' }}>Avg. Session</th>
                        <th style={{ padding: '10px', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', backgroundColor: '#F8F9FC' }}>Transactions</th>
                        <th style={{ padding: '10px', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', backgroundColor: '#F8F9FC' }}>Revenue</th>
                        <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#F8F9FC' }}>Rate</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, index) => (
                    <tr key={index}>
                        <td style={{ padding: '10px', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd', color:'#4058AD' }}>{row.source}</td>
                        <td style={{ padding: '10px', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>{row.users}</td>
                        <td style={{ padding: '10px', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>{row.newUsers}</td>
                        <td style={{ padding: '10px', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>{row.sessions}</td>
                        <td style={{ padding: '10px', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>{row.bounceRate}</td>
                        <td style={{ padding: '10px', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>{row.pagesPerSession}</td>
                        <td style={{ padding: '10px', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>{row.avgSession}</td>
                        <td style={{ padding: '10px', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>{row.transactions}</td>
                        <td style={{ padding: '10px', borderBottom: '1px solid #ddd', borderRight: '1px solid #ddd' }}>{row.revenue}</td>
                        <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{row.conversionRate}</td>
                    </tr>
                    ))}
                </tbody>
                </table>

            </div>
        </div>
    )
}