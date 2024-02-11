"use client";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [income, setIncome] = useState("");
  const [result, setResult] = useState("");

  function calculateTax(event) {
    event.preventDefault();

    let tax = 0;
    if (income <= 300000) {
      tax = 0;
    } else if (income > 300000 && income <= 600000) {
      tax = (income - 300000) * 0.05;
    } else if (income > 600000 && income <= 900000) {
      tax = 300000 * 0.05 + (income - 600000) * 0.1;
    } else if (income > 900000 && income <= 1200000) {
      tax = 300000 * 0.05 + 300000 * 0.1 + (income - 900000) * 0.15;
    } else if (income > 1200000 && income <= 1500000) {
      tax =
        300000 * 0.05 + 300000 * 0.1 + 300000 * 0.15 + (income - 1200000) * 0.2;
    } else {
      tax =
        300000 * 0.05 +
        300000 * 0.1 +
        300000 * 0.15 +
        300000 * 0.2 +
        (income - 1500000) * 0.3;
    }

    setResult(`The income tax of an income of ${income} is: ₹${tax.toFixed(2)}`);
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
          <p className="text-sm">The Income Tax Calculator will allow you to calculate your income tax for financial year FY 2024-25 (AY 2025-26) under New Tax Regime slabs.</p>
        </div>
        <h1 className="text-3xl text-center font-bold text-gray-800 mb-6">
          Income Tax Calculator
        </h1>
        <form onSubmit={calculateTax}>
          <div className="mb-6">
            <label
              htmlFor="income"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Income:
            </label>
            <input
              id="income"
              type="number"
              placeholder="Enter your income"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              min="0"
              required
              className="w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500 border border-gray-300 rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-60"
            />
          </div>
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
