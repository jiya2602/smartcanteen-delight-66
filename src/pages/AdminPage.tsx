import { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Package, Clock, CheckCircle, Truck, GripVertical } from 'lucide-react';
import Footer from '@/components/Footer';

interface OrderCard {
  id: string;
  customer: string;
  items: string;
  total: number;
  time: string;
}

const initialColumns: Record<string, OrderCard[]> = {
  pending: [
    { id: 'A1', customer: 'Rahul S.', items: 'Butter Chicken, Naan x2', total: 349, time: '1:30 PM' },
    { id: 'A2', customer: 'Priya M.', items: 'Masala Dosa x2', total: 198, time: '1:35 PM' },
  ],
  preparing: [
    { id: 'B1', customer: 'Amit K.', items: 'Biryani, Raita', total: 229, time: '1:15 PM' },
  ],
  ready: [
    { id: 'C1', customer: 'Sneha R.', items: 'Paneer Tikka, Roti x3', total: 259, time: '12:50 PM' },
  ],
  delivered: [
    { id: 'D1', customer: 'Vikram T.', items: 'Chole Bhature', total: 149, time: '12:30 PM' },
  ],
};

const columnMeta: Record<string, { label: string; icon: typeof Clock; dotColor: string }> = {
  pending: { label: 'Pending', icon: Clock, dotColor: 'bg-yellow-500' },
  preparing: { label: 'Preparing', icon: Package, dotColor: 'bg-primary' },
  ready: { label: 'Ready', icon: CheckCircle, dotColor: 'bg-green-500' },
  delivered: { label: 'Delivered', icon: Truck, dotColor: 'bg-muted-foreground' },
};

const AdminPage = () => {
  const [columns] = useState(initialColumns);

  const totalOrders = Object.values(columns).flat().length;
  const totalRevenue = Object.values(columns).flat().reduce((sum, o) => sum + o.total, 0);

  return (
    <main className="pt-24">
      <div className="container mx-auto px-4 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary">
              <LayoutDashboard className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-extrabold text-foreground">Admin Dashboard</h1>
          </div>
          <p className="text-muted-foreground">Manage orders, track revenue, and update your menu</p>
        </motion.div>

        {/* Stats */}
        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: 'Total Orders', value: totalOrders, suffix: '' },
            { label: 'Revenue', value: `₹${totalRevenue}`, suffix: '' },
            { label: 'Active Items', value: 6, suffix: '' },
            { label: 'Avg Time', value: '15', suffix: 'min' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-5"
            >
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </div>
              <div className="mt-1 text-2xl font-bold text-foreground">
                {stat.value}
                {stat.suffix && <span className="ml-1 text-sm text-muted-foreground">{stat.suffix}</span>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Kanban */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(columns).map(([status, cards], colIdx) => {
            const meta = columnMeta[status];
            const Icon = meta.icon;

            return (
              <motion.div
                key={status}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: colIdx * 0.1 }}
                className="glass rounded-2xl p-4"
              >
                <div className="mb-4 flex items-center gap-2">
                  <div className={`h-2.5 w-2.5 rounded-full ${meta.dotColor}`} />
                  <h3 className="text-sm font-bold text-foreground">{meta.label}</h3>
                  <span className="ml-auto rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground">
                    {cards.length}
                  </span>
                </div>

                <div className="space-y-3">
                  {cards.map((card, i) => (
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: colIdx * 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      className="cursor-grab rounded-xl bg-card p-3 shadow-sm transition-shadow hover:shadow-card active:cursor-grabbing"
                    >
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-xs font-bold text-foreground">{card.customer}</span>
                        <GripVertical className="h-3 w-3 text-muted-foreground" />
                      </div>
                      <p className="text-xs text-muted-foreground">{card.items}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-xs font-bold text-primary">₹{card.total}</span>
                        <span className="text-[10px] text-muted-foreground">{card.time}</span>
                      </div>
                    </motion.div>
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

export default AdminPage;
