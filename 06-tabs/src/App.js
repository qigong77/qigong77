import React, { useState, useEffect } from 'react';

const url = 'https://course-api.com/react-tabs-project';

function App() {

    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [value, setValue] = useState(0);

    const fetchJobs = async () => {
        const response = await fetch(url);
        const newJobs = await response.json();
        setJobs(newJobs);
        setLoading(false);
    }

    useEffect(() => {
        fetchJobs()
    }, [])

    if (loading) {
        return (
            <section>
                <h1>Loading...</h1>
            </section>
        )
    }
    const { duties } = jobs[value]
    return (
        <section>
            <div>
                {jobs.map((item, index) => {
                    return (
                        <button
                            key={item.id}
                            onClick={() => setValue(index)}
                            className={`job-btn ${index === value && 'active-btn'}`}
                        >
                            {item.company}
                        </button>
                    )
                })}
                {
                    duties.map((duty, index) => {
                        return (
                            <div key={index}>
                                <p>{duty}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default App;