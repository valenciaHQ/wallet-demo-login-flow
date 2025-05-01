/** @format */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Card, CardContent } from "../ui/card";

const SportsEventBonus = () => {
  const [bonusCode, setBonusCode] = useState("");
  const [redeemed, setRedeemed] = useState(false);

  const handleApplyCode = () => {
    if (!bonusCode.trim()) {
      toast.error("Please enter a valid bonus code");
      return;
    }

    // In a real app, you would validate this against a backend
    if (
      bonusCode.toUpperCase() === "SPORTS2025" ||
      bonusCode.toUpperCase() === "OLYMPIX" ||
      bonusCode.toUpperCase() === "CHAMPION"
    ) {
      toast.success("Bonus code applied successfully!");
      setRedeemed(true);
    } else {
      toast.error("Invalid bonus code");
    }
  };

  return (
    <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
      <h3 className="text-lg font-medium mb-4 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary mr-2"
        >
          <path d="M8.21 13.89 7 23l-1.43-9.11a6 6 0 1 1 8.89-6.84 4.32 4.32 0 0 0-6.25 6.84"></path>
          <circle cx="19" cy="8" r="2"></circle>
          <circle cx="19" cy="16" r="2"></circle>
        </svg>
        Sports Event Bonus
        {redeemed && <Badge className="ml-2 bg-emerald-500">Applied</Badge>}
      </h3>

      {!redeemed ? (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Enter your sports event ticket code to receive special bonuses!
          </p>

          <div className="flex gap-3">
            <div className="flex-1">
              <Input
                placeholder="Enter bonus code (e.g., CHAMPION)"
                value={bonusCode}
                onChange={(e) => setBonusCode(e.target.value)}
              />
            </div>
            <Button onClick={handleApplyCode}>Apply</Button>
          </div>
        </div>
      ) : (
        <div className="animate-fade-in">
          <p className="text-sm font-medium text-emerald-600 mb-2">
            Congratulations! You&apos;ve unlocked:
          </p>
          <div className="grid grid-cols-2 gap-2">
            <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200">
              <CardContent className="p-3">
                <p className="text-sm font-medium">20% Cashback</p>
                <p className="text-xs text-muted-foreground">
                  On first transaction
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
              <CardContent className="p-3">
                <p className="text-sm font-medium">100 Bonus Points</p>
                <p className="text-xs text-muted-foreground">
                  Added to your account
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default SportsEventBonus;
