import React, { useState, useEffect, useRef } from 'react';
import './home-style.css';
import { initClock } from '../clock';
import PinInput from './PinInput';
import tapSoundFile from '../sounds/tap.mp3';
import welcomeSoundFile from '../sounds/welcome.wav';
import errorSoundFile from '../sounds/wrong.mp3';

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('pinInput');
    const [pin, setPin] = useState('');
    const [children] = useState([
        { id: 1, name: 'Adelakun Emmanuel', pin: '123', guardians: ['Mother', 'Father'] },
        { id: 2, name: 'Adelakun Emmanuella', pin: '123', guardians: ['Mother', 'Father'] },
        { id: 3, name: 'Emily Johnson', pin: '456', guardians: ['Mother', 'Father'] },
    ]);
    const [filteredChildren, setFilteredChildren] = useState([]);
    const [selectedChildren, setSelectedChildren] = useState([]);
    const [selectedGuardian, setSelectedGuardian] = useState('');
    const [wrongPinError, setWrongPinError] = useState(false);
    const [checkInError, setCheckInError] = useState('');

    const tapSound = useRef(new Audio(tapSoundFile));
    const welcomeSound = useRef(new Audio(welcomeSoundFile));
    const errorSound = useRef(new Audio(errorSoundFile));

    // Enum or constants for modal stages
    const MODAL_STAGES = {
        PIN_INPUT: 'pinInput',
        CHILD_SELECTION: 'childSelection',
        GUARDIAN_SELECTION: 'guardianSelection',
        CHECK_IN_SUCCESS: 'checkInSuccess',
    };

    const [currentStage, setCurrentStage] = useState(MODAL_STAGES.PIN_INPUT);

    useEffect(() => {
        initClock();
        return () => {
            clearInterval(window.clockInterval);
        };
    }, []);

    const handlePinEntered = (enteredPin) => {
        playTapSound();
        const filtered = children.filter(child => child.pin === enteredPin);
        if (filtered.length > 0) {
            setFilteredChildren(filtered);
            setModalContent(MODAL_STAGES.CHILD_SELECTION);
            setWrongPinError(false);
            setCurrentStage(MODAL_STAGES.CHILD_SELECTION); // Update current stage
        } else {
            playErrorSound();
            setFilteredChildren([]);
            setWrongPinError(true);
            setTimeout(() => {
                setPin('');
                setWrongPinError(false);
            }, 2000);
        }
    };

    const handleChildSelect = (child) => {
        playTapSound();
        const isSelected = selectedChildren.some(selectedChild => selectedChild.id === child.id);
        if (isSelected) {
            setSelectedChildren(selectedChildren.filter(selectedChild => selectedChild.id !== child.id));
        } else {
            setSelectedChildren([...selectedChildren, child]);
        }
    };

    const handleCheckIn = () => {
        if (selectedChildren.length === 0) {
            setCheckInError('Please select a child to check in');
            playErrorSound();
            return;
        }
        setCheckInError('');
        playTapSound();
        setModalContent(MODAL_STAGES.GUARDIAN_SELECTION);
        setCurrentStage(MODAL_STAGES.GUARDIAN_SELECTION); // Update current stage
    };

    const handleGuardianSelect = (guardian) => {
        playTapSound();
        setSelectedGuardian(guardian);
        setModalContent(MODAL_STAGES.CHECK_IN_SUCCESS);
        performCheckIn();
        setCurrentStage(MODAL_STAGES.CHECK_IN_SUCCESS); // Update current stage
    };

    const performCheckIn = async () => {
        try {
            selectedChildren.forEach(async (child) => {
                console.log(`Simulating check-in for ${child.name} by ${selectedGuardian}`);
            });

            playWelcomeSound();

            setTimeout(() => {
                setSelectedChildren([]);
                setSelectedGuardian('');
                setShowModal(false);
                setModalContent(MODAL_STAGES.PIN_INPUT);
                setPin('');
                setFilteredChildren([]);
                setCurrentStage(MODAL_STAGES.PIN_INPUT); // Update current stage
            }, 5000);

        } catch (error) {
            console.error('Error checking in:', error.message);
        }
    };

    const handleModalClose = () => {
        playTapSound();
        setShowModal(false);
        setPin('');
        setModalContent(MODAL_STAGES.PIN_INPUT);
        setSelectedChildren([]);
        setSelectedGuardian('');
        setWrongPinError(false);
        setFilteredChildren([]);
        setCheckInError('');
        setCurrentStage(MODAL_STAGES.PIN_INPUT); // Update current stage
    };

    const playTapSound = () => {
        tapSound.current.currentTime = 0;
        tapSound.current.play();
    };

    const playWelcomeSound = () => {
        welcomeSound.current.currentTime = 0;
        welcomeSound.current.play();
    };

    const playErrorSound = () => {
        errorSound.current.currentTime = 0;
        errorSound.current.play();
    };

    const handleBackButtonClick = () => {
        switch (currentStage) {
            case MODAL_STAGES.CHILD_SELECTION:
                setModalContent(MODAL_STAGES.PIN_INPUT);
                setCurrentStage(MODAL_STAGES.PIN_INPUT);
                break;
            case MODAL_STAGES.GUARDIAN_SELECTION:
                setModalContent(MODAL_STAGES.CHILD_SELECTION);
                setCurrentStage(MODAL_STAGES.CHILD_SELECTION);
                break;
            default:
                // Handle additional stages if needed
                break;
        }
    };

    return (
        <main>
            <div className="datetime">
                <div className="date">
                    <span id="dayname">Day</span>,{' '}
                    <span id="month">Month</span>{' '}
                    <span id="daynum"> 00</span>,{' '}
                    <span id="year">Year</span>
                </div>
                <div className="time">
                    <span id="hour">00</span>: <span id="minutes">00</span>:
                    <span id="seconds">00</span>
                    <span id="period">AM</span>
                </div>
            </div>

            <div className="buttons">
                <div className="checkin-btn aqua" onClick={() => { setShowModal(true); playTapSound(); }}>Check In</div>
                <div className="checkout-btn aqua aqua2" onClick={playTapSound}>Check Out</div>
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        {currentStage !== MODAL_STAGES.PIN_INPUT && (
                            <i class="fas fa-arrow-circle-left" onClick={handleBackButtonClick}></i>
                        )}
                        <i class="fas fa-times-circle close" onClick={handleModalClose}></i>
                        {modalContent === MODAL_STAGES.PIN_INPUT && (
                            <>
                                <h2 className="modal-heading">Enter PIN</h2>
                                <PinInput
                                    onPinEntered={handlePinEntered}
                                    errorMessage={wrongPinError ? 'Wrong PIN entered. Please try again.' : ''}
                                    pin={pin}
                                    setPin={setPin}
                                    playTapSound={playTapSound} // Pass playTapSound as a prop
                                />
                            </>
                        )}
                        {modalContent === MODAL_STAGES.CHILD_SELECTION && (
                            <>
                                <h2 className="modal-heading">Select Child</h2>
                                <div className="child-list">
                                    {filteredChildren.map(child => (
                                        <button
                                            key={child.id}
                                            className={selectedChildren.some(selectedChild => selectedChild.id === child.id) ? 'selected' : ''}
                                            onClick={() => handleChildSelect(child)}
                                        >
                                            {child.name}
                                        </button>
                                    ))}
                                </div>
                                {checkInError && <p className="error-message">{checkInError}</p>}
                                <div className="checkin-btnn" onClick={handleCheckIn}>Check In</div>
                            </>
                        )}

                        {modalContent === MODAL_STAGES.GUARDIAN_SELECTION && (
                            <>
                                <h2 className="modal-heading">Check in By?</h2>
                                <div className="guardian-list">
                                    {[...new Set(selectedChildren.flatMap(child => child.guardians))].map((guardian, index) => (
                                        <button key={index} onClick={() => handleGuardianSelect(guardian)}>
                                            {guardian}
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}
                        {modalContent === MODAL_STAGES.CHECK_IN_SUCCESS && (
                            <>
                                <div className='success-box'>
                                    <i className="fas fa-check-circle"></i>
                                    <h2 className='modal-heading'>Check-in successful!</h2>
                                    {selectedChildren.map(child => (
                                        <p className='checkin-details' key={child.id}>
                                            <strong>{child.name}</strong> checked in by <strong>{selectedGuardian}</strong> at <strong>{getCurrentTime()}</strong>
                                        </p>
                                    ))}
                                </div>

                            </>
                        )}
                    </div>
                </div>
            )}
        </main>
    );
};

const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert hours to 12-hour format

    return `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${period}`;
};

export default Home;
