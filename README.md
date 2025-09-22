# Fallacy Finder Extension

Fallacy Finder is a Chrome extension that helps you identify logical fallacies in highlighted text on any webpage. It uses a machine learning model to analyze text and provides an analysis in the extension's popup.

## How It Works

The extension has two main components:

1.  **Chrome Extension (Frontend)**: A set of HTML, CSS, and JavaScript files that run in the browser. It captures highlighted text and calls the backend for analysis.
2.  **FastAPI Server (Backend)**: A local Python server that uses a pre-trained transformer model from Hugging Face (`SamanthaStorm/fallacyfinder`) to perform text classification and identify potential fallacies.

When you highlight text on a page, the extension sends it to the local backend for analysis. You can view the result by opening the extension's popup.

## Features

-   Analyzes highlighted text on any website.
-   Displays the detected fallacy type and a confidence score.
-   Results are shown in the extension's popup.
-   Uses a local server to keep your data private.

## Technology Stack

-   **Backend**: Python, FastAPI, Transformers, PyTorch
-   **Frontend**: JavaScript, HTML, Chrome Extension APIs (Storage, Messaging)

## Setup and Installation

To get the extension running, you need to set up both the backend server and the Chrome extension.

### 1. Backend Server Setup

The backend server is a Python application that runs on your local machine.

**Prerequisites**:
-   Python 3.8+

**Instructions**:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd fallacy_plugin
    ```

2.  **Create and activate a virtual environment** (recommended):
    ```bash
    # For Unix/macOS
    python3 -m venv .venv
    source .venv/bin/activate

    # For Windows
    python -m venv .venv
    .venv\Scripts\activate
    ```

3.  **Install the required dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Run the server:**
    ```bash
    uvicorn main:app --reload
    ```
    The server will start on `http://127.0.0.1:8000`. The first time you run it, it will download the machine learning model, which may take a few minutes. Keep this terminal window open while you use the extension.

### 2. Chrome Extension Setup

**Instructions**:

1.  Open Google Chrome and navigate to `chrome://extensions`.
2.  Enable **Developer mode** using the toggle switch in the top-right corner.
3.  Click the **Load unpacked** button.
4.  In the file selection dialog, select the `extension` folder from this project directory.
5.  The "Fallacy Finder" extension will now appear in your list of extensions.

## Usage

1.  Ensure the backend server is running.
2.  Navigate to any webpage.
3.  Highlight a piece of text with your mouse.
4.  Click the **Fallacy Finder** extension icon in your browser's toolbar.
5.  The popup will open, displaying the analysis of the highlighted text, including the type of fallacy detected and the model's confidence level.
