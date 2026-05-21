"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lock, Eye, EyeOff } from "lucide-react";

interface PasswordProtectionProps {
  children: React.ReactNode;
  password?: string;
}

export default function PasswordProtection({
  children,
  password = "Kitsune26"
}: PasswordProtectionProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated in this session
    const authenticated = sessionStorage.getItem("portfolio_authenticated");
    if (authenticated === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate a brief loading delay for UX
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (inputPassword === password) {
      setIsAuthenticated(true);
      sessionStorage.setItem("portfolio_authenticated", "true");
    } else {
      setError("Incorrect password. Please try again.");
      setInputPassword("");
    }
    setIsLoading(false);
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Lock icon */}
        <motion.div
          className="text-center mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Lock className="w-10 h-10 text-primary" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
            Protected Content
          </h1>
          <p className="text-muted-foreground">
            This portfolio section is password protected
          </p>
        </motion.div>

        {/* Password form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-foreground"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                className="w-full px-4 py-3 pr-12 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                placeholder="Enter password"
                disabled={isLoading}
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                disabled={isLoading}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {error && (
            <motion.div
              className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {error}
            </motion.div>
          )}

          <motion.button
            type="submit"
            disabled={isLoading || !inputPassword}
            className="w-full py-3 px-6 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            whileHover={{ scale: isLoading ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <motion.div
                  className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                Verifying...
              </div>
            ) : (
              "Access Portfolio"
            )}
          </motion.button>
        </motion.form>

        {/* Footer hint */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-xs text-muted-foreground">
            Authentication is required to view detailed case studies
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}