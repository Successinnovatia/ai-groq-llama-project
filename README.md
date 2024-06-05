# Personal AI Tutor

Welcome to your Personal AI Tutor! This project allows you to interact with an AI tutor that answers questions, explains machine learning algorithms, and guides you through your learning journey. You can ask any question and receive responses in realtime.

## Features

- Interactive AI tutor that responds to your machine learning questions.
- Uses the Groq SDK for AI completions.

## Prerequisites

- Node.js installed on your machine.
- A Groq API key.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies:
    ```bash
    npm install
    ```

## Setup

1. Create a `.env` file in the project root or edit the .env-example file  and add your Groq API key:
    ```env
    GROQ_API_KEY=your_api_key_here
    ```

## Usage

1. Run the script:
    ```bash
    node index.js
    ```
2. Type your questions and press `Enter` to get responses from the AI tutor.
