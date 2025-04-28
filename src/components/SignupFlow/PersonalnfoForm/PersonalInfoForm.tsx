/** @format */

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PersonalInfoFormProps {
  onContinue: () => void;
  onBack: () => void;
}

const unavailableCountries = ["ur", "br", "co", "ec"];

const PersonalInfoForm = ({ onContinue, onBack }: PersonalInfoFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    documentType: "",
    country: "",
  });

  const [frontImage, setFrontImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFrontImage(e.target.files[0]);
      toast.success("ID document uploaded successfully");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.documentType ||
      !formData.country ||
      !frontImage
    ) {
      toast.error("Please fill out all fields");
      return;
    }

    if (unavailableCountries.some((country) => formData.country === country)) {
      toast.error("We are not available in your country");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    const storedEmails = JSON.parse(
      localStorage.getItem("submittedEmails") || "[]"
    );
    if (storedEmails.includes(formData.email)) {
      toast.error("This email has already been taken");
      return;
    }

    storedEmails.push(formData.email);
    localStorage.setItem("submittedEmails", JSON.stringify(storedEmails));

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Registration successful");
      onContinue();
    }, 1000);
  };

  return (
    <div className="signup-step">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Create Your Wallet</h2>
        <p className="text-muted-foreground">
          Enter your details to get started
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Select
            value={formData.country}
            onValueChange={(value) => handleSelectChange("country", value)}
          >
            <SelectTrigger id="country" className="w-full">
              <SelectValue placeholder="Select your country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="ur">Uruguay</SelectItem>
              <SelectItem value="ar">Argentina</SelectItem>
              <SelectItem value="br">Brazil</SelectItem>
              <SelectItem value="co">Colombia</SelectItem>
              <SelectItem value="ec">Ecuador</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
              <SelectItem value="in">India</SelectItem>
              {/* Add more countries as needed */}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john.doe@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="+1 (555) 123-4567"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="document-type">ID Document Type</Label>
          <Select
            value={formData.documentType}
            onValueChange={(value) => handleSelectChange("documentType", value)}
          >
            <SelectTrigger id="document-type" className="w-full">
              <SelectValue placeholder="Select identification document" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pass">Passport</SelectItem>
              <SelectItem value="drivers-license">
                Driver&apos;s License
              </SelectItem>
              <SelectItem value="id-card">National ID Card</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="id-document">Upload ID Document</Label>
          <div
            className={`border-2 border-dashed rounded-lg p-4 text-center ${
              frontImage ? "border-primary" : "border-border"
            } hover:border-primary/50 transition-colors`}
          >
            <input
              type="file"
              id="id-document"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
            <label
              htmlFor="id-document"
              className="cursor-pointer flex flex-col items-center py-2"
            >
              {frontImage ? (
                <>
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
                    className="text-primary mb-2"
                  >
                    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.3.3 0 1 0 .2.3"></path>
                    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path>
                    <circle cx="20" cy="10" r="2"></circle>
                  </svg>
                  <span className="text-sm font-medium text-foreground">
                    {frontImage.name}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">
                    Click to change
                  </span>
                </>
              ) : (
                <>
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
                    className="text-muted-foreground mb-2"
                  >
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
                    <rect width="6" height="6" x="16" y="2" rx="1"></rect>
                    <path d="m9 14 2 2 4-4"></path>
                  </svg>
                  <span className="text-xs text-muted-foreground mt-1">
                    Click to browse
                  </span>
                </>
              )}
            </label>
          </div>
        </div>

        <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg flex items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 mt-0.5"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
          <span>
            Your data is encrypted and secure. We comply with KYC and AML
            regulations.
          </span>
        </div>

        <div className="pt-4 flex gap-3">
          <Button
            type="button"
            onClick={onBack}
            variant="outline"
            className="flex-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
            Back
          </Button>

          <Button
            type="submit"
            className="signup-button flex-1"
            disabled={loading}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </>
            ) : (
              <>
                Create Wallet
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
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
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
