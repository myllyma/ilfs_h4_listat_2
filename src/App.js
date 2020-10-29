import './App.css';
import React, {useState, useEffect} from 'react';

const workHoursSetUpList = [
  {name: "maanantai", work_hours: 5},
  {name: "tiistai", work_hours: 7},
  {name: "keskiviikko", work_hours: 3},
  {name: "torstai", work_hours: 5},
  {name: "perjantai", work_hours: 0},
  {name: "lauantai", work_hours: 9},
  {name: "sunnuntai", work_hours: 12}
];

const WorkHours = () => {
  const [weeklyWorkHours, setWeeklyWorkHours] = useState([]);

  useEffect(() => {
    setWeeklyWorkHours(workHoursSetUpList);
  }, []);

  useEffect(() => {
    console.log("weeklyWorkHours: ", weeklyWorkHours)
  }, [weeklyWorkHours]);

  // 2.2 a
  const averageByFor = () => {
    let average = 0;
    for (let i = 0; i < weeklyWorkHours.length; ++i) {
      average = average + weeklyWorkHours[i].work_hours;
    }

    average = average / weeklyWorkHours.length;
    return(average);
  }

  // 2.2 b
  const averageByReduce = () => {
    let average = weeklyWorkHours.reduce((acc, cur) => {
      return(acc + cur.work_hours);
    }, 0);
    
    average = average / weeklyWorkHours.length;
    return(average);
  }

  // 2.3 a
  const minByFor = () => {
    let minimumValue = Infinity;
    for (let i = 0; i < weeklyWorkHours.length; ++i) {
      minimumValue = Math.min(minimumValue, weeklyWorkHours[i].work_hours);
    }
    return(minimumValue);
  }

  // 2.3 b
  const minByReduce = () => {
    let minimumValue = weeklyWorkHours.reduce((min, cur) => Math.min(min, cur.work_hours), Infinity);
    return(minimumValue);
  }

  // 2.3 a
  const maxByFor = () => {
    let maximumValue = -Infinity;
    for (let i = 0; i < weeklyWorkHours.length; ++i) {
      maximumValue = Math.max(maximumValue, weeklyWorkHours[i].work_hours);
    }

    return(maximumValue);
  }

  // 2.3 b
  const maxByReduce = () => {
    let maximumValue = weeklyWorkHours.reduce((max, cur) => Math.max(max, cur.work_hours), -Infinity);
    return(maximumValue);
  }

  const handleWorkHourChange = (index) => (event) => {
    const newWeeklyWorkHours = JSON.parse(JSON.stringify(weeklyWorkHours));
    console.log("index: ", index, "event:", event.target.value);
    newWeeklyWorkHours[index].work_hours = Number(event.target.value);
    setWeeklyWorkHours(newWeeklyWorkHours);
  }


  return(
    <div className="workHours">
      <div className="weekdayListItem"><p className="label">Viikonpäivä</p><p>Käytetyt tunnit</p></div>
      {weeklyWorkHours.map((day, index) => <div key={index} className="weekdayListItem"><p className="label">{day.name}</p><input value={weeklyWorkHours[index].work_hours} onChange={handleWorkHourChange(index)}></input></div>)}
      <div className="weekdayListItem"><p className="label">keskiarvo</p><p>for: {averageByFor()} reduce: {averageByReduce()}</p></div>
      <div className="weekdayListItem"><p className="label">min</p><p>for: {minByFor()} reduce: {minByReduce()}</p></div>
      <div className="weekdayListItem"><p className="label">max</p><p>for: {maxByFor()} reduce: {maxByReduce()}</p></div>
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
