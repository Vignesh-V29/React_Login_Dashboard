import React,{useState,useEffect} from 'react';
import '../../App.css';

const ErrorAlert = ({field}) => {

    const [show, setShow] = useState(false)

    useEffect(() => {
        setShow(prevState=>!prevState)
    }, [])

    return (
        <>
        {show ?
        <div className="serverError">
            <h1>{`${field}`}</h1> 
        </div>
        : null}
        </>
    )
}

export default ErrorAlert
