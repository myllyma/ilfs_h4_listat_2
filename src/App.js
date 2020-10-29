import './App.css';
import React, {useState, useEffect} from 'react';

const workHoursSetUpList = [
  {day: "maanantai", work_hours: 7},
  {day: "tiistai", work_hours: 6},
  {day: "keskiviikko", work_hours: 8},
  {day: "torstai", work_hours: 5},
  {day: "perjantai", work_hours: 8},
  {day: "lauantai", work_hours: 2},
  {day: "sunnuntai", work_hours: 3}
];

const WorkHours = () => {
  const [weeklyWorkHours, setWeeklyWorkHours] = useState([]);

  useEffect(() => {
    setWeeklyWorkHours(workHoursSetUpList);
  }, []);

  return(
    <div className="workHours">

    </div>
  );
}

const Salaries = () => {
  return(
    <div className="salaries">

    </div>
  );
}

const SortTables = () => {
  return(
    <div className="sortTables">

    </div>
  );
}

const App = () => {
  return (
    <div className="App">
      <WorkHours/>
      <Salaries/>
      <SortTables/>
    </div>
  );
}

export default App;
