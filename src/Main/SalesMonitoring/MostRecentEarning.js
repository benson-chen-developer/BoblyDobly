import React from 'react'
import { Header } from '../Shared/Header'

export const MostRecentEarning = () => {
    const tags = [
        {
            num: "$1,958,104",
            text: 'Gross Earnings',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="23px" height="23px" viewBox="0 0 24 24">
                <path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v3M8 4v6m8-6v6m-4 8.5L9 20l.5-3.5l-2-2l3-.5l1.5-3l1.5 3l3 .5l-2 2L15 20z" />
            </svg>,
            color: '#506FD9'
        },
        {
            num: "$200,124.60",
            text: 'Tax Withheld',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="21px" height="21px" viewBox="0 0 16 16">
                <path fill="#fff" d="M8.5 1a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5A6.5 6.5 0 0 0 8.5 1M9 7V2.022A5.5 5.5 0 0 1 13.978 7zM7 3.522a.5.5 0 0 0-.545-.498a6 6 0 1 0 6.52 6.52a.5.5 0 0 0-.497-.544H7zM2 9a5 5 0 0 1 4-4.9v5.4a.5.5 0 0 0 .5.5h5.4A5.002 5.002 0 0 1 2 9" />
            </svg>,
            color: '#1A96E8'
        },
        {
            num: "$1,608,455.60",
            text: 'Net Earnings',
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="19px" height="19px" viewBox="0 0 14 14">
                <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M.5.5v13h13" />
                    <path d="M3.5 6.5L6 9l4-6l3.5 2.5" />
                </g>
            </svg>,
            color: '#0AB784'
        },
    ]

    const data = [
        { date: '03/05/2023', salesCount: 1050, grossEarnings: '+ $32,580.00', taxWithheld: '- $3,023.10', percentageEarnings: '4.5%' },
        { date: '03/04/2023', salesCount: 980, grossEarnings: '+ $30,065.10', taxWithheld: '- $2,780.00', percentageEarnings: '3.8%' },
        { date: '03/04/2023', salesCount: 954, grossEarnings: '+ $28,994.00', taxWithheld: '- $2,540.60', percentageEarnings: '3.3%' },
        { date: '03/02/2023', salesCount: 792, grossEarnings: '+ $25,300.90', taxWithheld: '- $2,144.60', percentageEarnings: '2.9%' },
        { date: '02/28/2023', salesCount: 788, grossEarnings: '+ $24,887.08', taxWithheld: '- $1,980.00', percentageEarnings: '2.6%' }
      ];
    

    return (
        <div className='blk' style={{height:'100%', width:'59%'}}>
            <div className='blk2'>
                <Header name="Most Recent Earnings"/>

                <div style={{width:'100%', height:'20%', display:'flex', marginTop:'15px'}}>
                    {/* Top 3 Tags */}
                    {tags.map((tag, i) => <Tag tag={tag} key={i} />)}
                </div>

                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#fff' }}>
                        <th style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left',fontSize:'14px' }}>Date</th>
                        <th style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'right',fontSize:'14px' }}>Sales Count</th>
                        <th style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'right',fontSize:'14px' }}>Gross Earnings</th>
                        <th style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'right',fontSize:'14px' }}>Tax Withheld</th>
                        <th style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'right' ,fontSize:'14px'}}>% Earnings</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                        <tr key={index}>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd',fontSize:'14px' }}>{row.date}</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'right',fontSize:'14px' }}>{row.salesCount.toLocaleString()}</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'right',fontSize:'14px', color:'#0AB784' }}>{row.grossEarnings}</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'right',fontSize:'14px', color:'#E5616A' }}>{row.taxWithheld}</td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'right',fontSize:'14px' }}>{row.percentageEarnings}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>

                <div style={{marginTop:'20px'}}>
                    <h6 style={{color:'#506FD9'}}>Download your earnings in CSV format.</h6>
                    <p style={{color:'grey', fontSize:'12px'}}>
                        Open it in a spreadsheet and perform your own calculations, graphing etc. The CSV file contains additional details, such as the buyer location.
                    </p>
                </div>
            </div>
        </div>
    )
}

const Tag = ({tag}) => {
    return(
        <div style={{width:'100%', height:'30%', borderRadius:5}}>
            <div style={{
                display:'flex', justifyContent:'center', alignItems:'center',
                background: tag.color, marginBottom:'5px',
                width:'50px', height:'50px', borderRadius:5,
            }}>
                {tag.icon}
            </div>
            <h5 style={{marginTop:'5px'}}>{tag.num}</h5>
            <h6 style={{color:'grey'}}>{tag.text}</h6>
        </div>
    )
}