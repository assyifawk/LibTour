import React from 'react';
import PageHeader from '../components/fragments/PageHeader';
import VirtualTour from '../components/sections/VirtualTour/VirtualTour';

const page = () => {
  return (
    <>
      <PageHeader title="Virtual Tour" />
      <VirtualTour />
    </>
  );
};

export default page;
