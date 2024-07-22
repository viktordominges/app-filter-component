import './app-filter.css'; // Import CSS styles for the AppFilter component

// Define the AppFilter functional component
const AppFilter = (props) => {
    
    // Array of filter button data, each with a name and label
    const buttonsData = [
        {name: 'all', label: 'All employees'},
        {name: 'rise', label: 'Up for promotion'},
        {name: 'salaryMoreWhen1000', label: 'Salary more than $1000'}
    ]
    
    // Generate button elements based on buttonsData
    const buttons = buttonsData.map(({name, label}) => {
        // Determine if the button should be active based on the current filter
        const active = props.filterWord === name;
        // Assign appropriate CSS class based on the active state
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button 
                className={`btn ${clazz}`} // Dynamically assign classes for styling
                type="button"
                key={name} // Unique key for each button
                onClick={() => props.onSelectFilter(name)}> {/*Attach click handler to set the filter*/}
                    {label} {/* Display the button label */}
            </button>
        )
    })

    // Render the button group
    return (
        <div className="btn-group">
            {buttons} {/* Render the array of buttons */}
        </div>
    );
}

export default AppFilter; // Export the AppFilter component as the default export
