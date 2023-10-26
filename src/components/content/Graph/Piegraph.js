/* piegraph.js */
import React from 'react';

import CanvasJSReact from './canvasjs.react';
var Component = React.Component;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default class Piegraph extends Component {	
    render(props) {
      const options = {
        animationEnabled: true,
        outerWidth:10,
        innerWidth:5,
        
        
        data: [{
            type: "doughnut",
            startAngle: 60,
            radius: 80,
            theme:"Dark2",
            // innerRadius: 10,
            // outerRadius: 0,
           // indexLabelFontSize: 10,
           // indexLabel: "{y}",
            // toolTipContent: "{y} correct",
            dataPoints: [
                
                { y: this.props.score, toolTipContent: "{y} Correct", color: "rgba(67, 138, 246, 0.10)"},
                
                { y: 15-this.props.score, toolTipContent: "{y} Incorrect", color: "#438AF6"}
            ]
            
        }]
    }
     
          
     return (
        <div className='pie'>
          <CanvasJSChart options = {options}
          />
        </div>
      );
    }
  }