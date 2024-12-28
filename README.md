# UnityBoard

## Project Overview
UnityBoard is a real-time collaboration platform designed to simplify teamwork and enhance productivity. The application allows users to work together on documents, share ideas, and communicate seamlessly with their team. Key features include real-time document editing, instant messaging, task management, and file sharing.

## Features
- **Real-time Document Editing**: Collaborate on documents in real-time with your team.
- **Instant Messaging**: Communicate instantly with team members.
- **Task Management**: Organize and manage tasks efficiently.
- **File Sharing**: Share files easily with your team.
- **User Authentication**: Secure login and registration using JWT.

## Technologies Used
- **Frontend**: React.js
- **Styling**: CSS (Bootstrap for styling components)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens) for secure authentication

## Setup and Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Shubhraweb89/UnityBoard.git
   ```
2. **Navigate to the backend directory**:
   ```bash
   cd UnityBoard/backend
   ```
3. **Install backend dependencies**:
   ```bash
   npm install
   ```
4. **Set up the MongoDB database**:
   Ensure you have MongoDB installed and running on your machine. You can use a local instance or a cloud service like MongoDB Atlas.
5. **Start the backend server**:
   ```bash
   node server.js
   ```
6. **Navigate to the frontend directory**:
   ```bash
   cd ../frontend
   ```
7. **Install frontend dependencies**:
   ```bash
   npm install
   ```
8. **Start the frontend application**:
   ```bash
   npm start
   ```

## API Endpoints
- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Login an existing user.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you'd like to add.