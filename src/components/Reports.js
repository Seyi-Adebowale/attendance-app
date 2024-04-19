import React, { useState } from 'react';
import * as XLSX from 'xlsx'; 
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const exportToExcel = () => {
    const table = document.getElementById('attendance-table');
    const ws = XLSX.utils.table_to_sheet(table);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Attendance');
    XLSX.writeFile(wb, 'attendance.xlsx');
  };

function exportToPDF() {
  const doc = new jsPDF();
  doc.autoTable({ html: '#attendance-table' });
  doc.save('attendance.pdf');
}

function formatDate(selectedDate) {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return new Date(selectedDate).toLocaleDateString('en-US', options);
}

function Reports() {
    const [selectedDate, setSelectedDate] = useState('');
    const [displayDate, setDisplayDate] = useState('');
  
    React.useEffect(() => {
      const currentDate = new Date().toISOString().split('T')[0];
      setSelectedDate(currentDate);
      setDisplayDate(formatDate(currentDate));
    }, []);
  
    const handleDateChange = (e) => {
      setSelectedDate(e.target.value);
    };
  
    const handleUpdate = () => {
      setDisplayDate(formatDate(selectedDate));
    };
  
    return (
      <main>
        <div className="report-container">
          <button className="generate-report-btn viewBtn reportsBtn">Generate New Report</button>
          <div className="date-selection">
            <label htmlFor="selected-date">Select Date:</label>
            <input
              type="date"
              id="selected-date"
              name="selected-date"
              value={selectedDate}
              placeholder={selectedDate}
              onChange={handleDateChange}
            />
            <button className='updateBtn' onClick={handleUpdate}>Update</button>
          </div>
          <div className="report">
            <table id="attendance-table">
              <thead>
                <tr>
                  <th colSpan="8">Daily Attendance Report</th>
                </tr>
                <tr>
                  <th colSpan="8">{displayDate}</th>
                </tr>
                <tr>
                  <th>#</th>
                  <th>Child's Name</th>
                  <th>Check-In Time</th>
                  <th>Check-In By</th>
                  <th>Check-Out Time</th>
                  <th>Check-Out By</th>
                  <th>Total Time</th>
                  <th>Overtime</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>08:00 AM</td>
                  <td>Teacher A</td>
                  <td>02:00 PM</td>
                  <td>Teacher B</td>
                  <td>6 hours</td>
                  <td>0 hours</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jane Smith</td>
                  <td>08:15 AM</td>
                  <td>Teacher C</td>
                  <td>01:45 PM</td>
                  <td>Teacher D</td>
                  <td>5.5 hours</td>
                  <td>0 hours</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Jane Smith</td>
                  <td>08:15 AM</td>
                  <td>Teacher C</td>
                  <td>01:45 PM</td>
                  <td>Teacher D</td>
                  <td>5.5 hours</td>
                  <td>0 hours</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Jane Smith</td>
                  <td>08:15 AM</td>
                  <td>Teacher C</td>
                  <td>01:45 PM</td>
                  <td>Teacher D</td>
                  <td>5.5 hours</td>
                  <td>0 hours</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Jane Smith</td>
                  <td>08:15 AM</td>
                  <td>Teacher C</td>
                  <td>01:45 PM</td>
                  <td>Teacher D</td>
                  <td>5.5 hours</td>
                  <td>0 hours</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Jane Smith</td>
                  <td>08:15 AM</td>
                  <td>Teacher C</td>
                  <td>01:45 PM</td>
                  <td>Teacher D</td>
                  <td>5.5 hours</td>
                  <td>0 hours</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Jane Smith</td>
                  <td>08:15 AM</td>
                  <td>Teacher C</td>
                  <td>01:45 PM</td>
                  <td>Teacher D</td>
                  <td>5.5 hours</td>
                  <td>0 hours</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Jane Smith</td>
                  <td>08:15 AM</td>
                  <td>Teacher C</td>
                  <td>01:45 PM</td>
                  <td>Teacher D</td>
                  <td>5.5 hours</td>
                  <td>0 hours</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Jane Smith</td>
                  <td>08:15 AM</td>
                  <td>Teacher C</td>
                  <td>01:45 PM</td>
                  <td>Teacher D</td>
                  <td>5.5 hours</td>
                  <td>0 hours</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
            <div className="download-options">
              <button className="viewBtn reportsBtn" onClick={exportToExcel}>Export to Excel</button>
              <button className="viewBtn reportsBtn" onClick={exportToPDF}>Export to PDF</button>
            </div>
          </div>
        </div>
      </main>
    );
  }
  

export default Reports;
