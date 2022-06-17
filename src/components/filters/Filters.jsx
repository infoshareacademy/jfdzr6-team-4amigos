import React from 'react'
import DoubleSliderInput from './doubleSlider/DoubleSliderInput'
import { FiltersSection } from './FiltersStyle'

const Filters = () => {
    return (
        <FiltersSection>
            <form>
                <span>Wiek</span>
                <DoubleSliderInput />
                <div>
                    <label>tylko ze zdjęciem</label>
                    <input type="radio" value="tak" name="onlyPicture" checked />
                    <input type="radio" value="nie" name="onlyPicture" />
                </div>
                <button>Filtruj</button>
            </form>

        </FiltersSection>
    )
}

export default Filters