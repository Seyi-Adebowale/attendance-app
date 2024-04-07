import React from 'react';

const Dashboard = () => {
    return (
        <main className='dashboard'>
            <div className='dashboard-container'>
                <div className='row'>
                    <div className='dashboard-item'>
                        <p className='dashboard-title title-1'>Total Registered Kids</p>
                        <h2 className='dashboard-data' id='totalKids'>30</h2>
                        <button className='viewBtn' id='totalKidsBtn'>VIEW</button>
                    </div>
                    <div className='dashboard-item'>
                        <p className='dashboard-title title-2'>Kids Present</p>
                        <h2 className='dashboard-data' id='totalKidsPresent'>25</h2>
                        <button className='viewBtn' id='totalKidsPresentBtn'>VIEW</button>
                    </div>
                    <div className='dashboard-item'>
                        <p className='dashboard-title title-3'>Kids Absent</p>
                        <h2 className='dashboard-data' id='totalKidsAbsent'>5</h2>
                        <button className='viewBtn' id='totalKidsAbsentBtn'>VIEW</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='dashboard-item'>
                        <p className='dashboard-title title-4'>Checked Out</p>
                        <h2 className='dashboard-data' id='totalCheckedOut'>20</h2>
                        <button className='viewBtn' id='totalCheckedOutBtn'>VIEW</button>
                    </div>
                    <div className='dashboard-item'>
                        <p className='dashboard-title title-5'>Not Checked Out</p>
                        <h2 className='dashboard-data' id='totalNotCheckedOut'>10</h2>
                        <button className='viewBtn' id='totalNotCheckedOutBtn'>VIEW</button>
                    </div>
                </div>

            </div>

        </main>
    );
};

export default Dashboard;
