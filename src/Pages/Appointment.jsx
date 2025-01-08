import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AppContext } from "../Context/AppContext";

const Appointment = () => {
    const {docId}= useParams() 
    const {doctors} = useContext(AppContext);
    const [docInfo, setDocInfo]= useState(null)
    const fetchDocInfo = async()=>{
        const doctorInfo = doctors?.find(doc=>doc._id===docId)
        setDocInfo(doctorInfo);
    }
    useEffect(()=>{
        
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Appointment;