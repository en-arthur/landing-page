'use client';

import { motion } from 'framer-motion';
import { Sparkles, Smartphone, Zap, Code2, Layers, Rocket } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Generation',
    description: 'Describe your app idea and watch AI transform it into a fully functional mobile application instantly.',
    gradient: 'from-primary to-accent',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Beautiful, responsive interfaces optimized for iOS and Android with native performance.',
    gradient: 'from-accent to-secondary',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Build and iterate on your apps in real-time with instant previews and hot reload capabilities.',
    gradient: 'from-secondary to-primary',
  },
  {
    icon: Code2,
    title: 'No Code Required',
    description: 'Create professional apps without writing a single line of code. Perfect for entrepreneurs and creators.',
    gradient: 'from-primary to-secondary',
  },
  {
    icon: Layers,
    title: 'Cross-Platform',
    description: 'One codebase, multiple platforms. Deploy to iOS, Android, and web from a single project.',
    gradient: 'from-accent to-primary',
  },
  {
    icon: Rocket,
    title: 'Export & Deploy',
    description: 'Export your app code or deploy directly to app stores with one click. Full ownership guaranteed.',
    gradient: 'from-secondary to-accent',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-foreground/[0.02]">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to Build{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Amazing Apps
            </span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Powerful features that make app development accessible to everyone
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white dark:bg-foreground/5 rounded-2xl p-8 border border-foreground/5 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-6`}>
                <div className="w-full h-full bg-white dark:bg-background rounded-xl flex items-center justify-center">
                  <feature.icon className={`w-7 h-7 bg-gradient-to-br ${feature.gradient} bg-clip-text text-transparent`} strokeWidth={2} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
