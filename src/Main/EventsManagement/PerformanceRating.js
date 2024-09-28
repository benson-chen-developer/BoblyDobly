import React from 'react';
import { Header } from '../Shared/Header';

const data = [
  { rating: "5.0", count: 4230, percentage: '58%' },
  { rating: "4.0", count: 1416, percentage: '24%' },
  { rating: "3.0", count: 980, percentage: '16%' },
  { rating: "2.0", count: 798, percentage: '12%' },
  { rating: "1.0", count: 401, percentage: '8%' },
];

export const Star = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
    style={{ fill: filled ? '#506FD9' : 'none', stroke: '#506FD9', strokeWidth: '1'}}
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export const PerformanceRating = () => {
  return (
    <div className='blk' style={{height:'49%'}}>
      <div className='blk2'>

        <Header name="Performance Rating"/>

        <div style={{height:'50px', display:'flex', width:'100%', alignItems:'center', marginTop:'5px'}}>
          <h2 style={{fontWeight:'bold', marginRight:'5px'}}>4.8</h2>
          {Array.from({ length: 5 }, (_, starIndex) => (
            <Star key={starIndex} filled={starIndex < 4} />
          ))}
        </div>

        <div>
          <p style={{color:'grey', fontSize:'14px', margin:'0'}}>Measures the quality or your event's performance.</p>
        </div>

        <div style={{ width: '100%' }}>
          {data.map((item, index) => (
            <tr
              key={index}
              style={{borderBottom: index !== data.length - 1 ? '1px solid #F2F5F9' : 'none',}}
            >
              <td style={{ padding: '10px' }}>
                <b>{item.rating}</b>
              </td>
              <td style={{ width: '65%', display: 'flex', alignItems: 'center', height: '10px', marginTop: '5px' }}>
                {Array.from({ length: 5 }, (_, starIndex) => (
                  <Star key={starIndex} filled={starIndex < item.rating} />
                ))}
              </td>
              <td style={{ padding: '10px' }}>
                <b>{item.count}</b>
              </td>
              <td style={{ padding: '10px' }}>
                <p style={{ margin: 0 }}>{item.percentage}</p>
              </td>
            </tr>
          ))}
        </div>

      </div>
     
    </div>
  );
};
