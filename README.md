# User Directory Application

A responsive, user-friendly React application that fetches and displays user data with advanced filtering capabilities. Built with modern web technologies and best practices.

## 📋 Overview

This application demonstrates a complete user management interface that fetches data from a public API and provides intuitive search and filtering functionality. The app showcases modern React development practices, component architecture, and responsive design principles.

## 🛠 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Icons**: Lucide React
- **API**: JSONPlaceholder (https://jsonplaceholder.typicode.com/users)
- **State Management**: React Hooks (useState, useEffect, useMemo)
- **Build Tool**: Vite

## ✨ Features Implemented

### Core Requirements

- ✅ **API Integration**: Fetches user data with proper error handling
- ✅ **Responsive Design**: Mobile-first approach with Tailwind CSS
- ✅ **Real-time Search**: Instant name filtering as you type
- ✅ **Multi-filter Support**: City and company dropdown filters
- ✅ **Clear Filters**: One-click reset functionality
- ✅ **Combined Filtering**: AND logic (all active filters must match)
- ✅ **Loading States**: Elegant loading spinner and error handling

## 🏗 Architecture & Approach

### Project Structure

```
src/
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── card-item.tsx          # User profile card component
│   ├── error-message.tsx      # Error state component
│   ├── info-item.tsx          # Profile info display component
│   ├── input-search.tsx       # Search input component
│   ├── link-item.tsx          # Clickable link component
│   ├── loading-spinner.tsx    # Loading state component
│   ├── page-header.tsx        # Reusable page header
│   └── select-filter.tsx      # Dropdown filter component
├── hooks/
│   └── useUsers.ts            # Custom hook for user data
├── lib/
│   └── utils.ts               # Utility functions
├── pages/
│   └── user-directory.tsx     # Main page component
└── types/
    ├── filter.types.ts        # Filter-related types
    ├── search.types.ts        # Search-related types
    └── user.types.ts          # User data types
```

### Component Design Philosophy

I followed a **micro-component, single-responsibility approach** with clear separation of concerns:

```
UserDirectory (Main Page)
├── PageHeader (Reusable Header)
├── FilterComponent (Layout & State Management)
│   ├── InputSearch (Text Search Logic)
│   └── SelectFilter (Dropdown Logic)
└── CardItem (User Profile Display)
    ├── InfoItem (Profile Information)
    └── LinkItem (Interactive Links)
```

### Key Architectural Decisions

1. **Micro-Component Strategy**:

   - `PageHeader`: Reusable header component for multi-page scalability
   - `InputSearch`: Dedicated text-based filtering with customizable props
   - `SelectFilter`: Reusable dropdown component for any array of options
   - `CardItem`: Self-contained user profile card
   - `InfoItem`: Generic info display component (icon + text)
   - `LinkItem`: Interactive link component with proper accessibility

2. **Component Composition Benefits**:

   - **Reusability**: Each component can be used across different pages
   - **Maintainability**: Single responsibility makes debugging easier
   - **Scalability**: Easy to extend for multiple pages/features

3. **State Management Strategy**:

   - Centralized filter state in the main component
   - `useMemo` for expensive computations (filtering, unique values)
   - Controlled components pattern for predictable data flow
   - Custom hooks for data fetching logic separation

4. **Type Safety & Organization**:

   - Dedicated type files for different domains
   - Strict type checking across all components

5. **Performance Optimizations**:

   - Memoized filtered results to prevent unnecessary re-renders
   - Computed unique cities/companies only when data changes

6. **User Experience Focus**:

   - Real-time search without debouncing (suitable for small dataset)
   - Clear visual feedback for loading/error states
   - Intuitive filter clearing with visual indicators
   - Implement mobile-first approach

7. **Error Handling Strategy**:
   - User-friendly error messages with retry options
   - Clear visual loading during API calls
   - Helpful guidance when no results are found

## 🎯 Key Assumptions Made

1. **Dataset Size**: Assumed small dataset (~10 users) suitable for client-side filtering without pagination
2. **Search Behavior**: Real-time search preferred over debounced input for better UX
3. **Filter Logic**: AND logic for multiple filters (users wanted refined results, not broader results)
4. **Multi-page Application**: Designed `PageHeader` component assuming future pages will be added
5. **Component Reusability**: Created micro-components (`InfoItem`, `LinkItem`) assuming they'll be reused across different contexts
6. **Browser Support**: Modern browsers with ES6+ support
7. **Network**: Stable internet connection for API calls
8. **Data Structure**: Consistent API response format as provided by JSONPlaceholder

## 🏃‍♂️ Running the Project

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ramadika/finology-assessment-platform.git

# Navigate to project directory
cd finology-assessment-platform

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```
