import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// Mock the axios module
jest.mock("axios");

// Mock any context providers if necessary
// For example, if you have an AuthProvider:
// jest.mock('./Context/AuthContext', () => ({
//   AuthProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
// }));

test("renders without crashing", async () => {
  render(<App />);

  // Wait for any asynchronous operations to complete
  await screen.findByRole("main", {}, { timeout: 3000 });

  // Check for some element that you know should always be in your app
  // For example, if you have a header with the text "FinanceLuis":
  const headerElement = screen.getByText(/FinanceLuis/i);
  expect(headerElement).toBeInTheDocument();
});
