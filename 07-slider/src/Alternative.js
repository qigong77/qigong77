import { useEffect } from "react";

function App() {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = React.useState(0);

    const nextSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex + 1;
            if (index > people.length - 1){
                index = 0;
            }
            return index;
        })
    }
    
    const prevSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex - 1
            if (index < 0) {
                index = people.length - 1;
            }
            return index;
        })
    }

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex ((oldIndex) => {
                let index = oldIndex + 1;
                if (index > people.length - 1) {
                    index = 0;
                }
                return index;
            })
        }, 5000)
        return () => {
            clearInterval(slider)
        }
    }, [index])

    return (
        <div></div>
    )
}


export default App;