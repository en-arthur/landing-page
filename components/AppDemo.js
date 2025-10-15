'use client';

import { motion } from 'framer-motion';
import { Smartphone, Zap, Palette, Code, Layout, Sparkles } from 'lucide-react';

const demoFeatures = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Build apps in minutes with AI-powered generation',
  },
  {
    icon: Palette,
    title: 'Beautiful UI',
    description: 'Modern, responsive designs out of the box',
  },
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Production-ready code with best practices',
  },
  {
    icon: Layout,
    title: 'Flexible Layouts',
    description: 'Customize every aspect of your app',
  },
];

export default function AppDemo() {
  return (
    <section id="app-demo" className="py-24 px-6 bg-white dark:bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">App Demo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See InitFlow in Action
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Experience the power of AI-driven app development. Watch how InitFlow transforms your ideas into reality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Phone Mockup */}
            <div className="relative mx-auto max-w-sm">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-[3rem] blur-3xl opacity-20" />
              
              {/* Phone Frame */}
              <div className="relative bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-[3rem] p-3 border border-foreground/10">
                {/* Screen */}
                <div className="bg-white dark:bg-background rounded-[2.5rem] overflow-hidden shadow-2xl">
                  {/* Status Bar */}
                  <div className="bg-gradient-to-r from-primary to-secondary h-1" />
                  
                  {/* App Content */}
                  <div className="p-6 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="h-8 w-24 bg-gradient-to-r from-primary to-secondary rounded-lg" />
                      <div className="h-8 w-8 bg-foreground/5 rounded-full" />
                    </div>
                    
                    {/* Hero Card */}
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20">
                      <div className="h-4 w-32 bg-primary/30 rounded mb-3" />
                      <div className="h-3 w-full bg-primary/20 rounded mb-2" />
                      <div className="h-3 w-3/4 bg-primary/20 rounded" />
                    </div>
                    
                    {/* Feature Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="bg-foreground/5 rounded-xl p-4 border border-foreground/5">
                          <div className="h-8 w-8 bg-gradient-to-br from-primary to-secondary rounded-lg mb-3" />
                          <div className="h-2 w-16 bg-foreground/20 rounded mb-2" />
                          <div className="h-2 w-12 bg-foreground/10 rounded" />
                        </div>
                      ))}
                    </div>
                    
                    {/* Bottom Card */}
                    <div className="bg-foreground/5 rounded-2xl p-4 border border-foreground/5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 bg-gradient-to-br from-primary to-secondary rounded-full" />
                        <div className="flex-1">
                          <div className="h-2 w-20 bg-foreground/20 rounded mb-2" />
                          <div className="h-2 w-16 bg-foreground/10 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-lg flex items-center justify-center"
              >
                <Smartphone className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {demoFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl bg-foreground/[0.02] border border-foreground/5 hover:border-primary/20 hover:bg-foreground/[0.04] transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent p-0.5">
                    <div className="w-full h-full bg-white dark:bg-background rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" strokeWidth={2} />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-foreground/60">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
