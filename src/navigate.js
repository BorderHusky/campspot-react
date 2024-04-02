document.addEventListener("DOMContentLoaded", function() {
    const activitySelector = document.getElementById('activitySelector');
    
    activitySelector.addEventListener('change', function() {
        const selectedOption = activitySelector.value;
        if (selectedOption !== 'Select') {
            window.location.href = selectedOption;
        }
    });

    // Add event listener for the pageshow event
    window.addEventListener('pageshow', function(event) {
        // Reset the dropdown to its default value when the page loads
        const dropdown = document.querySelector('.homepage__ATS');
        dropdown.selectedIndex = 0;
    });
});


