/** @format */

import { useState } from "react";
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

interface IdentityVerificationProps {
  onContinue: () => void;
  onBack: () => void;
}

const IdentityVerification = ({
  onContinue,
  onBack,
}: IdentityVerificationProps) => {
  const [documentType, setDocumentType] = useState("");
  const [frontImage, setFrontImage] = useState<File | null>(null);
  const [backImage, setBackImage] = useState<File | null>(null);
  const [selfie, setSelfie] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!documentType || !frontImage || !backImage || !selfie) {
      toast.error("Please complete all verification steps");
      return;
    }

    setLoading(true);

    // Simulate API call for document verification
    setTimeout(() => {
      setLoading(false);
      toast.success("Identity verification submitted successfully");
      onContinue();
    }, 1500);
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    if (e.target.files && e.target.files[0]) {
      setter(e.target.files[0]);
      toast.success("Document uploaded successfully");
    }
  };

  return (
    <div className="signup-step">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Identity Verification</h2>
        <p className="text-muted-foreground">
          We need to verify your identity to comply with regulations
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="document-type">Document Type</Label>
          <Select value={documentType} onValueChange={setDocumentType}>
            <SelectTrigger id="document-type" className="w-full">
              <SelectValue placeholder="Select identification document" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="passport">Passport</SelectItem>
              <SelectItem value="drivers-license">
                Driver&apos;s License
              </SelectItem>
              <SelectItem value="id-card">National ID Card</SelectItem>
              <SelectItem value="residence-permit">Residence Permit</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="front-image">Front of Document</Label>
            <div
              className={`border-2 border-dashed rounded-lg p-4 text-center ${
                frontImage ? "border-primary" : "border-border"
              } hover:border-primary/50 transition-colors`}
            >
              <input
                type="file"
                id="front-image"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleFileChange(e, setFrontImage)}
              />
              <label
                htmlFor="front-image"
                className="cursor-pointer flex flex-col items-center"
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
                    <span className="text-sm font-medium">
                      Upload front side
                    </span>
                    <span className="text-xs text-muted-foreground mt-1">
                      Click to browse
                    </span>
                  </>
                )}
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="back-image">Back of Document</Label>
            <div
              className={`border-2 border-dashed rounded-lg p-4 text-center ${
                backImage ? "border-primary" : "border-border"
              } hover:border-primary/50 transition-colors`}
            >
              <input
                type="file"
                id="back-image"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleFileChange(e, setBackImage)}
              />
              <label
                htmlFor="back-image"
                className="cursor-pointer flex flex-col items-center"
              >
                {backImage ? (
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
                      {backImage.name}
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
                    <span className="text-sm font-medium">
                      Upload back side
                    </span>
                    <span className="text-xs text-muted-foreground mt-1">
                      Click to browse
                    </span>
                  </>
                )}
              </label>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="selfie">Selfie with Document</Label>
          <div
            className={`border-2 border-dashed rounded-lg p-4 text-center ${
              selfie ? "border-primary" : "border-border"
            } hover:border-primary/50 transition-colors`}
          >
            <input
              type="file"
              id="selfie"
              className="hidden"
              accept="image/*"
              onChange={(e) => handleFileChange(e, setSelfie)}
            />
            <label
              htmlFor="selfie"
              className="cursor-pointer flex flex-col items-center py-3"
            >
              {selfie ? (
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
                    <path d="M9 21H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-1"></path>
                    <circle cx="12" cy="16" r="1"></circle>
                  </svg>
                  <span className="text-sm font-medium text-foreground">
                    {selfie.name}
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="10" r="3"></circle>
                    <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                  </svg>
                  <span className="text-sm font-medium">
                    Upload a selfie holding your ID
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">
                    Make sure your face is clearly visible
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
            For verification, please ensure all documents are valid, not
            expired, and clearly visible. Your selfie should show your face and
            the ID document together.
          </span>
        </div>

        <div className="flex gap-3">
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
            disabled={
              loading || !documentType || !frontImage || !backImage || !selfie
            }
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
                Verifying...
              </>
            ) : (
              <>
                Submit Verification
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

      <div className="border-t border-border mt-6 pt-4">
        <div className="flex items-center text-xs text-muted-foreground">
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
            className="mr-2"
          >
            <path d="m9 12 2 2 4-4"></path>
            <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7z"></path>
            <path d="M22 12v4a2 2 0 0 1-2 2h-4"></path>
            <path d="M22 12h-4a2 2 0 0 1-2-2V6"></path>
            <path d="M6 6v4a2 2 0 0 0 2 2h4"></path>
          </svg>
          Your documents are securely processed and encrypted. Nova Wallet
          complies with KYC and AML regulations.
        </div>
      </div>
    </div>
  );
};

export default IdentityVerification;
