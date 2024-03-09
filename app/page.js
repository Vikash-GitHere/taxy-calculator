"use client"
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [income, setIncome] = useState("");
  const [financialYear, setFinancialYear] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [grossSalaryIncome, setGrossSalaryIncome] = useState("");
  const [incomeFromOtherSources, setIncomeFromOtherSources] = useState("");
  const [incomeFromInterest, setIncomeFromInterest] = useState("");
  const [rentalIncome, setRentalIncome] = useState("");
  const [interestOnHomeLoanSelfOccupied, setInterestOnHomeLoanSelfOccupied] = useState("");
  const [interestOnHomeLoanLetOut, setInterestOnHomeLoanLetOut] = useState("");
  const [deductions, setDeductions] = useState("");
  const [result, setResult] = useState("");

  function calculateTax(event) {
    event.preventDefault();

    // Convert input values to integers
    const grossSalary = parseInt(grossSalaryIncome) || 0;
    const otherIncome = parseInt(incomeFromOtherSources) || 0;
    const interestIncome = parseInt(incomeFromInterest) || 0;
    const rentIncome = parseInt(rentalIncome) || 0;
    const selfOccupiedInterest = parseInt(interestOnHomeLoanSelfOccupied) || 0;
    const letOutInterest = parseInt(interestOnHomeLoanLetOut) || 0;
    const deduction = parseInt(deductions) || 0;

    // Calculate total income
    const totalIncome =
      grossSalary +
      otherIncome +
      interestIncome +
      rentIncome -
      selfOccupiedInterest -
      letOutInterest -
      deduction;

    // Tax calculation logic based on the provided income
    let tax = 0;
    if (totalIncome <= 300000) {
      tax = 0;
    } else if (totalIncome > 300000 && totalIncome <= 600000) {
      tax = (totalIncome - 300000) * 0.05;
    } else if (totalIncome > 600000 && totalIncome <= 900000) {
      tax = 300000 * 0.05 + (totalIncome - 600000) * 0.1;
    } else if (totalIncome > 900000 && totalIncome <= 1200000) {
      tax = 300000 * 0.05 + 300000 * 0.1 + (totalIncome - 900000) * 0.15;
    } else if (totalIncome > 1200000 && totalIncome <= 1500000) {
      tax =
        300000 * 0.05 +
        300000 * 0.1 +
        300000 * 0.15 +
        (totalIncome - 1200000) * 0.2;
    } else {
      tax =
        300000 * 0.05 +
        300000 * 0.1 +
        300000 * 0.15 +
        300000 * 0.2 +
        (totalIncome - 1500000) * 0.3;
    }

    setResult(`The income tax of an income of ₹${totalIncome} is: ₹${tax.toFixed(2)}`);
  }

  return (
    <div className="bg-gradient-to-r from-blue-700 to-indigo-600 min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Tax Calculator</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
        />
      </Head>
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md mb-8 backdrop-filter backdrop-blur-lg bg-opacity-60">
        <div className="text-center text-gray-800 font-bold mb-6">
          <p className="text-sm">See how the latest budget impacts your tax calculation. Updated as per latest budget on 1 February, 2024.</p>
        </div>
        <h1 className="text-3xl text-center font-bold text-gray-800 mb-6">
          Income Tax Calculator
        </h1>
        <form onSubmit={calculateTax}>
          <div className="mb-6">
            <label
              htmlFor="financialYear"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Which Financial Year do you want to calculate taxes for?
            </label>
            <select
              id="financialYear"
              value={financialYear}
              onChange={(e) => setFinancialYear(e.target.value)}
              className="w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500 border border-gray-300 rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-60"
            >
              <option value="">Select Financial Year</option>
              <option value="FY 2024-2025 Latest Budget">FY 2024-2025 Latest Budget (Return to be filed between 1st April 2025 - 31st March 2026)</option>
              <option value="FY 2023-2024">FY 2023-2024 (Return to be filed between 1st April 2024 - 31st March 2025)</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="ageGroup"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Your age group
            </label>
            <select
              id="ageGroup"
              value={ageGroup}
              onChange={(e) => setAgeGroup(e.target.value)}
              className="w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500 border border-gray-300 rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-60"
            >
              <option value="">Select Age Group</option>
              <option value="0 to 60">0 to 60</option>
              <option value="60 to 80">60 to 80</option>
              <option value="80 & above">80 & above</option>
            </select>
          </div>
          {/* Add more input fields for income details, deductions, etc. */}
          <div className="mb-6">
            <label
              htmlFor="grossSalaryIncome"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Gross Salary Income:
            </label>
            <input
              id="grossSalaryIncome"
              type="number"
              placeholder="Enter your gross salary income"
              value={grossSalaryIncome}
              onChange={(e) => setGrossSalaryIncome(e.target.value)}
              min="0"
              required
              className="w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500 border border-gray-300 rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-60"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="incomeFromOtherSources"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Income from Other Sources:
            </label>
            <input
              id="incomeFromOtherSources"
              type="number"
              placeholder="Enter your income from other sources"
              value={incomeFromOtherSources}
              onChange={(e) => setIncomeFromOtherSources(e.target.value)}
              min="0"
              required
              className="w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500 border border-gray-300 rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-60"
            />
          </div>
          
          {/* Add more input fields for income details, deductions, etc. */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          >
            Calculate Tax
          </button>
        </form>
      </div>
      {result && (
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md backdrop-filter backdrop-blur-lg bg-opacity-60">
          <h2 className="text-xl text-center font-bold text-gray-800 mb-4">
            Result
          </h2>
          <p className="text-gray-800 text-center">{result}</p>
        </div>
      )}
    </div>
  );
}