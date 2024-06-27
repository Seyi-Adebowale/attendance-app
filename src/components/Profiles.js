import React, { useState } from 'react';
import './profiles.css';

function ProfilesPage() {
    const [activeTab, setActiveTab] = useState('users');
    const [showAddUserModal, setShowAddUserModal] = useState(false);
    const [username, setUsername] = useState('');
    const [pin, setPin] = useState('');
    const [confirmPin, setConfirmPin] = useState('');
    const [pinError, setPinError] = useState('');
    const [staffName, setStaffName] = useState('');
    const [role, setRole] = useState('');
    const [setEditUserId] = useState('');
    const [editName, setEditName] = useState('');
    const [editPin, setEditPin] = useState('');
    const [editStaffName, setEditStaffName] = useState('');
    const [editRole, setEditRole] = useState('');
    const [showEditModal, setShowEditModal] = useState(false);
    const [editingPin, setEditingPin] = useState(false);
    const [isViewing, setIsViewing] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

  

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleAddUserClick = () => {
        setShowAddUserModal(true);
    };

    const handleCloseModal = () => {
        setShowAddUserModal(false);
        setUsername('');
        setPin('');
        setConfirmPin('');
        setPinError('');
        setStaffName('');
        setRole('');
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (pin !== confirmPin) {
            setPinError('Pins do not match');
        } else {
            setPinError('');
            // Handle form submission logic here (e.g., API call)
            console.log('User added:', { username, pin, staffName, role });
            handleCloseModal();
        }
    };

    const handleEditUser = (user) => {
        setEditUserId(user.id);
        setEditName(user.name);
        setEditPin(user.pin);
        setEditStaffName(user.staffName || '');
        setEditRole(user.role || '');
        setShowEditModal(true);
        setEditingPin(true);
        setIsViewing(false);
    };

    const handleViewUser = (user) => {
        setEditUserId(user.id);
        setEditName(user.name);
        setEditPin(user.pin);
        setEditStaffName(user.staffName || '');
        setEditRole(user.role || '');
        setShowEditModal(true);
        setIsViewing(true);
    };

    const handleEditModalClose = () => {
        setShowEditModal(false);
        setEditUserId('');
        setEditName('');
        setEditPin('');
        setEditStaffName('');
        setEditRole('');
        setConfirmPin('');
        setEditingPin(false);
        setIsViewing(false);
    };

    const handleUpdateUser = (e) => {
        e.preventDefault();
        if (editingPin && editPin !== confirmPin) {
            setPinError('Pins do not match');
        } else {
            setPinError('');
            // Logic to update user here (frontend only)
            // Update user in the list or send update request to backend if needed
            console.log('User updated:', { editName, editPin, editStaffName, editRole });
            setShowEditModal(false);
            setEditUserId('');
            setEditName('');
            setEditPin('');
            setEditStaffName('');
            setEditRole('');
            setConfirmPin('');
            setEditingPin(false);
            setIsViewing(false);
        }
    };

    const handleDeleteUser = (user) => {
        setUserToDelete(user);
        setShowDeleteModal(true);
    };

    const confirmDeleteUser = () => {
        // Perform deletion logic here (e.g., API call)
        console.log('User deleted:', userToDelete);
        // Close delete modal and reset state
        setShowDeleteModal(false);
        setUserToDelete(null);
    };

    const cancelDeleteUser = () => {
        // Close delete modal and reset state
        setShowDeleteModal(false);
        setUserToDelete(null);
    };

    return (
        <main className="profiles-main">
            <div className="profiles-container">
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
                                <button className="profiles-btn add-btn" onClick={handleAddUserClick}>
                                    Add User
                                </button>
                            </div>
                            <div className="users-list">
                                {/* Example user rendering */}
                                <div className="user">
                                    <span className='person-name'>Akinduro Oluwafisayomi</span>
                                    <div className='action-buttons'>
                                        <button className="view-btn" onClick={() => handleViewUser({ id: 1, name: 'Admin1', pin: '1234', staffName: 'John Doe', role: 'Admin' })}>
                                            <i className="fas fa-eye"></i>
                                        </button>
                                        <button className="edit-btn" onClick={() => handleEditUser({ id: 1, name: 'Admin1', pin: '1234', staffName: 'John Doe', role: 'Admin' })}>
                                            <i className="fas fa-pencil-alt"></i>
                                        </button>
                                        <button className="delete-btn" onClick={() => handleDeleteUser({ id: 1, name: 'Admin1' })}>
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {activeTab === 'kids' && (
                        <>
                            <div className="top-right top-right-user">
                                <button className="profiles-btn add-btn" onClick={() => setShowAddUserModal(true)}>
                                    Add Kid
                                </button>
                            </div>
                            <div className="kids-list">
                                {/* Example kid rendering */}
                                <div className="kid">
                                    <span className='person-name'>Oloruntoba Tiwaloluwa</span>
                                    <div className='action-buttons'>
                                        <button className="view-btn" onClick={() => handleViewUser({ id: 1, name: 'Child1', pin: '5678', parentName: 'Jane Doe', grade: '1' })}>
                                            <i className="fas fa-eye"></i>
                                        </button>
                                        <button className="edit-btn" onClick={() => handleEditUser({ id: 1, name: 'Child1', pin: '5678', parentName: 'Jane Doe', grade: '1' })}>
                                            <i className="fas fa-pencil-alt"></i>
                                        </button>
                                        <button className="delete-btn" onClick={() => handleDeleteUser({ id: 1, name: 'Child1' })}>
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Add User or Add Kid Modal */}
            {showAddUserModal && (
                <div className="modal">
                    <div className="modal-content">
                        <i className="fas fa-times-circle close" onClick={handleCloseModal}></i>
                        <h2 className="modal-heading">{activeTab === 'users' ? 'Add User' : 'Add Kid'}</h2>
                        <form className="profiles-form" onSubmit={handleFormSubmit}>
                            <div className="form-group">
                                <label>{activeTab === 'users' ? 'Username' : 'Child Name'}</label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>{activeTab === 'users' ? 'Staff Name' : 'Parent Name'}</label>
                                <input
                                    type="text"
                                    value={staffName}
                                    onChange={(e) => setStaffName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>{activeTab === 'users' ? 'Role' : 'Grade'}</label>
                                <input
                                    type="text"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Pin</label>
                                <input
                                    type="password"
                                    value={pin}
                                    onChange={(e) => setPin(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Confirm Pin</label>
                                <input
                                    type="password"
                                    value={confirmPin}
                                    onChange={(e) => setConfirmPin(e.target.value)}
                                    required
                                />
                            </div>
                            {pinError && <div className="error">{pinError}</div>}
                            <button type="submit" className="submit-btn">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Edit or View User or Kid Modal */}
            {showEditModal && (
                <div className="modal">
                    <div className="modal-content">
                        <i className="fas fa-times-circle close" onClick={handleEditModalClose}></i>
                        <h2 className="modal-heading">{isViewing ? 'View Kid' : 'Edit Kid'}</h2>
                        <form className="profiles-form" onSubmit={handleUpdateUser}>
                            <div className="form-group">
                                <label>{activeTab === 'users' ? 'Username' : 'Child Name'}</label>
                                <input
                                    type="text"
                                    value={editName}
                                    readOnly={isViewing}
                                    onChange={(e) => setEditName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>{activeTab === 'users' ? 'Staff Name' : 'Parent Name'}</label>
                                <input
                                    type="text"
                                    value={editStaffName}
                                    readOnly={isViewing}
                                    onChange={(e) => setEditStaffName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>{activeTab === 'users' ? 'Role' : 'Grade'}</label>
                                <input
                                    type="text"
                                    value={editRole}
                                    readOnly={isViewing}
                                    onChange={(e) => setEditRole(e.target.value)}
                                    required
                                />
                            </div>
                            {!isViewing && (
                                <>
                                    <div className="form-group">
                                        <label>Pin</label>
                                        <input
                                            type="password"
                                            value={editPin}
                                            onChange={(e) => setEditPin(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Confirm Pin</label>
                                        <input
                                            type="password"
                                            value={confirmPin}
                                            onChange={(e) => setConfirmPin(e.target.value)}
                                            required
                                        />
                                    </div>
                                </>
                            )}
                            {pinError && <div className="error">{pinError}</div>}
                            {!isViewing && (
                                <button type="submit" className="submit-btn">
                                    Update
                                </button>
                            )}
                        </form>
                    </div>
                </div>
            )}

            {/* Delete User Modal */}
            {showDeleteModal && (
                <div className="modal">
                    <div className="modal-content">
                        <i className="fas fa-times-circle close" onClick={cancelDeleteUser}></i>
                        <h2 className="modal-heading">Confirm Deletion</h2>
                        <p>Are you sure you want to delete {userToDelete ? userToDelete.name : 'this user'}?</p>
                        <div className="modal-buttons">
                            <button className="cancel-btn" onClick={cancelDeleteUser}>Cancel</button>
                            <button className="confirm-btn" onClick={confirmDeleteUser}>Confirm</button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

export default ProfilesPage;
