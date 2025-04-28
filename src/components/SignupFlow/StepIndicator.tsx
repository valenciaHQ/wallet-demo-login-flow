/** @format */

import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  labels?: string[];
}

const StepIndicator = ({
  currentStep,
  totalSteps,
  labels = ["Personal Info", "Complete"],
}: StepIndicatorProps) => {
  return (
    <div className="w-full mb-8">
      <div className="relative h-1 w-full bg-muted rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 ease-out"
          style={{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }}
        />
      </div>

      <div className="flex justify-between">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-2000",
                i < currentStep
                  ? "bg-primary text-primary-foreground"
                  : i === currentStep
                  ? "bg-secondary text-secondary-foreground animate-pulse"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {i < currentStep ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              ) : (
                i + 1
              )}
            </div>
            {labels && (
              <span
                className={cn(
                  "mt-2 text-xs font-medium hidden md:block",
                  i === currentStep
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {labels[i]}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
