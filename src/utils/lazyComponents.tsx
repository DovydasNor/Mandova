import React, { lazy, Suspense } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

// Lazy load components that are not critical for initial render
export const LazyGallery = lazy(() => import('../pages/Gallery'));
export const LazyContacts = lazy(() => import('../pages/Contacts'));
export const LazyPrivacyPolicy = lazy(() => import('../pages/privacy_policy'));
export const LazyNotFoundPage = lazy(() => import('../pages/404_Page'));

// Lazy load heavy components
export const LazyCircularGallery = lazy(() => import('../components/CircularGallery'));
export const LazyMobileGallery = lazy(() => import('../components/MobileGallery'));

// Wrapper component with loading fallback
interface LazyComponentWrapperProps {
  children: React.ReactNode;
}

export const LazyComponentWrapper: React.FC<LazyComponentWrapperProps> = ({ children }) => (
  <Suspense fallback={<LoadingSpinner />}>
    {children}
  </Suspense>
);