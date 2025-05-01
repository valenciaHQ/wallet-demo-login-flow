/** @format */

"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import SportsEventBonus from "../SportEventBonus";

const SuccessPage = () => {
  const router = useRouter();

  return (
    <div className="signup-step text-center">
      <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <path d="m9 11 3 3L22 4"></path>
        </svg>
      </div>

      <h2 className="text-2xl font-bold mb-2">Application Submitted!</h2>
      <p className="text-muted-foreground mb-8">
        Thank you for registering with Nova Wallet. We&apos;re reviewing your
        information and will notify you once your account is ready.
      </p>

      <div className="bg-muted/50 rounded-lg p-6">
        <h3 className="font-medium mb-4">What happens next?</h3>
        <div className="space-y-4">
          <div className="flex">
            <div className="mr-4 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm">
              1
            </div>
            <div className="text-left">
              <p className="font-medium">Verification review</p>
              <p className="text-sm text-muted-foreground">
                Our team will review your submitted documents
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="mr-4 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm">
              2
            </div>
            <div className="text-left">
              <p className="font-medium">Account activation</p>
              <p className="text-sm text-muted-foreground">
                You&apos;ll receive an email when your account is activated
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="mr-4 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm">
              3
            </div>
            <div className="text-left">
              <p className="font-medium">Set up your wallet</p>
              <p className="text-sm text-muted-foreground">
                Fund your account and start managing your assets
              </p>
            </div>
          </div>
        </div>
      </div>

      <SportsEventBonus />

      <Button onClick={() => router.push("/")} className="signup-button">
        Return to Home
      </Button>

      <p className="text-xs text-muted-foreground mt-6">
        Have questions? Contact our support team at{" "}
        <a
          href="mailto:support@novawallet.com"
          className="text-primary hover:underline"
        >
          support@novawallet.com
        </a>
      </p>
    </div>
  );
};

export default SuccessPage;
