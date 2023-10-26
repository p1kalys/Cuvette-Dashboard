/* Map.js */
import React from 'react';

import CanvasJSReact from './canvasjs.react';
var Component = React.Component;

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default class Map extends Component {	
    render(props) {
      const options = {
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        animationEnabled: true,	
        data: [{				
                  type: "spline",
                //   xValueFormatString: "##.00mn",
                  dataPoints: [
                      { x: 0  , y:10  },
                      
                      { x: 20 , y:30  },
                     
                      {  x: 40 , y:30  },
                     
                      { x: 60 , y:25 },
                    
                      { x:80 , y:10 },
                     
                      {  x: 100 , y:10  }
                  ]
         },{
            type: "column",
            toolTipContent: "<h6>{x}% Percentile</h6>  Your score",
            dataPoints: [
                { x:this.props.perc ,y:40,
                  color: "rgba(67, 138, 246, 0.10)"  }
                
            ]
         }]
     }
     
          
     return (
        <div>
          <CanvasJSChart options = {options}
          />
        </div>
      );
    }
  }