'use client'

import React from 'react';
import { FiUsers, FiDollarSign, FiClock, FiServer, FiBox, FiPercent } from 'react-icons/fi';

const getIcon = (name) => {
  switch(name) {
    case 'totalEmployees':
    case 'contractors':
    case 'itSupportStaff':
      return <FiUsers className="text-blue-500" />;
    case 'avgCostPerLicense':
    case 'newSolutionCost':
    case 'avgOnboardingCost':
    case 'currentServerCosts':
    case 'newServerCosts':
    case 'implementationCost':
    case 'contractorHourlyRate':
      return <FiDollarSign className="text-green-500" />;
    case 'manualTaskHours':
    case 'contractorWeeklyHours':
    case 'avgEmployeeHourlyWage':
      return <FiClock className="text-purple-500" />;
    case 'softwareApps':
      return <FiBox className="text-orange-500" />;
    case 'manualTaskReduction':
    case 'itTicketReduction':
      return <FiPercent className="text-indigo-500" />;
    default:
      return <FiServer className="text-gray-500" />;
  }
};

const InputField = ({ label, name, value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {getIcon(name)}
        </div>
        <input
          type="number"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="block w-full pl-10 pr-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
          placeholder="0"
          required
        />
      </div>
    </div>
  );
};

export default InputField;