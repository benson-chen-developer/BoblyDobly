import { Header } from "../Shared/Header"
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const countryData = [
    { name: 'United States', value: '$150,200.80', color: '#1A96E8' },
    { name: 'India', value: '$138,910.20', color: '#FD7E13' },
    { name: 'Australia', value: '$132,050.00', color: '#DC3444' },
    { name: 'China', value: '$127,762.10', color: '#10CAF0' },
    { name: 'Brazil', value: '$117,087.50', color: '#33D685' },
    { name: 'Japan', value: '$102,994.27', color: '#FFC007' },
  ];
  const getColorForCountry = (countryName) => {
    const country = countryData.find(item => item.name === countryName);
    return country ? country.color : '#D3D3D3';
  };
  

export const SessionsByLocation = ({w, h}) => {
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
                <Header name="Sessions By Location"/>

                <div style={{display:'flex', width:'100%', height:'100%'}}>
                    {/* Graph */}
                    <div style={{width:'33%', height:'100%'}}>
                        <table class="table table-one mb-4" style={{marginTop:'10px'}}>
                            <thead>
                            <tr>
                                <th class="wd-40 pt-0">Your Top Countries</th>
                                <th class="wd-60 pt-0">&nbsp;</th>
                            </tr>
                            </thead>
                            <tbody>
                            {countryData.map((country, index) => (
                                <tr key={index}>
                                <td>
                                    <span style={{ 
                                        height: '10px', 
                                        width: '10px', 
                                        borderRadius: '50%', 
                                        background: country.color, 
                                        display: 'inline-block', 
                                        marginRight: '5px' 
                                    }} />
                                    <span className="fw-medium">{country.name}</span>
                                </td>
                                <td>{country.value}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                        <a href="" style={{
                            display: 'block',
                            width: '100%', 
                            height: '30px', 
                            lineHeight: '30px', 
                            textAlign: 'center', 
                            borderRadius: '5px', 
                            border: '1px solid #A8AEB6', 
                            textDecoration: 'none', 
                            backgroundColor: '#fff',
                            color: '#000', 
                            marginTop:'-5px'
                        }}>
                            <p style={{fontSize:'12px'}}>Show Full Report</p> 
                        </a>
                    </div>

                    {/* Map */}
                    <div style={{ width: '66%', height: '100%' }}>
                        <ComposableMap style={{width:'100%', height:'100%'}}>
                            <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json">
                                {({ geographies }) =>
                                geographies.map(geo => {
                                    const countryName = geo.properties.name;
                                    const fillColor = getColorForCountry(countryName);
                                    return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        style={{
                                            default: {
                                                fill: fillColor,
                                                stroke: "#FFFFFF",
                                                strokeWidth: 0.5,
                                                outline: "none"
                                            },
                                        }}
                                    />
                                    );
                                })
                                }
                            </Geographies>
                        </ComposableMap>
                    </div>
                </div>
            </div>
        </div>
    )
}