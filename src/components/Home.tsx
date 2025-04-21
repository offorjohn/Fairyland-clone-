import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="text-lg text-center max-w-md">
        This is your homepage. You can customize this component to display anything you'd like — from dashboard stats to recent activity or links.
      </p>
    </div>
  );
};

export default Home;
