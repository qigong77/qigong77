import React, { useState, useEffect } from "react";
import data from './data';


function App() {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = React.useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);

    return (
        <section>
            <div>
                {
                    people.map((person, personIndex) => {
                        const { id, image, name, title, quote } = person;

                        let position = 'nextSlide';
                        if (personIndex === index) {
                            position = 'activeSlide';
                        }
                        if (
                            personIndex === index - 1 ||
                            (index === 0 && personIndex === people.length - 1)
                        ) {
                            position = 'lastSlide';
                        }

                        return (
                            <article className={position} key={id}>
                            </article>
                        );
                    })
                }
            </div>
            <button onClick={() => setIndex(index - 1)}>
                +
            </button>
            <button onClick={() => setIndex(index + 1)}>
                -
            </button>
        </section>
    )
}

export default App;