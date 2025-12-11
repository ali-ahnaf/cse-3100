# Purrfect Adoption - Debugging Challenge
# ⚠️ THE PROJECT IS BROKEN! ⚠️

Welcome to the **Purrfect Adoption Debugging Challenge**.

This project has been sabotaged! Your task is to investigate, debug, and fix the application. You cannot simply use AI to "generate a new app" because the goal is to **fix existing bugs** in the logic, layout, and component structure.

## The Mission
The previous developer left the codebase in a chaotic state. Nothing works as expected.

### 1. Fix the Layout (CSS Chaos) `index.css`
*   **Task**: Restore a clean, responsive layout. Use Flexbox/Grid correctly.

### 2. Fix the Navigation `BaseLayout.jsx`
*   **Task**: Fix the React Router setup so pages render correctly.

### 3. Fix the Logic `Home.jsx`
*   **Task**: Fix the `useEffect` hook, the API fetch implementation, and state updates.

### 4. Fix Component Rendering `AvailableCats.jsx`
*   **Task**: Fix the JSX syntax and ensure the detailed list renders correctly.

### 5. Add the following features 
The task is to add the following features to the cat adoption website demonstrated earlier in the lecture. Check slide for UI mockups.

1. **Breed type** (2 mark) - add a new field in the cats list to show which breed class they belong to. Possible breeds are: Sphynx, Peterbald, Birman, Abyssinian, Persian, Bengal, Siamese. Note: this should be reflected on the UI as well.
2. **Filtering option** (3 marks) - add 2 filters in the “Available cats” page. One of them should be a dropdown and used to filter by cat breed. The other should be a search text box to search by cat name.
3. **New pages** (2 marks) - About Us and Contact Us page.

#### HINT: You might have to integrate bootstrap!

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
