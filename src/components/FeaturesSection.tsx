import { motion } from 'framer-motion';
import { Smartphone, Zap, Shield, Gift } from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: 'Order from Phone',
    desc: 'Browse the menu, customize, and order right from your phone. No more standing in queues.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    desc: 'Real-time order tracking with an average preparation time of just 15 minutes.',
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    desc: 'Pay securely with Stripe. Your payment details are always encrypted and safe.',
  },
  {
    icon: Gift,
    title: 'Loyalty Rewards',
    desc: 'Earn points on every order. Redeem them for free meals and exclusive discounts.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-gradient-warm py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-extrabold text-foreground">
            Why <span className="text-gradient">SmartCanteen</span>?
          </h2>
          <p className="mx-auto max-w-md text-muted-foreground">
            We're building the future of campus dining — fast, smart, and delightful.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-card p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary">
                <f.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
