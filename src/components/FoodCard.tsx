import { motion } from 'framer-motion';
import { Plus, Leaf } from 'lucide-react';
import type { FoodItem } from '@/stores/cartStore';
import { useCartStore } from '@/stores/cartStore';

interface FoodCardProps {
  item: FoodItem;
  index: number;
}

const FoodCard = ({ item, index }: FoodCardProps) => {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-2xl bg-card shadow-card transition-shadow duration-300 hover:shadow-card-hover"
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute left-3 top-3">
          {item.isVeg ? (
            <span className="flex items-center gap-1 rounded-full bg-card/90 px-2 py-1 text-xs font-medium backdrop-blur-sm">
              <Leaf className="h-3 w-3 text-green-600" /> Veg
            </span>
          ) : (
            <span className="flex items-center gap-1 rounded-full bg-card/90 px-2 py-1 text-xs font-medium text-accent backdrop-blur-sm">
              ● Non-Veg
            </span>
          )}
        </div>
        <div className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">
          ₹{item.price}
        </div>
      </div>

      <div className="p-4">
        <div className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {item.category}
        </div>
        <h3 className="mb-1 text-lg font-semibold text-foreground">{item.name}</h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {item.description}
        </p>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => addItem(item)}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary py-2.5 text-sm font-semibold text-primary-foreground transition-shadow hover:shadow-glow"
        >
          <Plus className="h-4 w-4" /> Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default FoodCard;
