import React from 'react'
import { Header } from '../Shared/Header'

export const ProfitMarginPercent = () => {
    const bars = [
        {val: 29.7, color: '#506FD9'},
        {val: 52.8, color: '#84B6FF'},
        {val: 18.3, color: '#4B5365'},
    ]

    const profits = [
        {val: 29.7, text: 'Gross Profit'},
        {val: 52.8, text: 'Operating Profit'},
        {val: 18.3, text: 'Net Profit'},
    ]

    return (
        <div style={{
            width:'49%', height:'100%', background:'#fff', borderRadius:10, 
            boxShadow:'0px 4px 10px rgba(0, 0, 0, 0.1)', display:'flex', flexDirection:'column',
            justifyContent:'center', alignItems:'center', display:'flex'
        }}>
            <div style={{width:'95%', height:'95%'}}>
                <Header name="Profit Margin (%)"/>

                <p style={{fontSize:'15px', marginTop:5}}>
                    Profit margin is a measure of profitability. It is calculated by finding the profit as a percentage of the revenue.
                </p>

                <div style={{display:'flex', height:'27%', marginTop:'30px'}}>
                    {bars.map((bar, index) => 
                        <div style={{
                            width: `${bar.val}%`, height: '100%', background:bar.color, display:'flex',
                            justifyContent:'center', alignItems:'center'
                        }}>
                            <p style={{color:'#fff', margin:0}}>{bar.val}%</p>
                        </div>
                    )}
                </div>

                <div style={{display:'flex', height:'30%', marginTop:50}}>
                    {profits.map((profit, index) => 
                        <div style={{width:'30%'}}>
                            <p style={{fontSize:'15px', color:'grey', margin:0}}>{profit.text}</p>
                            <b style={{fontSize:'24px'}}>{profit.val}%</b>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
