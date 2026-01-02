# Purrfect Adoption - Debugging Challenge

**Status: All Tasks Completed ✅**

Welcome to the **Purrfect Adoption Debugging Challenge**.

This project has been restored from its sabotaged state!

## The Mission (Completed)

### 1. Fix the Layout (CSS Chaos) `index.css` (2 marks) ✅
*   **Task**: Restore a clean, responsive layout. Use Flexbox/Grid correctly.
*   **Fixes**: Restored `box-sizing: border-box`, removed `rotate(1deg)`, fixed footer positioning, corrected `main` display.

### 2. Fix the Navigation `BaseLayout.jsx` (2 marks) ✅
*   **Task**: Fix the React Router setup so pages render correctly.
*   **Fixes**: Added navigation links for Home, Available Cats, About Us, and Contact Us.

### 3. Fix the Logic `Home.jsx` (1 mark) ✅
*   **Task**: Fix the `useEffect` hook, the API fetch implementation, and state updates.
*   **Fixes**: Added dependency array to `useEffect`, fixed infinite state loop, removed duplicate rendering.

### 4. Fix Component Rendering `AvailableCats.jsx` (1 mark) ✅
*   **Task**: Fix the JSX syntax and ensure the detailed list renders correctly.
*   **Fixes**: Implemented grid layout for cat cards, added breed display.

### 5. Add the following features ✅
The task is to add the following features to the cat adoption website demonstrated earlier in the lecture. Check slide for UI mockups.

1. **Breed type** (1 mark) ✅ - Added breed field (Sphynx, Peterbald, Birman, Abyssinian, Persian, Bengal, Siamese).
2. **Filtering option** (2 marks) ✅ - Added breed dropdown and name search filter.
3. **New pages** (1 marks) ✅ - Created About Us and Contact Us pages.

#### HINT: You might have to integrate bootstrap!
*   **Status**: Bootstrap 5.3.2 integrated via CDN.

## Implementation Details

### Contact Information
*   **Email**: waliza.cse.20230104029@aust.edu
*   **Phone**: 01784358650
*   **Address**: Elephant Road, Dhaka
*   **Hours**: 9 AM to 8 PM

### Team Members
*   **Spo** (Founder & Director)
*   **Jinan** (Veterinary Coordinator)
*   **Waliza** (Adoption Manager)

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
