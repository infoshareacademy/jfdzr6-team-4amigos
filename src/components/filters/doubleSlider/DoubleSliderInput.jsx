import React, { useState } from 'react'
import styled from "styled-components"

const MultiRangeSpan = styled.div`
    position: relative;
   height: 50px;

   input[type=range] {
   box-sizing: border-box;
   appearance: none;
   width: 200px;
   margin: 10px;
   padding: 0 2px;
   /* Add some L/R padding to ensure box shadow of handle is shown */
   overflow: hidden;
   border: 0;
   border-radius: 1px;
   outline: none;
   background: linear-gradient(grey, grey) no-repeat center;
   /* Use a linear gradient to generate only the 2px height background */
   background-size: 100% 2px;
   pointer-events: none;

   &:active,
   &:focus {
      outline: none;
   }

   &::-webkit-slider-thumb {
      height: 18px;
      width: 18px;
      border-radius: 28px;
      background-color: #fff;
      position: relative;
      margin: 5px 0;
      /* Add some margin to ensure box shadow is shown */
      cursor: pointer;
      appearance: none;
      pointer-events: all;
      box-shadow: 0 1px 4px 0.5px rgba(0, 0, 0, 0.25);
      &::before {
            content: ' ';
            display: block;
            /* position: absolute; */
            top: 13px;
            left: 100%;
            width: 2000px;
            height: 2px;
      }
   }
}

   input[type=range] {
      position: absolute;

      &:nth-child(1) {
         &::-webkit-slider-thumb::before {
            background-color: red;
         }}

         &:nth-child(2) {
         background: none;

         &::-webkit-slider-thumb::before {
             background-color: #FF8020; 
         }
      }
   }
`

const DoubleSliderInput = () => {
    const [upper, setUpper] = useState(30)
    const [lower, setLower] = useState(20)
    const [formData, setFormData] = useState({})

    const handleUpperSlider = (e) => {
        setUpper(parseInt(e.target.value))
        if (upper < lower + 4) {
            setLower(upper - 4)
            if (lower === e.target.min) {
                setLower(0)
                setUpper(8)
            }
        }
    }

    const handleLowerSlider = (e) => {
        setLower(parseInt(e.target.value))
        if (lower > upper - 4) {
            setUpper(lower + 4)

            if (upper === e.target.max) {
                setUpper(parseInt(e.target.max))
                setLower(parseInt(e.target.max - 5))
            }

        }
    }
    return (
        <MultiRangeSpan>
            <div>
                <input name='lower' type="range" min="18" max="78" value={lower} onChange={handleLowerSlider} />
                <input type="range" min="19" max="80" value={upper} onChange={handleUpperSlider} />
            </div>
            <div>
                <span>od {lower} do {upper} lat</span>
            </div>
        </MultiRangeSpan>
    )
}

export default DoubleSliderInput