'use client';

import { motion } from 'framer-motion';
import { Play, Smartphone, Zap, Code, Sparkles } from 'lucide-react';

export default function AppDemo() {
  return (
    <section id="app-demo" className="py-24 px-6 bg-gradient-to-b from-background to-foreground/[0.02]">
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
            See InitFlow in Action
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Watch how easy it is to build beautiful mobile apps with AI assistance
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Video/Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 border border-foreground/10 aspect-video flex items-center justify-center group cursor-pointer hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300">
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 rounded-full bg-white dark:bg-foreground/90 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300"
                >
                  <Play className="w-10 h-10 text-primary ml-1" fill="currentColor" />
                </motion.div>
              </div>
              
              {/* Demo Screenshot Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <Smartphone className="w-32 h-32 text-primary" strokeWidth={1} />
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white dark:bg-foreground/10 rounded-xl p-4 shadow-lg border border-foreground/10"
            >
              <Sparkles className="w-6 h-6 text-primary" />
            </motion.div>
          </motion.div>

          {/* Demo Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent p-0.5">
                <div className="w-full h-full bg-white dark:bg-background rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Lightning Fast Development</h3>
                <p className="text-foreground/60">
                  Build complete mobile apps in minutes, not weeks. Our AI understands your requirements and generates production-ready code instantly.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent p-0.5">
                <div className="w-full h-full bg-white dark:bg-background rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Clean, Maintainable Code</h3>
                <p className="text-foreground/60">
                  Get well-structured, documented code that follows best practices. Easy to customize and extend as your app grows.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent p-0.5">
                <div className="w-full h-full bg-white dark:bg-background rounded-xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Cross-Platform Ready</h3>
                <p className="text-foreground/60">
                  Build once, deploy everywhere. Your apps work seamlessly on iOS and Android with native performance.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-foreground/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">10x</div>
                <div className="text-sm text-foreground/60">Faster</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-foreground/60">AI-Powered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">0</div>
                <div className="text-sm text-foreground/60">Code Required</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
