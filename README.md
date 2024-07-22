# app-filter-component

Explanation:
Imports: The code starts with importing the CSS styles specific to the AppFilter component. This ensures that the styling is encapsulated and does not affect other components.

AppFilter Functional Component: This stateless functional component is responsible for rendering filter buttons that allow users to filter employees based on different criteria.

buttonsData Array: An array of objects is defined, where each object represents a filter button with a name and label:

name: A unique identifier for the filter.
label: The text that will be displayed on the button.
Buttons Mapping:

The buttonsData array is mapped to dynamically generate button elements.
Active State: For each button, the active variable checks if the current filter (props.filterWord) matches the button's name.
Dynamic Class Assignment: The clazz variable assigns the appropriate CSS class based on whether the button is active or not (btn-light for active and btn-outline-light for inactive).
Button Element: Each button element includes a unique key (the button's name), a type attribute, a click handler (onClick) to update the filter, and the button's label as its content.
Render Method:

The return statement renders a div with the class btn-group to group the buttons.
The generated buttons are inserted into this div via the {buttons} expression.
Export: The component is exported as the default export, making it reusable in other parts of the application.

This code is efficient and well-structured, making use of functional components and dynamic rendering based on props. The separation of data (buttonsData) from UI logic (mapping to buttons) is a good practice that enhances readability and maintainability.
