import React from 'react'
import { BilledOpportunities } from './BilledOpurtunities'
import { Bottom } from './Bottom'
import { CreditCard } from './CreditCard'
import { ExpenseAnalytics } from './ExpenseAnalytics'
import { GraphCard } from './GraphCard'
import { IncomeExpenses } from './IncomeExpenses'
import { ProfitMargin } from './ProfitMargin'
import { ProfitMarginPercent } from './ProfitMarginPercent'
import { ProfitThisYear } from './ProfitThisYear'
import { WhiteButton } from './WhiteButton'

export const FinanceMonitoring = () => {
    return (
        <div style={{minWidth:"100%", minHeight:'100%', background: '#F7F8FC'}}>

            {/* Everything is sort of margined a little */}
            <div style={{padding:'15px', display:'flex', flexDirection:'column'}}>

                {/* Row 1 */}
                <div style={{display:'flex', justifyContent:'space-between', marginBottom:'20px'}}>
                    <h1>Welcome To Dashboard</h1>

                    <div style={{display:'flex'}}>
                        <WhiteButton text={"Share"} back="#fff" textColor="#000"/>
                        <WhiteButton text={"Print"} back="#fff" textColor="#000"/>
                        <WhiteButton text={"Generate Report"} back="#506FD9" textColor="#fff"/>
                    </div>
                </div>

                {/* Row 2 */}
                <div style={{width:'100%', height: '400px', display:'flex', justifyContent:'space-between'}}>
                    <ProfitThisYear 
                        profit={"867,036.50"}
                        upProfit="38.63"
                    />

                    <div style={{
                        height:'100%', width: '24%', flexDirection:'column', justifyContent:'space-between',
                        display:'flex'
                    }}>
                        <ProfitMargin 
                            margin={75}
                            text={"Gross Profit Margin"}
                            littleText={"The gross profit you make on each dollar of sales."}
                        />
                        <ProfitMargin 
                            margin={68}
                            text={"Net Profit Margin"}
                            littleText={"Measures your business at generating profit sales."}
                        />
                    </div>

                </div>

                {/* Row 3 */}
                <div style={{
                    width:'100%', height: '250px', display:'flex', justifyContent:'space-between',
                    marginTop: '15px'
                }}>
                    <GraphCard 
                        progress="50%" 
                        color="#506FD9" 
                        ratio="0.9:8" 
                        text="Quick Ratio Goal: 1.0 or higher" 
                        underText="Measures your Accounts Receivable / Current Liabilities"
                    />

                    <GraphCard 
                        progress="50%" 
                        color="#84B6FF" 
                        ratio="2.8:0" 
                        text="Quick Ratio Goal: 2.0 or higher" 
                        underText="Measures your Accounts Receivable / Current Liabilities"
                    />

                    <CreditCard />
                </div>

                {/* Row 4 */}
                <div style={{
                    width:'100%', height: '350px', display:'flex', justifyContent:'space-between',
                    marginTop: '15px'
                }}>
                    <IncomeExpenses />
                    <ProfitMarginPercent />
                </div>

                {/* Row 5 */}
                <div style={{
                    width:'100%', height: '300px', display:'flex', justifyContent:'space-between',
                    marginTop: '15px'
                }}>
                    <ExpenseAnalytics />
                    <BilledOpportunities />
                </div>

                {/* Row 6 */}
                <div style={{
                    width:'100%', height: '350px', display:'flex', justifyContent:'space-between',
                    marginTop: '15px'
                }}>
                    <Bottom />
                </div>
            </div>
        </div>
    )
}
