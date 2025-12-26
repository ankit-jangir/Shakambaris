import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, User as UserIcon } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
  onNavigate: (page: string) => void;
}

export function Login({ onLogin, onNavigate }: LoginProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
    onNavigate('home');
  };

  return (
    <section className="min-h-[80vh] py-12 bg-gradient-to-br from-[#fdfbf7] to-white flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1618453731654-3eb0816cd121?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbnV0cyUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NjY1NjY1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Login"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d1f1a]/50 to-transparent rounded-3xl flex items-end p-12">
                <div className="text-white">
                  <h2
                    className="text-4xl mb-4"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Welcome to Shakambaris
                  </h2>
                  <p className="text-white/90">
                    Join our healthy community and enjoy exclusive benefits
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl">
              <h1
                className="text-3xl text-[#2d1f1a] mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {isSignUp ? 'Create Account' : 'Welcome Back'}
              </h1>
              <p className="text-foreground/70 mb-8">
                {isSignUp
                  ? 'Sign up to start your healthy journey'
                  : 'Sign in to your account'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {isSignUp && (
                  <div>
                    <label className="block mb-2">Full Name</label>
                    <div className="relative">
                      <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-input-background rounded-xl border border-border outline-none focus:ring-2 focus:ring-[#6b4423]"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-input-background rounded-xl border border-border outline-none focus:ring-2 focus:ring-[#6b4423]"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-input-background rounded-xl border border-border outline-none focus:ring-2 focus:ring-[#6b4423]"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                {!isSignUp && (
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-foreground/70">Remember me</span>
                    </label>
                    <a href="#" className="text-[#6b4423] hover:underline">
                      Forgot password?
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-4 bg-[#6b4423] text-white rounded-full hover:bg-[#543318] transition-colors shadow-lg hover:shadow-xl"
                >
                  {isSignUp ? 'Sign Up' : 'Sign In'}
                </button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-foreground/70 hover:text-[#6b4423] transition-colors"
                  >
                    {isSignUp
                      ? 'Already have an account? Sign In'
                      : "Don't have an account? Sign Up"}
                  </button>
                </div>
              </form>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-foreground/60 text-center">
                  By continuing, you agree to our Terms of Service and Privacy
                  Policy
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
