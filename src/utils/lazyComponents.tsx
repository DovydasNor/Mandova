import React, { lazy, Suspense } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

export const LazyGallery = lazy(() => import('../pages/Gallery'));
export const LazyContacts = lazy(() => import('../pages/Contacts'));
export const LazyPrivacyPolicy = lazy(() => import('../pages/privacy_policy'));
export const LazyNotFoundPage = lazy(() => import('../pages/404_Page'));
export const LazyB2B = lazy(() => import('../pages/B2B'));

interface LazyComponentWrapperProps {
  children: React.ReactNode;
}

export const LazyComponentWrapper: React.FC<LazyComponentWrapperProps> = ({ children }) => (
  <Suspense fallback={<LoadingSpinner />}>
    {children}
  </Suspense>
);