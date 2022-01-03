import "./GoogleCalendar.css";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function GoogleCalendar() {
  //////////////////////////////////////////////////////////////////////////
  // State
  const [eventsList, setEventsList] = useState(["Sign in to display events."]);
  const [signInStatus, setSignInStatus] = useState(false);

  // Constants
  const gapi = window.gapi;
  const CLIENT_ID = process.env.REACT_APP_GOOGLE_CALENDAR_CLIENT_ID;
  const API_KEY = process.env.REACT_APP_GOOGLE_CALENDAR_API;
  const DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  const SCOPES = "https://www.googleapis.com/auth/calendar.events";
  //////////////////////////////////////////////////////////////////////////////

  // Sign the user in upon button click & get events
  const handleSignInClick = () => {
    gapi.load("client:auth2", () => {
      //Init Client
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });

      // Request SignIn and Get Events
      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(
          () => {
            setSignInStatus(true);
            gapi.client.calendar.events
              .list({
                calendarId: "primary",
                timeMin: new Date().toISOString(),
                showDeleted: false,
                singleEvents: true,
                maxResults: 10,
                orderBy: "startTime",
              })
              .then((response) => {
                const events = response.result.items;

                // Check for events. One event or more will display
                if (events.length > 0) {
                  const eventListArray = events.map(function (event) {
                    let summary = event["summary"];
                    let timeStart = event.start["dateTime"];
                    let timeEnd = event.end["dateTime"];

                    let getLocalDate = (date) => {
                      return new Date(date).toLocaleDateString();
                    };

                    let getLocalTime = (time) => {
                      return new Date(time).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      });
                    };

                    let printStartTime = getLocalTime(timeStart);
                    // let printEndTime = getLocalTime(timeEnd);
                    let printDate = getLocalDate(timeStart);
                    let key = uuid();

                    //Returns each event in a new line
                    return (
                      <div key={key} className="eventListIndividualContainer">
                        <div className="dateBox">
                          <div className="dateBox">
                            <p className="dateText">{printDate}</p>
                          </div>
                        </div>
                        <div className="eventTimeSummary">
                          <div className="timeBox">
                            <div className="startTime">{printStartTime}</div>
                            {/* <div className="endTime">{printEndTime}</div> */}
                          </div>

                          <div className="summaryBox">
                            <p className="summaryText">{summary}</p>
                          </div>
                        </div>
                      </div>
                    );
                  });

                  // Update state of eventListArray to events
                  setEventsList(eventListArray);
                } else {
                  // Events length less than 0. No events planned. Update state "No Events"
                  setEventsList("No Events Planned");
                }
              });
          },
          function (error) {
            //Log error to console. Update state to "Unable to retrieve..."
            console.log(error);
            setEventsList("Unable to retrieve events");
          }
        );
    });
  };

  // Sign out the user upon button click.
  const handleSignoutClick = () => {
    gapi.auth2.getAuthInstance().signOut();
    setEventsList(["Sign in to display events."]);
    setSignInStatus(false);
  };

  /////////////////////////////////////////////////////////////////////////
  // Return
  return (
    <div className="calendarContainer">
      <div className="buttonContainer">
        <button
          style={signInStatus ? { display: "none" } : { display: "block" }}
          className="signInButton"
          onClick={handleSignInClick}
        >
          Sign In
        </button>
        <button
          style={signInStatus ? { display: "block" } : { display: "none" }}
          className="signOutButton"
          onClick={handleSignoutClick}
        >
          Sign Out
        </button>
      </div>
      <div className="eventListContainer">{eventsList}</div>
    </div>
  );
}

export default GoogleCalendar;
