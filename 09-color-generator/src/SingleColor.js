import React, { useEffect } from "react";
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
    const bcg = rgb.join(',');
    const hex = rgbToHex(...rgb);
    const hexValue = `#${hexColor}`
    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        }, 3000)
        return () => clearTimeout(timeout)
    }, [alert]);
    return (
        <article
            className={`color ${index > 10 && 'color-light'}`}
            style={{ backgroundColor: `rgb(${bcg})` }}
            onClick={() => {
                setAlert(true);
                navigator.clipboard.writeText(hexValue)
            }}
        >
            {alert && <p>copied</p>}
        </article>
    )
}

export default SingleColor;