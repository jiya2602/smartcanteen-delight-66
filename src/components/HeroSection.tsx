import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-food.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-hero pt-20">
      {/* Floating decorative circles */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[10%] top-[15%] h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute left-[5%] top-[60%] h-48 w-48 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-12 px-4 lg:flex-row">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
          >
            <span className="animate-bounce-gentle">🇮🇳</span> Made in India — Campus Food, Reimagined
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-foreground md:text-7xl"
          >
            Your Campus
            <br />
            <span className="text-gradient">Canteen,</span>
            <br />
            Now Smart.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8 max-w-lg text-lg text-muted-foreground lg:text-xl"
          >
            Order delicious meals, skip the queue, track your food in real-time. 
            The smartest way to eat on campus.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <Link to="/menu">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-2xl bg-gradient-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-glow transition-shadow hover:shadow-[0_0_50px_hsl(33_100%_50%_/_0.5)]"
              >
                Order Now <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>
            <Link to="/menu">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-2xl border-2 border-border bg-card px-8 py-4 text-lg font-semibold text-foreground"
              >
                Browse Menu
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex items-center gap-8 text-center lg:justify-start"
          >
            {[
              { icon: Star, label: '4.9 Rating', sub: '2K+ reviews' },
              { icon: Clock, label: '15 min', sub: 'Avg delivery' },
              { icon: Truck, label: '10K+', sub: 'Orders served' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-2">
                <stat.icon className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <div className="text-sm font-bold text-foreground">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.sub}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
          className="relative flex-1"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-20 blur-3xl" />
            <img
              src={heroImage}
              alt="Delicious Indian food spread"
              className="relative rounded-3xl shadow-2xl"
            />
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: 'spring' }}
            className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-2xl bg-card px-4 py-3 shadow-card"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-lg">
              🔥
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">Most Popular</div>
              <div className="text-xs text-muted-foreground">Butter Chicken</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-2 w-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
