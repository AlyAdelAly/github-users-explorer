# GitHub Users Explorer

A React app for browsing GitHub users with favorites, search, and dark mode.

## 🚀 Quick Start

```bash
git clone <repo-url>
cd github-users-app
npm install
npm start
```

**Dependencies**: React 19, Tailwind CSS, lucide-react

## 🏗️ Technical Design

### Architecture
- **Context API**: Simple state management for favorites/theme
- **Custom Hooks**: `useDebounce` for search, `useAppContext` for state
- **Component Composition**: Modular, reusable components
- **localStorage**: Persistent favorites and theme preferences

### Performance
- **Debounced Search**: 300ms delay prevents excessive API calls
- **Memoization**: `useMemo` for filtered/paginated lists
- **Client-side Pagination**: 8 users per page

## 🔍 Code Review

### ✅ Strengths
- Clean component hierarchy with single responsibility
- Proper React hooks usage with correct dependencies
- Good UX with loading states and error handling
- Responsive design with accessibility considerations
