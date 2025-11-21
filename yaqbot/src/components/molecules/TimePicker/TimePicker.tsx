import { useState } from "react";

interface TimePickerProps{
    initialTime: string;
}

const TimePicker = ({initialTime = '09:00'}) => {
    const [hours, setHours] = useState<string>(initialTime.split(':')[0]);
    const [minutes, setMinutes] = useState<string>(initialTime.split(':')[1]);

    

}

export default TimePicker;