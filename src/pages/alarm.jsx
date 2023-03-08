import Timezone from "../components/timeZones";
import "./alarm.css"
import { useEffect } from "react";
import DataService from "../services/dataService";
import { useState } from 'react';



function Alarm(){
    let[timezones, setTimezones] = useState([]);


    const loadAlarm = async () => {
        let service = new DataService();

    }

    useEffect(() => {
        loadAlarm();
    }, []); 

return(
<div className="wrapper">
    <h1 className="a">Home Alarm</h1>
    <h4 className="b1">(Select from {timezones.length} timezones)</h4>
    
    {timezones.map((tmzn) => (
    
    <Timezone key={tmzn._id} data={tmzn} />
     ))}
    
    
    </div>
    );
}

export default Alarm;


