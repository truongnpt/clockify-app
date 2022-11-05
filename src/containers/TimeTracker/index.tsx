/**
 *
 * Login
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AddTimeForm } from './components/AddTimeForm';

export function TimeTracker(props: any) {

  return (
    <>
      <Helmet
        titleTemplate={'%s - ' + 'Welcome to U-Work'}
        defaultTitle={'Time Tracker'}
      />
      <AddTimeForm />
    </>
  );
}