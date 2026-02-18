import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                color: '#01CB22',
                width: 100,
                '& .MuiSlider-thumb': {
                    width: 18,
                    height: 18,
                    border: '1px solid #01CB22',
                    borderRadius: '50%',
                    background: `
        radial-gradient(circle, 
          #01CB22 0px, 
          #01CB22 3px, 
          #ffffff 3px, 
          #ffffff 100%
        )
      `,
                    '&:hover, &.Mui-active': {
                        boxShadow: 'none',
                    },
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
