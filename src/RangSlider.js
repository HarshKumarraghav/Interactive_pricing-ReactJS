import React from "react";
function RangeSlider(){
    return(
        <div class="range-slider">
        <input type="range" id="price-slider" class="range" min="0" max="4" value="2" />
    </div>
    );
}
export default RangeSlider;