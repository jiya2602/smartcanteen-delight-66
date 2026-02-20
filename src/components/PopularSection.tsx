import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FoodCard from './FoodCard';
import { menuItems } from '@/data/menuData';

const PopularSection = () => {
  const popular = menuItems.slice(0, 3);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <h2 className="text-4xl font-extrabold text-foreground">
              Today's <span className="text-gradient">Specials</span>
            </h2>
            <p className="mt-2 text-muted-foreground">
              Fresh, hot, and ready in minutes
            </p>
          </div>
          <Link to="/menu">
            <motion.span
              whileHover={{ x: 5 }}
              className="hidden items-center gap-1 text-sm font-semibold text-primary md:flex"
            >
              View Full Menu <ArrowRight className="h-4 w-4" />
            </motion.span>
          </Link>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((item, i) => (
            <FoodCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSection;
