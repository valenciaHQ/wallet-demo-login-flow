/** @format */

"use client";

import { useState } from "react";
import StepIndicator from "@/components/SignupFlow/StepIndicator";
import PersonalInfoForm from "@/components/SignupFlow/PersonalInfoForm";
import SuccessPage from "@/components/SignupFlow/SuccessPage";

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 2;

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/30 py-8 px-4 transition-colors">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#logo-gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-6"
            >
              <defs>
                <linearGradient
                  id="logo-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--secondary))" />
                </linearGradient>
              </defs>
              <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
              <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
              <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
            </svg>
            <span className="text-xl font-bold">Nova Wallet</span>
          </div>
        </div>

        <div className="signup-card">
          <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

          {currentStep === 0 && (
            <PersonalInfoForm
              onContinue={nextStep}
              onBack={() => window.history.back()}
            />
          )}

          {currentStep === 1 && <SuccessPage />}
        </div>

        <div className="text-center mt-6 text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Nova Wallet. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Signup;
