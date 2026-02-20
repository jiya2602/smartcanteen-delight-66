import { motion } from 'framer-motion';
import { Package, Clock, CheckCircle, Truck } from 'lucide-react';
import Footer from '@/components/Footer';

const mockOrders = [
  {
    id: 'ORD-2024-001',
    items: ['Butter Chicken', 'Naan x2'],
    total: 349,
    status: 'delivered',
    time: '12:30 PM',
  },
  {
    id: 'ORD-2024-002',
    items: ['Masala Dosa', 'Filter Coffee'],
    total: 149,
    status: 'preparing',
    time: '1:15 PM',
  },
  {
    id: 'ORD-2024-003',
    items: ['Paneer Tikka', 'Biryani'],
    total: 378,
    status: 'ready',
    time: '1:45 PM',
  },
];

const statusConfig: Record<string, { icon: typeof Clock; label: string; color: string }> = {
  pending: { icon: Clock, label: 'Pending', color: 'bg-muted text-muted-foreground' },
  preparing: { icon: Package, label: 'Preparing', color: 'bg-primary/15 text-primary' },
  ready: { icon: CheckCircle, label: 'Ready', color: 'bg-green-100 text-green-700' },
  delivered: { icon: Truck, label: 'Delivered', color: 'bg-secondary text-muted-foreground' },
};

const steps = ['Placed', 'Preparing', 'Ready', 'Delivered'];

const OrdersPage = () => {
  const getStepIndex = (status: string) => {
    const map: Record<string, number> = { pending: 0, preparing: 1, ready: 2, delivered: 3 };
    return map[status] ?? 0;
  };

  return (
    <main className="pt-24">
      <div className="container mx-auto px-4 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="text-4xl font-extrabold text-foreground">
            My <span className="text-gradient">Orders</span>
          </h1>
          <p className="mt-2 text-muted-foreground">Track your orders in real-time</p>
        </motion.div>

        <div className="space-y-6">
          {mockOrders.map((order, idx) => {
            const stepIdx = getStepIndex(order.status);
            const cfg = statusConfig[order.status];
            const Icon = cfg.icon;

            return (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl bg-card p-6 shadow-card"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-foreground">{order.id}</h3>
                    <p className="text-xs text-muted-foreground">{order.time}</p>
                  </div>
                  <span className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${cfg.color}`}>
                    <Icon className="h-3 w-3" /> {cfg.label}
                  </span>
                </div>

                <div className="mb-4 text-sm text-foreground">
                  {order.items.join(', ')}
                  <span className="ml-2 font-bold text-primary">₹{order.total}</span>
                </div>

                {/* Progress Stepper */}
                <div className="flex items-center gap-1">
                  {steps.map((step, i) => (
                    <div key={step} className="flex flex-1 flex-col items-center">
                      <div className="mb-1 flex w-full items-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: idx * 0.1 + i * 0.15 }}
                          className={`h-3 w-3 rounded-full border-2 ${
                            i <= stepIdx
                              ? 'border-primary bg-primary'
                              : 'border-border bg-card'
                          }`}
                        />
                        {i < steps.length - 1 && (
                          <div className="h-0.5 flex-1">
                            <motion.div
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: i < stepIdx ? 1 : 0 }}
                              transition={{ delay: idx * 0.1 + i * 0.15, duration: 0.4 }}
                              className="h-full origin-left bg-primary"
                            />
                          </div>
                        )}
                      </div>
                      <span className={`text-[10px] ${i <= stepIdx ? 'font-medium text-primary' : 'text-muted-foreground'}`}>
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default OrdersPage;
