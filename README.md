Nested Comment Section-

This project implements a dynamic, interactive nested comment section, where users can add comments, reply to existing comments, and edit or delete comments. The comments appear in a structured, nested format similar to common social media or forum comment threads, providing a clean and responsive user experience. This project is built using HTML, Tailwind CSS, and JavaScript.

Features
Add New Comment: Users can enter their name and comment content to add a top-level comment.
Reply to Comments: Each comment has a reply button allowing users to add a nested reply below it.
Edit Comments: Users can edit their own comments and save changes.
Delete Comments: Deleting a comment removes it along with all its nested replies.
Character Limit: Comments and replies are limited to 250 characters, with a real-time character counter for feedback.
User Interface: Responsive UI using Tailwind CSS with a distinct style for each comment level to provide visual hierarchy.
Technologies Used
HTML: Defines the structure of the comment section.
Tailwind CSS: Styles the comment UI with a responsive and clean layout.
JavaScript: Handles DOM manipulation for adding, editing, and deleting comments, as well as managing nested replies.
Getting Started
To run this project locally, follow these steps:

Prerequisites
Basic knowledge of HTML, CSS (Tailwind), and JavaScript.
A code editor (e.g., VS Code) and a browser to view the project.
Setup

Clone the Repository:
git clone <repository-url>

Usage
Add a Comment: Enter your name and a comment, then click Post Comment.
Reply to a Comment: Click the Reply button under an existing comment, enter your reply, and click Post Reply.
Edit a Comment: Click the Edit button, modify the comment, and save the changes.
Delete a Comment: Click Delete to remove a comment and all its replies.
Project Structure
bash
Copy code
nested-comment-section/
├── index.html       # HTML and tailwind css structure for the comment section
├── index.js         # JavaScript for interactive comment functionality
└── README.md        # Project documentation
Additional Features
Character Counter: Displays the remaining characters allowed for each comment.
Multi-Level Replies: Allows users to create deep nested replies to simulate real conversation threads.
Responsive Design: UI adapts to different screen sizes using Tailwind CSS.



