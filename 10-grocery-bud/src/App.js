import { useEffect, useState } from "react";

function App() {

    const [list, setList] = useState(getLocalStorage());
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({show: false, msg: '', type: ''});
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            showAlert(true, 'danger', 'please enter value');
        } else if (name && isEditing) {
            setList(
                list.map((item) => {
                    if (item.id === editID) {
                        return {...item, title: name};
                    }
                    return item;
                })
            );
            setName('');
            setEditID(null);
            setIsEditing(false);
            showAlert(true, 'success', 'value changed');
        } else {
            showAlert(true, 'success', 'item added to the list');
            const newItem = {id: new Date().getTime().toString(), title: name};

            setList([...list, newItem]);
            setName('');
        }
    };
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);
    return (
        <></>
    )
}

export default App;