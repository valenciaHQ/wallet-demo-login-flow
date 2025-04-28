/** @format */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PersonalInfoForm from "./PersonalInfoForm";
import "@testing-library/jest-dom";
import { Toaster } from "sonner";

window.HTMLElement.prototype.hasPointerCapture = jest.fn();
window.HTMLElement.prototype.scrollIntoView = jest.fn();

describe("PersonalInfoForm", () => {
  const mockOnContinue = jest.fn();
  const mockOnBack = jest.fn();

  beforeEach(() => {
    localStorage.clear(); // Clear localStorage before each test
    jest.clearAllMocks(); // Clear mock function calls
  });

  test("renders all form fields", () => {
    render(
      <PersonalInfoForm onContinue={mockOnContinue} onBack={mockOnBack} />
    );

    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/ID Document Type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
    expect(screen.getByText(/Upload ID document/i)).toBeInTheDocument();
  });

  test("shows error if required fields are empty", async () => {
    render(
      <div>
        <Toaster />
        <PersonalInfoForm onContinue={mockOnContinue} onBack={mockOnBack} />
      </div>
    );

    fireEvent.click(screen.getByRole("button", { name: /Create Wallet/i }));

    expect(
      await screen.findByText(/Please fill out all fields/i)
    ).toBeInTheDocument();
  });

  test("calls onBack when the Back button is clicked", () => {
    render(
      <div>
        <Toaster />
        <PersonalInfoForm onContinue={mockOnContinue} onBack={mockOnBack} />
      </div>
    );

    fireEvent.click(screen.getByRole("button", { name: /Back/i }));

    expect(mockOnBack).toHaveBeenCalled();
  });
});
