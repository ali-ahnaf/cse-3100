# Purrfect Adoption - Debugging Challenge

# ⚠️ THE PROJECT IS BROKEN! ⚠️

Welcome to the **Purrfect Adoption Debugging Challenge**.

This project has been sabotaged! Your task is to investigate, debug, and fix the application. You cannot simply use AI to "generate a new app" because the goal is to **fix existing bugs** in the logic, layout, and component structure.

## The Mission

The previous developer left the codebase in a chaotic state. Nothing works as expected.

### 1. Fix the Layout (CSS Chaos) `index.css` (2 marks)

- **Task**: Restore a clean, responsive layout. Use Flexbox/Grid correctly.

### 2. Fix the Navigation `BaseLayout.jsx` (2 marks)

- **Task**: Fix the React Router setup so pages render correctly.

### 3. Fix the Logic `Home.jsx` (1 mark)

- **Task**: Fix the `useEffect` hook, the API fetch implementation, and state updates.

### 4. Fix Component Rendering `AvailableCats.jsx` (1 mark)

- **Task**: Fix the JSX syntax and ensure the detailed list renders correctly.

### 5. Add the following features

The task is to add the following features to the cat adoption website demonstrated earlier in the lecture. Check slide for UI mockups.

1. **Breed type** (1 mark) - add a new field in the cats list to show which breed class they belong to. Possible breeds are: Sphynx, Peterbald, Birman, Abyssinian, Persian, Bengal, Siamese. Note: this should be reflected on the UI as well.
2. **Filtering option** (2 marks) - add 2 filters in the “Available cats” page. One of them should be a dropdown and used to filter by cat breed. The other should be a search text box to search by cat name.
3. **New pages** (1 marks) - About Us and Contact Us page.

#### HINT: You might have to integrate bootstrap!

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

- You must fix the _existing_ code. Do not rewrite everything from scratch.
- Pay attention to console warnings (keys, props, etc.).
- Make the site look "Purrfect" again!

Good luck! 🐱
