import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
    const [list, setList] = useState(new Values('#f15025').all(10))
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            let colors = new Values(color).all(10);
            setList(colors);
        } catch (error) {
            setError(true);
        }
    }
    return (
        <section>
            {
                list.map((color, index) => {
                    return (
                        <SingleColor 
                            key={index}
                            {...color}
                            index={index}
                            hexColor={color.hex}
                        />
                    )
                })
            }
        </section>
    )
}

export default App;