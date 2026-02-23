👟 Kicks - Modern E-commerce Storefront
A high-fidelity, responsive e-commerce frontend built with Next.js, translating Figma designs into a functional shopping experience. This project integrates the Platzi Fake Store API for real-time product data and features a local cart system.

🚀 Live Demo Link | Source Code
🛠️ Tech Stack
Framework: Next.js 14+ (App Router)

<<<<<<< HEAD
Styling: Tailwind CSS

Animations: Framer Motion (for smooth transitions)

State Management: Context API (Cart & Product state)

Data Fetching: Axios

Icons: Lucide React

API: Platzi Fake Store API

✨ Key Features
Product Listing: Dynamic fetching of products and categories from API.

Detailed View: Individual product pages with dynamic routing (/product/[id]).

Shopping Cart (Bonus): Fully functional local cart management (Add/Remove/Update).

UI/UX States: Custom Loading, Empty, and Error states for a better user experience.

Responsive Design: Optimized for Desktop, Tablet, and Mobile devices.

Smooth Animations: Reveal animations and hover effects using Framer Motion.

📂 Folder Structure Overview
My architecture follows a Modular Component-Based approach:

app/: Routing and layout logic.

components/: Segregated into layout, product, category, and ui for high reusability.

context/: Centralized state management for Cart and Products.

hooks/: Custom hooks for clean data fetching logic.

services/: Axios base configuration and API endpoint abstraction.

types/: TypeScript definitions for data integrity.

⚙️ Local Setup
Follow these steps to run the project locally:

Clone the Repository:

Bash
git clone <YOUR_REPO_URL>
cd kicks-store
Install Dependencies:

Bash
npm install
Run the Development Server:

Bash
=======
First, run the development server:
amarrrrrrrrrrrrrrrrrrrrrrrrrrr
lksdlkfjsdlkdjflksd
```bash
>>>>>>> 9820ea5 (Add netlify config)
npm run dev
Open http://localhost:3000 in your browser.

📝 Implementation Notes
UI Fidelity: Every pixel, spacing, and typography choice was made to match the Figma blueprint as closely as possible.

Clean Code: Followed DRY (Don't Repeat Yourself) principles, especially in the UI components like Buttons and Cards.

Commits: Maintained a meaningful commit history (e.g., feat:, fix:, refactor:) to show the development progress.

State Logic: Used Context API for the Cart to ensure state persistence across different pages without page reloads.

👤 Author
Hafizur Rahman

GitHub: @HAFIZUR2004
Live URL:
