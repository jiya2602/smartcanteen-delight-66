import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, UtensilsCrossed, ArrowRight } from 'lucide-react';

const LoginPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-hero px-4 py-20">
      {/* Decorative */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute left-[5%] top-[20%] text-6xl select-none opacity-20"
      >
        🍕
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute right-[10%] top-[30%] text-5xl select-none opacity-20"
      >
        🍔
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        className="absolute left-[15%] bottom-[20%] text-5xl select-none opacity-20"
      >
        🍛
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="glass rounded-3xl p-8 shadow-card">
          {/* Logo */}
          <div className="mb-8 flex flex-col items-center">
            <motion.div
              whileHover={{ rotate: 15 }}
              className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow"
            >
              <UtensilsCrossed className="h-7 w-7 text-primary-foreground" />
            </motion.div>
            <h1 className="text-2xl font-bold text-foreground">
              {isRegister ? 'Create Account' : 'Welcome Back'}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {isRegister ? 'Join SmartCanteen today' : 'Sign in to your account'}
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {isRegister && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-input bg-card py-3 pl-10 pr-4 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-ring/20"
                  />
                </div>
              </motion.div>
            )}

            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-input bg-card py-3 pl-10 pr-4 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-ring/20"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-input bg-card py-3 pl-10 pr-10 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-ring/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary py-3.5 text-sm font-bold text-primary-foreground shadow-glow"
            >
              {isRegister ? 'Create Account' : 'Sign In'} <ArrowRight className="h-4 w-4" />
            </motion.button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              onClick={() => setIsRegister(!isRegister)}
              className="font-semibold text-primary hover:underline"
            >
              {isRegister ? 'Sign In' : 'Register'}
            </button>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default LoginPage;
