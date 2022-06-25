import React, { useState } from "react";
import styled from "styled-components";

const AgeDiv = styled.div`
  span {
    font-size: 12px;
  }
`;

const MultiRangeSpan = styled.div`
  position: relative;
  height: 30px;

  input[type="range"] {
    box-sizing: border-box;
    appearance: none;
    width: 200px;
    padding: 0 2px;
    overflow: hidden;
    border: 0;
    border-radius: 5px;
    outline: none;
    background: linear-gradient(#ff8020, #ff8020) no-repeat center;
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
        content: " ";
        display: block;
        /* position: absolute; */
        top: 13px;
        left: 100%;
        width: 2000px;
        height: 2px;
      }
    }
  }

  input[type="range"] {
    position: absolute;

    &:nth-child(1) {
      &::-webkit-slider-thumb::before {
        background-color: red;
      }
    }

    &:nth-child(2) {
      background: none;

      &::-webkit-slider-thumb::before {
        background-color: #ff8020;
      }
    }
  }
`;

const DoubleSliderInput = ({ register }) => {
  const [upper, setUpper] = useState(30);
  const [lower, setLower] = useState(20);

  const handleUpperSlider = (e) => {
    setUpper(parseInt(e.target.value));
    if (upper < lower + 1) {
      setLower(upper - 1);
      if (lower === e.target.min) {
        setLower(18);
      }
    }
  };

  const handleLowerSlider = (e) => {
    setLower(parseInt(e.target.value));
    if (lower > upper - 1) {
      setUpper(lower + 1);

      if (upper === e.target.max) {
        setUpper(parseInt(e.target.max));
      }
    }
  };
  return (
    <>
      <AgeDiv>
        <span>
          od {lower} do {upper} lat
        </span>
      </AgeDiv>
      <MultiRangeSpan>
        <div>
          <input
            name="lower"
            type="range"
            min="18"
            max="78"
            value={lower}
            {...register("lower")}
            onChange={handleLowerSlider}
          />
          <input
            type="range"
            min="19"
            max="80"
            value={upper}
            {...register("upper")}
            onChange={handleUpperSlider}
          />
        </div>
      </MultiRangeSpan>
    </>
  );
};

export default DoubleSliderInput;
