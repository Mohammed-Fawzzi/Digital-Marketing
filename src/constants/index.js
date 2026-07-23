import React from 'react';

export const Home = React.lazy(() => import('@/pages/Home/Home'));
export const About = React.lazy(() => import('@/pages/About/About'));
export const Services = React.lazy(() => import('@/pages/Services/Services'));
export const Projects = React.lazy(() => import('@/pages/Projects/Projects'));
export const Blog = React.lazy(() => import('@/pages/Blog/Blog'));
export const Contacts = React.lazy(() => import('@/pages/Contacts/Contacts'));
export const NotFound = React.lazy(() => import('@/pages/NotFound/NotFound'));
