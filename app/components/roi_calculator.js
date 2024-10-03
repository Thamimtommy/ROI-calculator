'use client'

import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import InputField from './inputField';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const initialInputs = {
  totalEmployees: '',
  softwareApps: '',
  avgCostPerLicense: '',
  newSolutionCost: '',
  exEmployees: '',
  avgOnboardingCost: '',
  contractors: '',
  contractorHourlyRate: '',
  contractorWeeklyHours: '',
  avgEmployeeHourlyWage: '',
  manualTaskHours: '',
  manualTaskReduction: '',
  itSupportStaff: '',
  itTicketReduction: '',
  currentServerCosts: '',
  newServerCosts: '',
  implementationCost: '',
};

const inputLabels = {
  totalEmployees: 'Total Employees',
  softwareApps: 'Software Apps (current)',
  avgCostPerLicense: 'Avg Cost per Software License',
  newSolutionCost: 'New Software Solution Cost',
  exEmployees: 'Ex-employees Last Year',
  avgOnboardingCost: 'Avg Onboarding Cost',
  contractors: 'Contractors Employed',
  contractorHourlyRate: 'Contractor Hourly Rate',
  contractorWeeklyHours: 'Contractor Weekly Hours',
  avgEmployeeHourlyWage: 'Avg Employee Hourly Wage',
  manualTaskHours: 'Manual Task Hours/Week/Emp',
  manualTaskReduction: 'Manual Task Reduction %',
  itSupportStaff: 'IT Support Staff Headcount',
  itTicketReduction: 'IT Ticket Reduction %',
  currentServerCosts: 'Current Annual Server Costs',
  newServerCosts: 'New Annual Server Costs',
  implementationCost: 'Implementation Cost',
};

const ROICalculator = () => {
  const [inputs, setInputs] = useState(initialInputs);
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://bce6572085611.notebooks.jarvislabs.net/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });
      if (!response.ok) {
        throw new Error('Calculation failed');
      }
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to calculate ROI. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const pieData = results ? {
    labels: ['ROI %', 'Payback Period', 'Annual Savings', 'Total Costs', 'Productivity Hours Saved'],
    datasets: [{
      data: [
        results.roiPercentage,
        results.paybackPeriod,
        results.annualSavings,
        results.totalCosts,
        results.productivityHoursSaved
      ],
      backgroundColor: ['#4CAF50', '#FF9800', '#2196F3', '#F44336', '#9C27B0'],
    }]
  } : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">Input Your Data</h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                {Object.keys(inputs).map((inputName) => (
                  <InputField
                    key={inputName}
                    label={inputLabels[inputName]}
                    name={inputName}
                    value={inputs[inputName]}
                    onChange={handleInputChange}
                  />
                ))}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Calculating...' : 'Calculate ROI'}
                  </button>
                </div>
              </form>
              {error && <p className="text-red-600 text-center mt-2">{error}</p>}
            </div>
            <div className={`space-y-6 ${results ? 'block' : 'hidden'} lg:block`}>
              <h2 className="text-2xl font-semibold text-gray-900">Results</h2>
              {results ? (
                <div className="bg-gray-50 p-6 rounded-lg shadow">
                  <div className="mb-6 h-64">
                    <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
                  </div>
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">3-year ROI %</dt>
                      <dd className="mt-1 text-3xl font-semibold text-blue-600">{results.roiPercentage.toFixed(2)}%</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Payback Period (months)</dt>
                      <dd className="mt-1 text-3xl font-semibold text-orange-600">{results.paybackPeriod.toFixed(10)}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Annual Savings</dt>
                      <dd className="mt-1 text-3xl font-semibold text-green-600">${results.annualSavings.toLocaleString()}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Total Costs</dt>
                      <dd className="mt-1 text-3xl font-semibold text-red-600">${results.totalCosts.toLocaleString()}</dd>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="text-sm font-medium text-gray-500">Productivity Hours Saved</dt>
                      <dd className="mt-1 text-3xl font-semibold text-purple-600">{results.productivityHoursSaved.toLocaleString()}</dd>
                    </div>
                  </dl>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-500 italic">Enter your data and calculate to see results</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;