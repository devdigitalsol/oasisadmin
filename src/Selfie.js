import axios from "axios";
import * as XLSX from "xlsx";
import { useEffect, useState } from "react";
const Selfie = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          "https://oasisengagement.in/admin/get-selfie-data.php"
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
    XLSX.writeFile(wb, `selfie.xlsx`);
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
                  <th>Photo</th>
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
                      <td>
                        <a
                          href={`https://oasisengagement.in/selfie/${item.photo}`}
                          rel="noreferrer"
                          target="_blank"
                        >
                          view
                        </a>
                      </td>
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
export default Selfie;
