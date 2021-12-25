import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';




const SliderInput = (props) =>{

    return(

        <Box sx={{ width: 400 }}>
      <Slider
        aria-label="Always visible"
        defaultValue={props.defaultVal}
        step={props.step}
        marks={props.marks}
        valueLabelDisplay="on"
        min = {props.min}
        max = {props.max}
        onChange={props.onChange}
      />
    </Box>
    )
}


export default SliderInput;
