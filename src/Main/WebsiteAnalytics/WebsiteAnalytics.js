import { Acquisition } from "./Acquisition"
import { AnalyticsPerformance } from "./AnalyticsPerformance"
import { Box } from "./Box"
import { BrowserUsedByUsers } from "./BrowserUsedByUsers"
import { OrganicVisitsAndConversions } from "./OrganicVisitsAndConversions"
import { SessionsByLocation } from "./SessionsByLocation"
import { Table } from "./Table"

const boxes = [
    {
        num: "4,327",
        name: 'Click Through',
        text: 'No. of clicks to ad that consist of a single impression.',
        color: "#506FD9",
    },
    {
        num: "3,290",
        name: 'View Through',
        text: 'Estimated daily unique views per visitor on the ads.',
        color: "#84B6FE",
    },
    {
        num: "8,098",
        name: 'Total Conversions',
        text: 'Estimated total conversions on ads per impressions.',
        color: "#10CAF0",
    },
]

export const WebsiteAnalytics = () => {
    return (
        <div style={{minWidth:"100%", minHeight:'100%', background: '#F7F8FC'}}>

            {/* Everything is sort of margined a little */}
            <div style={{padding:'15px', display:'flex', flexDirection:'column'}}>

                {/* Row 1 */}
                <div style={{display:'flex', justifyContent:'space-between', marginBottom:'20px', width:'100%'}}>
                    <div style={{display:'flex', width:'100%', height:'120px', justifyContent:'space-between'}}>
                        {boxes.map((box, i) => <Box box={box} i={i}/>)}
                    </div>
                </div>


                {/* Row 2 */}
                <div style={{
                    display:'flex', justifyContent:'space-between', marginBottom:'20px', 
                    width:'100%', height:'400px'
                }}>
                    <OrganicVisitsAndConversions w="60%" h="100%"/>
                    <AnalyticsPerformance w="39%" h="100%"/>
                </div>
                
                {/* Row 2 */}
                <div style={{
                    display:'flex', justifyContent:'space-between', marginBottom:'20px', 
                    width:'100%', height:'400px'
                }}>
                    <Acquisition w="49%" h="100%"/>
                    <BrowserUsedByUsers w="49%" h="100%" />
                </div>

                {/* Row 3 */}
                <div style={{
                    display:'flex', justifyContent:'space-between', marginBottom:'20px', 
                    width:'100%', height:'400px'
                }}>
                    <SessionsByLocation w="100%" h="100%" />
                </div>

                {/* Row 4 */}
                <div style={{
                    display:'flex', justifyContent:'space-between', marginBottom:'20px', 
                    width:'100%', height:'400px'
                }}>
                    <Table w="100%" h="100%" />
                </div>
            </div>
        </div>
    )
}