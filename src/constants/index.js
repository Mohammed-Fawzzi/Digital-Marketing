import React from 'react';

export const Home = React.lazy(() => import('@/pages/home/Home'));
export const About = React.lazy(() => import('@/pages/about/About'));
export const Services = React.lazy(() => import('@/pages/services/Services'));
export const Projects = React.lazy(() => import('@/pages/projects/Projects'));
export const Blog = React.lazy(() => import('@/pages/blog/Blog'));
export const Contacts = React.lazy(() => import('@/pages/contacts/Contacts'));
export const NotFound = React.lazy(() => import('@/pages/not-found/NotFound'));
