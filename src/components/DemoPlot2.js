import React from 'react'
import { AreaChart, 
    Area, 
    ResponsiveContainer,
    XAxis,
    YAxis
 } from 'recharts';

const DemoPlot2 = () => {
    const data = [{x:0,y:0, z: 10},{x:1000,y:62, z: 55},{x:2000,y:124, z:110},{x:3000,y:186, z:110},{x:4000,y:248, z:110},{x:5000,y:310, z:110},{x:6000,y:372, z:110},{x:7000,y:434, z:110},{x:8000,y:496, z:110},{x:9000,y:558, z:110},{x:10000,y:620, z:110},{x:11000,y:682, z:110},{x:12000,y:744, z:110}]
    
   
      var delayed
    return(
        <div
        height="500px"
        width="800px"
        >
        hello hello
        
            <AreaChart 
            data={data}
            height={500}
            width={800}
           
            >
                <Area type="monotone" dataKey="y" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                
                <XAxis hide={true} dataKey="x" />
                <YAxis hide={true} />
            </AreaChart>
            
        </div>
    )
}

export default DemoPlot2