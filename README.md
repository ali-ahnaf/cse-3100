# CSE-3100: Web application development with DevOps

### Marks distribution

| Strategy                  | Marks |
|---------------------------|-------|
| Attendance               | 20%   |
| Assignment               | 10%   |
| Project Proposal Submission | 5%   |
| Project Checkpoint 1     | 15%   |
| Project Checkpoint 2     | 15%   |
| Final Project Submission | 20%   |
| Lab Exam                 | 15%   |
| **Total**                | **100%** |


### Course outcome

By the end of this course, students will:

1. Understand design principles to create visually appealing and user-friendly websites.
2. Build dynamic and data-driven web applications using the Laravel framework.
3. Implement RESTful APIs and manage application logic effectively.
4. Collaborate efficiently in development projects using Git and GitHub.
5. Apply branching, merging, and conflict resolution techniques in version control workflows.
6. Set up and manage containerized environments using Docker.
7. Understand the fundamentals of CI/CD pipelines and their role in modern development.
8. Automate repetitive tasks and streamline development workflows using DevOps principles.
9. Apply all learned skills to develop a full-stack web application deployed in a containerized setup.

### How to navigate between branches?

The repository contains several branches, each branch corresponds to either the lecture number or the assignment number and contains the source files.

To switch between the branches, use: 

```
git checkout <branch-name>
```

### How to fork and give a pull request?

1. Fork the repository into your GitHub account
2. Clone the repository into your local machine
3. Create a new branch
4. Make changes
5. Commit the changes
6. Push the changes
7. Create a pull request to the upstream respository

### Course Materials

1. [Intro](https://docs.google.com/presentation/d/1hVYzMQtvLynTEOgOY-VScGsHDXFIdlUJPOOFTTOWqrE/edit?usp=sharing)

# Purrfect Adoption - Debugging Challenge

# ⚠️ THE PROJECT IS BROKEN! ⚠️

Welcome to the **Purrfect Adoption Debugging Challenge**.

This project has been sabotaged! Your task is to investigate, debug, and fix the application. You cannot simply use AI to "generate a new app" because the goal is to **fix existing bugs** in the logic, layout, and component structure.

## The Mission

The previous developer left the codebase in a chaotic state. Nothing works as expected.

#### HINT: You might have to integrate bootstrap!

### 1. Fix the Layout (CSS Chaos) `index.css` (2 marks)
*   **Task**: Restore a clean, responsive layout. Use Flexbox/Grid correctly.

### 2. Fix the Navigation `BaseLayout.jsx` (2 marks)
*   **Task**: Fix the React Router setup so pages render correctly.

### 3. Fix the Logic `Home.jsx` (1 mark)
*   **Task**: Fix the `useEffect` hook, the API fetch implementation, and state updates.

### 4. Fix Component Rendering `AvailableCats.jsx` (1 mark)
*   **Task**: Fix the JSX syntax and ensure the detailed list renders correctly.

### 5. Add the following features
The task is to add the following features to the cat adoption website demonstrated earlier in the lecture. Check slide for UI mockups.

1. **Breed type** (1 mark) - add a new field in the cats list to show which breed class they belong to. Possible breeds are: Sphynx, Peterbald, Birman, Abyssinian, Persian, Bengal, Siamese. Note: this should be reflected on the UI as well.
2. **Filtering option** (2 marks) - add 2 filters in the "Available cats" page. One of them should be a dropdown and used to filter by cat breed. The other should be a search text box to search by cat name.
3. **New pages** (1 marks) - About Us and Contact Us page.

## UI Mockups

| Mockup | Mockup |
|-------|-------|
| <img src="https://github.com/user-attachments/assets/fb24a67f-4276-4452-a0c3-83d7743deae2" width="100%" /> | <img src="https://github.com/user-attachments/assets/5a85f9fe-cf6a-4a3e-aa02-10433c4b4f77" width="100%" /> |
| <img src="https://github.com/user-attachments/assets/5dd3b5f5-d49a-4281-9628-3afe0b6970e9" width="100%" /> | <img src="https://github.com/user-attachments/assets/12cd720a-6e70-4ee6-ab7e-a112877e579b" width="100%" /> |
| <img src="https://github.com/user-attachments/assets/a555d83c-5d0a-4295-877c-e5d7575d8dbe" width="100%" /> |  |


## Setup Instructions

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run the app**:
    ```bash
    npm run dev
    ```

3.  **Debug**: Open your browser console and start hunting bugs!

## Rules
*   You must fix the *existing* code. Do not rewrite everything from scratch.
*   Pay attention to console warnings (keys, props, etc.).
*   Make the site look "Purrfect" again!

Good luck! 🐱
