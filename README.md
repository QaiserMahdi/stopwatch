# Stopwatch Application

This is a simple Stopwatch application built using React.js library. The application allows users to start, pause, stop, and reset the stopwatch timer. Additionally, it displays the elapsed time whenever the "Stop" button is clicked.

## Features

- **Start/Pause Button**: Initiates or pauses the stopwatch timer.
- **Stop Button**: Stops the stopwatch timer and displays the final elapsed time. The timer is reset to zero after stopping.
- **Reset Button**: Resets the stopwatch timer to zero.
- **Elapsed Time Display**: Shows the elapsed time when the stopwatch is stopped.
- **Responsive Design**: The application is responsive and works well on different screen sizes.

## Functional Requirements

### Start/Pause Button

- **Description**: Users can start or pause the stopwatch timer by clicking on the Start/Pause button.
- **Acceptance Criteria**: Clicking on the Start button initiates the stopwatch timer. When the stopwatch is running, clicking on the Pause button halts the timer at the current elapsed time. Clicking on the Pause button again resumes the timer from the paused time.

### Stop Button

- **Description**: Users can stop the stopwatch timer at any point.
- **Acceptance Criteria**: Clicking on the Stop button halts the stopwatch timer and displays the final elapsed time. The stopwatch timer resets to zero after stopping.

### Reset Button

- **Description**: Users can reset the stopwatch timer to zero.
- **Acceptance Criteria**: Clicking on the Reset button resets the stopwatch timer to zero. This action clears any previous elapsed time.

### Elapsed Time Display

- **Description**: Shows the elapsed time when the stopwatch is stopped.
- **Acceptance Criteria**: When the Stop button is clicked, the elapsed time is displayed below the control buttons.

## Non-Functional Requirements

- The user interface should be intuitive and user-friendly.
- Button actions should be responsive and clearly visible.
- The application should be compatible with modern web browsers such as Google Chrome, Mozilla Firefox, and Safari.
- The application should be responsive and work well on different screen sizes.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/QaiserMahdi/stopwatch.git
    cd stopwatch
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

4. Open the application in your web browser:

    ```plaintext
    http://localhost:3000
    ```


## Usage

- **Start/Pause**: Click the "Start" button to begin the timer. Click "Pause" to halt the timer. Click "Start" again to resume from the paused time.
- **Stop**: Click the "Stop" button to halt the timer and display the elapsed time. The timer will reset to zero.
- **Reset**: Click the "Reset" button to reset the timer to zero. This will also clear any previously displayed elapsed time.

## Acknowledgments

- This project was built using [React](https://reactjs.org/).

## Contact

For any inquiries or feedback, please contact [Qaiser Mahdi](mailto:qaisermahdi@gmail.com).
