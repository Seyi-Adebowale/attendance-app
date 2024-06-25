import React, { useState } from 'react';

function ProfilesPage() {
    const [activeTab, setActiveTab] = useState('users');
    const [filterActive, setFilterActive] = useState(false);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleFilterButtonClick = (e) => {
        e.stopPropagation();
        setFilterActive(!filterActive);
    };

    const handleCheckboxChange = () => {
        const isChecked = document.querySelectorAll("input[type='checkbox']:checked").length > 0;
        if (isChecked) {
            // Apply highlight class or any other logic
        } else {
            // Remove highlight class or any other logic
        }
    };

    const handleClearFilter = () => {
        // Uncheck all checkboxes
        const checkboxes = document.querySelectorAll('.filters input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });
    };

    return (
        <main className='profiles-main'>
            <div className='profiles-container'>
                {/* Sidebar */}
                <div className="sidebar">
                    <div className="tab-links">
                        <button
                            className={activeTab === 'users' ? 'active' : ''}
                            onClick={() => handleTabClick('users')}
                        >
                            Users
                        </button>
                        <button
                            className={activeTab === 'kids' ? 'active' : ''}
                            onClick={() => handleTabClick('kids')}
                        >
                            Kids
                        </button>
                    </div>

                </div>

                {/* Main Content */}
                <div className="main-content">
                    {/* Conditional rendering based on activeTab */}
                    {activeTab === 'users' && (
                        <>
                            <div className="top-right top-right-user">
                                <button className='profiles-btn add-btn'>Add User</button>
                            </div>
                            <div className='users-list'>
                                {/* Custom layout for users list */}
                                <div className='user'>
                                    <span>Admin1</span>
                                    <span>
                                        <button className="view-btn"><i className="fas fa-eye"></i></button>
                                        <button className="edit-btn"><i className="fas fa-pencil-alt"></i></button>
                                        <button className="delete-btn"><i className="fas fa-trash-alt"></i></button>
                                    </span>
                                </div>
                                <div className='user'>
                                    <span>Admin2</span>
                                    <span>
                                        <button className="view-btn"><i className="fas fa-eye"></i></button>
                                        <button className="edit-btn"><i className="fas fa-pencil-alt"></i></button>
                                        <button className="delete-btn"><i className="fas fa-trash-alt"></i></button>
                                    </span>
                                </div>
                                <div className='user'>
                                    <span>User1</span>
                                    <span>
                                        <button className="view-btn"><i className="fas fa-eye"></i></button>
                                        <button className="edit-btn"><i className="fas fa-pencil-alt"></i></button>
                                        <button className="delete-btn"><i className="fas fa-trash-alt"></i></button>
                                    </span>
                                </div>
                            </div>
                        </>
                    )}

                    {activeTab === 'kids' && (
                        <>
                            <div className="top-right">
                                <div className="search-bar">
                                    <input type="text" placeholder="Search Kids" />
                                    <button className="search-btn"><i className="fas fa-search"></i></button>
                                </div>
                                {/* Filter dropdown */}
                                <div className="filter-dropdown">

                                    <button id="filter-button" className="button" onClick={handleFilterButtonClick}>
                                        Filter <i className="fas fa-filter"></i>
                                    </button>
                                    {filterActive && (
                                        <div className="filters">
                                            {/* Filter options */}
                                            <label>Gender</label>
                                            <label htmlFor="filter-male">
                                                <input id="filter-male" type="checkbox" onChange={handleCheckboxChange} />
                                                Male
                                            </label>
                                            <label htmlFor="filter-female">
                                                <input id="filter-female" type="checkbox" onChange={handleCheckboxChange} />
                                                Female
                                            </label>
                                            <label>Class</label>
                                            <label htmlFor="filter-class-1">
                                                <input id="filter-class-1" type="checkbox" onChange={handleCheckboxChange} />
                                                Class 1
                                            </label>
                                            <label htmlFor="filter-class-2">
                                                <input id="filter-class-2" type="checkbox" onChange={handleCheckboxChange} />
                                                Class 2
                                            </label>
                                            {/* Add more filter options */}
                                            <button className="button clear-button" onClick={handleClearFilter}>
                                                Clear Filter
                                            </button>
                                        </div>
                                    )}
                                </div>
                                <button className='profiles-btn add-btn'>New Registration</button>
                            </div>
                            <div className='kids-list'>
                                {/* Custom layout for kids list */}
                                <div className='kid'>
                                    <span className='serial-number'>1</span>
                                    <span className='kid-name'>Doe John</span>
                                    <span className='kid-gender'>M</span>
                                    <span className='action-buttons'>
                                        <button className="view-btn"><i className="fas fa-eye"></i></button>
                                        <button className="edit-btn"><i className="fas fa-pencil-alt"></i></button>
                                        <button className="delete-btn"><i className="fas fa-trash-alt"></i></button>
                                    </span>
                                </div>
                                <div className='kid'>
                                    <span className='serial-number'>2</span>
                                    <span className='kid-name'>Akinduro Oluwafisayomi</span>
                                    <span className='kid-gender'>F</span>
                                    <span className='action-buttons'>
                                        <button className="view-btn"><i className="fas fa-eye"></i></button>
                                        <button className="edit-btn"><i className="fas fa-pencil-alt"></i></button>
                                        <button className="delete-btn"><i className="fas fa-trash-alt"></i></button>
                                    </span>
                                </div>
                                <div className='kid'>
                                    <span className='serial-number'>3</span>
                                    <span className='kid-name'>Smith Jane</span>
                                    <span className='kid-gender'>F</span>
                                    <span className='action-buttons'>
                                        <button className="view-btn"><i className="fas fa-eye"></i></button>
                                        <button className="edit-btn"><i className="fas fa-pencil-alt"></i></button>
                                        <button className="delete-btn"><i className="fas fa-trash-alt"></i></button>
                                    </span>
                                </div>
                                <div className='kid'>
                                    <span className='serial-number'>4</span>
                                    <span className='kid-name'>Oluwaseyi Adebowale</span>
                                    <span className='kid-gender'>F</span>
                                    <span className='action-buttons'>
                                        <button className="view-btn"><i className="fas fa-eye"></i></button>
                                        <button className="edit-btn"><i className="fas fa-pencil-alt"></i></button>
                                        <button className="delete-btn"><i className="fas fa-trash-alt"></i></button>
                                    </span>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </main>
    );
}

export default ProfilesPage;
