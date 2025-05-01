/** @format */

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-accent/30 p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 animate-pulse"></div>
            <div className="relative p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="url(#wallet-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <defs>
                  <linearGradient
                    id="wallet-gradient"
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
            </div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="gradient-text">Nova Wallet</span>
        </h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          The ultimate digital wallet for sports fans and event attendees
        </p>

        <div className="relative mx-auto max-w-md mb-8 overflow-hidden">
          <div className="p-4 rounded-lg bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 relative">
            <div className="absolute top-0 right-0">
              <Badge className="m-2 bg-gradient-to-r from-amber-400 to-orange-400 border-0">
                Limited Time
              </Badge>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-full bg-amber-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-600"
                >
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
              </div>
              <h3 className="font-medium text-amber-800">Sports Fan Bonus</h3>
            </div>
            <p className="text-sm text-amber-700">
              Attending a sports event? Sign up now and enter your ticket code
              for exclusive rewards!
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/sign-up">
            <Button className="signup-button min-w-36 text-lg">
              Create Wallet
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="p-5 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Secure Storage</h3>
            <p className="text-sm text-muted-foreground">
              Your assets are protected with military-grade encryption
            </p>
          </div>

          <div className="p-5 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m8 14 2.5 2L14 10"></path>
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Easy Setup</h3>
            <p className="text-sm text-muted-foreground">
              Create your wallet in just 2 simple steps
            </p>
          </div>

          <div className="p-5 rounded-lg border border-border bg-card hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute -right-6 -top-6 w-12 h-12 rounded-full bg-amber-100 opacity-70"></div>
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4 mx-auto relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber-600"
              >
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Sports Fan Bonuses</h3>
            <p className="text-sm text-muted-foreground">
              Special rewards for sports event attendees
            </p>
            <Badge className="mt-2 bg-gradient-to-r from-amber-400 to-orange-400 border-0">
              New
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
