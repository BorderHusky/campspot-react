import React from 'react';
import './ActivitySection.css'; // Import CSS file for styling

function ActivitySection() {
  return (
    <div className="homepage__activities">
      <div className="homepage__AOW">
        <h3>Activity of the Week!</h3>
        <div className="AOW-info"></div>
      </div>
      <div className="homepage__AT">
        <p><strong>Activity Resources</strong></p>
        <select className="homepage__ATS" id="activitySelector">
          <option value="Select">Select Activity Type</option>
          <option value="individual.html">Individual Activities</option>
          <option value="group.html">Small & Large Group Activities</option>
          <option value="allcamp.html">All Camp Activities</option>
        </select>
        <p> Have an idea for an activity we should add? </p>
        <p> Submit it <a href="activitysubmit.html">here!</a> </p>
      </div>
    </div>
  );
}

export default ActivitySection;