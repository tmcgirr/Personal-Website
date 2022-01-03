import React from "react";
import "./Projects.css";
import Weather from "./Components/WeatherComponent/weather";
import Clock from "./Components/ClockComponent/Clock";
import Greeting from "./Components/GreetingComponent/Greeting";
import Todolist from "./Components/Todolist/src/components/App";
import WordOfTheDay from "./Components/WordOfTheDay/WordOfTheDay";
import GoogleCalendar from "./Components/GoogleCalendar/GoogleCalendar";
import Forkify from "./Components/Forkify/Forkify";
import Omnifood from "./Components/Omnifood/Omnifood";

function Projects() {
  return (
    <div className="section-projects">
      <div className="app-container">
        <div className="top-container">
          <div className="greeting-container">
            <div className="greeting">
              <Greeting />
            </div>
            <div className="clockSection">
              <Clock />
            </div>
          </div>
        </div>

        <div className="middle-container">
          <div className="panelgroup-container">
            <div className="panel-container weatherBackground">
              <div className="panel-header">Weather</div>
              <div className="panel-body">
                <div className="weatherSection">
                  <Weather />
                </div>
              </div>
            </div>

            <div className="panel-container calendarBackground">
              <div className="panel-header">Google Calendar</div>
              <div className="panel-body">
                <GoogleCalendar />
              </div>
            </div>

            <div className="panel-container wordBackground">
              <div className="panel-header">Word Of The Day</div>
              <div className="panel-body">
                <div>
                  <WordOfTheDay />
                </div>
              </div>
            </div>

            <div className="panel-container todoBackground">
              <div className="panel-header">ToDo</div>
              <div className="panel-body">
                <div>
                  <Todolist />
                </div>
              </div>
            </div>

            <div className="panel-container todoBackground">
              <div className="panel-header">Class Project 1</div>
              <div className="panel-body">
                <div>
                  <Forkify />
                </div>
              </div>
            </div>

            <div className="panel-container todoBackground">
              <div className="panel-header">Class Project 2</div>
              <div className="panel-body">
                <div>
                  <Omnifood />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
