import axios from "axios";
import * as XLSX from "xlsx";
import { useEffect, useState } from "react";
const Casestudy = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          "https://oasisengagement.in/admin/get-casestudy-data.php"
        );
        setUserData(response.data);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);
  const handleExport = () => {
    var elt = document.getElementById("table-to-xls");
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    XLSX.writeFile(wb, `casestudy.xlsx`);
  };
  return (
    <div>
      {userData.length > 0 ? (
        <>
          <button className="btn" onClick={handleExport}>
            Export to excle
          </button>
          <div className="tbContainer">
            <table cellPadding="0" cellSpacing="0" width="100%">
              <thead>
                <tr>
                  <th>Sr.</th>
                  <th>Name</th>
                  <th>Place</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Empirical Treatment</th>
                  <th>Scenario 1</th>
                  <th>Scenario 2</th>
                  <th>Scenario 3</th>
                  <th>Scenario 4a</th>
                  <th>Scenario 4b</th>
                  <th>Scenario 4c</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.place}</td>
                      <td>{item.email}</td>
                      <td>{item.mobile}</td>
                      <td>{item.empirical_treatment}</td>
                      <td>{item.scenario_1}</td>
                      <td>{item.scenario_2}</td>
                      <td>{item.scenario_3}</td>
                      <td>{item.scenario_4a}</td>
                      <td>{item.scenario_4b}</td>
                      <td>{item.scenario_4c}</td>
                      <td>{item.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        "No data available"
      )}
    </div>
  );
};
export default Casestudy;
