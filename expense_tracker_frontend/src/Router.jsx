import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/common/Layout';
import Dashboard from './pages/Dashboard';
import ExpensesList from './pages/ExpensesList';
import ExpenseForm from './pages/ExpenseForm';
import Categories from './pages/Categories';
import NotFound from './pages/NotFound';

/**
 * PUBLIC_INTERFACE
 * AppRouter sets up the application routes using react-router-dom.
 * Routes:
 * - / -> redirects to /dashboard
 * - /dashboard -> Dashboard view
 * - /expenses -> Expenses list view
 * - /expenses/new -> Expense create form
 * - /categories -> Categories view
 * - * -> NotFound
 */
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expenses" element={<ExpensesList />} />
          <Route path="/expenses/new" element={<ExpenseForm />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
