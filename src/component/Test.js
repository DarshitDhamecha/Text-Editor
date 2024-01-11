import React from 'react'

const Test = ({ label }) => {

    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        const fetchCheckedState = async () => {
            const response = await fetch("/api/get-checked-state");
            const data = await response.json();
            setIsChecked(data.checked);
        };

        fetchCheckedState();
    }, []);

    const handleOnChange = async () => {
        const response = await fetch("/api/set-checked-state", {
            method: "POST",
            body: JSON.stringify({
                checked: !isChecked,
            }),
        });
 
        if (response.status === 200) {
            setIsChecked(!isChecked);
        }
    };


    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleOnChange}
                />
                {label}
            </label>
        </div>
    )
}

export default Test
