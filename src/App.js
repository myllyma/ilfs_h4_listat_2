import './App.css';
import React, {useState, useEffect} from 'react';

const workHoursSetUpList = [
  {name: "maanantai", work_hours: 8},
  {name: "tiistai", work_hours: 8},
  {name: "keskiviikko", work_hours: 8},
  {name: "torstai", work_hours: 8},
  {name: "perjantai", work_hours: 8},
  {name: "lauantai", work_hours: 8},
  {name: "sunnuntai", work_hours: 8}
];

const monthSetUpList = [
  {name: "tammikuu", salary: 1000, tax: 50},
  {name: "helmikuu", salary: 1000, tax: 50},
  {name: "maaliskuu", salary: 1000, tax: 50},
  {name: "huhtikuu", salary: 1000, tax: 50},
  {name: "toukokuu", salary: 1000, tax: 50},
  {name: "kesäkuu", salary: 1000, tax: 50},
  {name: "heinäkuu", salary: 1000, tax: 50},
  {name: "elokuu", salary: 1000, tax: 50},
  {name: "syyskuu", salary: 1000, tax: 50},
  {name: "lokakuu", salary: 1000, tax: 50},
  {name: "marraskuu", salary: 1000, tax: 50},
  {name: "joulukuu", salary: 1000, tax: 50}
];

// 2.1-2.3
const WorkHours = () => {
  const [weeklyWorkHours, setWeeklyWorkHours] = useState([]);

  useEffect(() => {
    setWeeklyWorkHours(workHoursSetUpList);
  }, []);

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

// 2.4-2.5
const Salaries = () => {
  const [monthList, setMonthList] = useState([]);

  useEffect(() => {
    setMonthList(monthSetUpList);
  }, []);

  const handleSalaryChange = (index) => (event) => {
    const newMonthList = JSON.parse(JSON.stringify(monthList));
    newMonthList[index].salary = Number(event.target.value);
    setMonthList(newMonthList);
  }

  const handleTaxChange = (index) => (event) => {
    const newMonthList = JSON.parse(JSON.stringify(monthList));
    newMonthList[index].tax = Number(event.target.value);
    setMonthList(newMonthList);
  }

  return(
    <div className="salaries">
      <table>
        <thead>
          <tr><th>kuukausi</th><th>palkkatulot</th><th>tulot + 50%</th><th>veroprosentti</th><th>bruttopalkka</th></tr>
        </thead>
        <tbody>
          {monthList.map((month, index) => 
            <tr key={month.name}>
              <td>{month.name}</td>
              <td><input value={monthList[index].salary} onChange={handleSalaryChange(index)}></input></td>
              <td>{monthList[index].salary * 1.5}</td>
              <td><input value={monthList[index].tax} onChange={handleTaxChange(index)}></input></td>
              <td>{monthList[index].salary - (monthList[index].salary * (monthList[index].tax / 100))}</td>
            </tr>)}
          <tr>
            <td>summat</td>
            <td>{monthList.reduce((sum, cur) => cur.salary + sum, 0)}</td>
            <td>{monthList.reduce((sum, cur) => (cur.salary * 1.5) + sum, 0)}</td>
            <td></td>
            <td>{monthList.reduce((sum, cur) => (cur.salary - (cur.salary * (cur.tax / 100))) + sum, 0)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// 2.6-2.13
const SortTables = () => {

  // 2.6
  const sortWithJSSort = () => {
    const initialList = [1,4,100,2,5,4];
    const sortedList = initialList.sort((a, b) => a - b);
    console.log("2.6:", sortedList);
  }

  // 2.7
  const sortAlphaJSSort = () => {
    const initialList = ["1", "4", "100", "2", "5", "4"];
    const sortedList = initialList.sort((a, b) => {
      const nameA = a.toUpperCase();
      const nameB = b.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
    console.log("2.7:", sortedList);
  }

  // 2.8
  // Parametrina annettava funktio toimii käsittelijänä joka palauttaa:
  // vähemmän kuin 0, jos a < b
  // 0, jos a == b
  // enemmän kuin 0, jos a > b

  // 2.9
  const reformList1 = () => {
    const initialList = [{"ma":44}, {"pe":100}, {"ke":21}, {"ti": 66},{"la":22}];
    const sortedList = initialList.sort((a, b) => {
      const a_keys = Object.keys(a);
      const b_keys = Object.keys(b);
      if (a[a_keys[0]] < b[b_keys[0]]) {
        return -1;
      }
      if (a[a_keys[0]] > b[b_keys[0]]) {
        return 1;
      }
      return 0;
    });
    console.log("2.9", sortedList);
  }

  // 2.10
  const reformList2 = () => {
    const initialList = [{"ma":44}, {"pe":100}, {"ke":21}, {"ti": 66},{"la":22}];
    const dayOrder = ["ma", "ti", "ke", "to", "pe", "la", "su"];

    const sortedList = initialList.sort((a, b) => {
      const a_order = dayOrder.indexOf(Object.keys(a)[0]);
      const b_order = dayOrder.indexOf(Object.keys(b)[0]);
      if (a_order < b_order) {
        return -1;
      }
      if (a_order > b_order) {
        return 1;
      }
      return 0;
    });
    console.log("2.10", sortedList);
  }

  // 2.11
  const reformList3 = () => {
    const initialList = [{"ma":44}, {"pe":100}, {"ke":21}, {"ti": 66},{"la":22}];
    const filteredList = initialList.filter((item) => item[Object.keys(item)[0]] % 2 ? false : true);
    console.log("2.11", filteredList);
  }

  // 2.12
  const reformList4 = () => {
    const initialList = [{"ma":44}, {"pe":100}, {"ke":21}, {"ti": 66},{"la":22}];
    const filteredList = initialList.filter((item) => Object.keys(item)[0][1] === 'e');
    console.log("2.12", filteredList);
  }

  // 2.13
  const reformObject = () => {
    const initialObject = {"ma":44, "pe":100, "ke":21, "ti": 66, "la":22};
    const formedList = Object.keys(initialObject).map((item) => {
      return({[item]: initialObject[item]});
    });
    console.log("2.13", formedList);
  }

  sortWithJSSort();
  sortAlphaJSSort();
  reformList1();
  reformList2();
  reformList3();
  reformList4();
  reformObject();

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
