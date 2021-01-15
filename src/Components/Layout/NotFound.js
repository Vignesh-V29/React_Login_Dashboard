import React,{useEffect} from 'react';

const NotFound = (props) => {

    useEffect(() => {
        props.history.goBack('/dash')
    }, [props.history])

    return (
        <div>
            <span style={styles}>4</span>
            <span style={styles}>0</span>
            <span style={styles}>4</span>
            <span style={pageStyle}>Page Not Found</span>
        </div>
    )
}

const styles={
    fontSize:'5em'
}

const pageStyle={
    fontSize:'20px',
    fontWeight:'lighter'
}

export default NotFound
