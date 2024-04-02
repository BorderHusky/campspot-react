// Function to check if it's Monday
function isMonday() {
    const today = new Date();
    return today.getDay() === 1; // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
}

// Function to fetch activities from JSON file
async function fetchActivities() {
    try {
        // Fetch data from JSON file
        const response = await fetch('AOW.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching activities:', error);
        return [];
    }
}

// Function to update the activity of the week
async function updateActivityOfTheWeek() {
    // Clear local storage
    //localStorage.clear();

    // Check if it's not Monday and there's a last update date
    const lastUpdate = localStorage.getItem('lastUpdate');
    if (!isMonday() && lastUpdate) {
        // Retrieve the last selected activity from localStorage
        const lastSelectedActivity = JSON.parse(localStorage.getItem('lastSelectedActivity'));
        if (lastSelectedActivity) {
            // Populate the last selected activity details in the AOW-info div
            const AOWInfoDiv = document.querySelector('.AOW-info');
            AOWInfoDiv.innerHTML = `
                <p><strong>${lastSelectedActivity.name}</strong></p>
                <p>${lastSelectedActivity.description}</p>
                <div class="equipmentstaff">
                    <p><strong>Equipment Needed:</strong></p>
                    <ul>
                        ${lastSelectedActivity.equipmentNeeded.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                    <p><strong>Staff Needed:</strong></p>
                    <ul>
                        ${lastSelectedActivity.staffNeeded.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        // Log the message about not updating activity
        console.log("Not updating activity. It's not Monday and an activity has been updated previously.");
        return;
    }

    // Fetch activities from JSON file
    const activities = await fetchActivities();

    // Select a random activity from the fetched data
    const randomIndex = Math.floor(Math.random() * activities.length);
    const selectedActivity = activities[randomIndex];

    // Log the selected activity
    console.log('Selected Activity:', selectedActivity);

    // Populate the activity details in the AOW-info div
    const AOWInfoDiv = document.querySelector('.AOW-info');
    AOWInfoDiv.innerHTML = `
        <p><strong>${selectedActivity.name}</strong></p>
        <p>${selectedActivity.description}</p>
        <div class="equipmentstaff">
            <p><strong>Equipment Needed:</strong></p>
            <ul>
                ${selectedActivity.equipmentNeeded.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <p><strong>Staff Needed:</strong></p>
            <ul>
                ${selectedActivity.staffNeeded.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `;

    // Store the selected activity in localStorage
    localStorage.setItem('lastSelectedActivity', JSON.stringify(selectedActivity));

    // Update the last update date
    localStorage.setItem('lastUpdate', new Date().toISOString());
}

// Call the function to update the activity of the week
updateActivityOfTheWeek();