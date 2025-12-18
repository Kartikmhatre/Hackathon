import { useEffect, useState, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function AuthCallback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [status, setStatus] = useState("Authenticating...");
  const hasRun = useRef(false);

  useEffect(() => {
    // Prevent double execution in React StrictMode
    if (hasRun.current) return;
    hasRun.current = true;

    const code = searchParams.get("code");
    const errorParam = searchParams.get("error");
    
    if (errorParam) {
      setError("Authentication was cancelled or failed");
      return;
    }
    
    if (code) {
      handleGoogleCallback(code);
    } else {
      setError("No authorization code received");
    }
  }, [searchParams]);

  const handleGoogleCallback = async (code: string) => {
    try {
      setStatus("Verifying with Google...");
      
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, redirectUri: `${window.location.origin}/auth/callback` }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Google authentication failed");
      }

      setStatus("Setting up your account...");
      
      // Store auth data
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      
      // Small delay to ensure localStorage is synced before navigation
      await new Promise(resolve => setTimeout(resolve, 100));
      
      setStatus("Redirecting...");
      
      // Use replace to prevent back button issues
      navigate("/ai-detector", { replace: true });
    } catch (err: any) {
      setError(err.message || "Authentication failed");
    }
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="text-center max-w-md px-6">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className="text-xl font-semibold text-white mb-2">Authentication Failed</h1>
          <p className="text-zinc-400 mb-6">{error}</p>
          <a href="/login" className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium transition-colors">
            Back to Login
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
      <div className="text-center">
        <div className="w-12 h-12 mx-auto mb-4 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-zinc-400 text-sm">{status}</p>
      </div>
    </div>
  );
}
