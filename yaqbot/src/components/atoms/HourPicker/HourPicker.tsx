import React from "react";

interface HourPickerProps{
    value: number;
    onChange: (newHour: number) => void;
}

const HourPicker :React.FC<HourPickerProps> = ({value, onChange}) =>{
    const hours = Array.from({length: 24},(_, index=>index));
}

export default HourPicker;