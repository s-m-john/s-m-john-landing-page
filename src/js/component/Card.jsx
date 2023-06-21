import React from 'react';

export default function Card(props) {
    return (
        <div className="container">
            <div className="image"></div>
            <div className="content">
                {props.textcontent}
            </div>
            <div className="actions"></div>
        </div>
    )
} 