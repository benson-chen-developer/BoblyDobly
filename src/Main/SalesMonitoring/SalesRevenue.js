import React from 'react'
import { Header } from '../Shared/Header';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

export const SalesRevenue = () => {
    const data = [
        { state: 'California', orders: 12201, earnings: '$150,200.80', color:'#E94C89' },
        { state: 'Texas', orders: 11950, earnings: '$138,910.20', color:'#10CAF0' },
        { state: 'Colorado', orders: 11198, earnings: '$132,050.00',color:'#506FD9' },
        { state: 'Missouri', orders: 9885, earnings: '$127,762.10',color:'#33D685' },
        { state: 'New York', orders: 8560, earnings: '$117,087.50',color:'#84B6FF' }
    ];
    const getColorForState = (stateName) => {
        const state = data.find(item => item.state === stateName);
        return state ? state.color : '#D9DDE7';
      };

    return (
        <div className='blk' style={{height:'100%', width:'40%'}}>
            <div className='blk2'>
                <Header name="Sales Revenue"/>

                <div style={{width:'100%', height:'100%'}}>

                    <ComposableMap projection="geoAlbersUsa" style={{width:'100%', height:'40%'}}>
                        <Geographies geography="https://cdn.jsdelivr.net/npm/us-atlas/states-10m.json">
                        {({ geographies }) =>
                        geographies.map(geo => {
                            const stateName = geo.properties.name;
                            const fillColor = getColorForState(stateName);
                            return (
                            <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    style={{
                                    default: {
                                        fill: fillColor, // Apply the color from the data
                                        stroke: "#FFFFFF",
                                        strokeWidth: 0.75,
                                        outline: "none"
                                    },
                                }}
                            />
                            );
                        })
                        }
                        </Geographies>
                    </ComposableMap>

                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                        <thead>
                            <tr style={{  }}>
                            <th style={{ padding: '10px', borderBottom: '1px solid #F2F5F9', textAlign: 'left' }}>State</th>
                            <th style={{ padding: '10px', borderBottom: '1px solid #F2F5F9', textAlign: 'right' }}>Orders</th>
                            <th style={{ padding: '10px', borderBottom: '1px solid #F2F5F9', textAlign: 'right' }}>Earnings</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                            <tr key={index}>
                                <td style={{ padding: '10px', borderBottom: '1px solid #F2F5F9', display:'flex', alignItems:'center' }}>
                                    <div style={{height:'10px', width:'10px', borderRadius:100, background:row.color, marginRight:'5px'}}></div>
                                    {row.state}
                                </td>
                                <td style={{ padding: '10px', borderBottom: '1px solid #F2F5F9', textAlign: 'right' }}>{row.orders.toLocaleString()}</td>
                                <td style={{ padding: '10px', borderBottom: '1px solid #F2F5F9', textAlign: 'right' }}>{row.earnings}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}
