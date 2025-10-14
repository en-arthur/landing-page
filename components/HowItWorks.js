'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Wand2, Download } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Describe Your App',
    description: 'Tell InitFlow what you want to build using natural language. Be as detailed or simple as you like.',
    color: 'primary',
  },
  {
    icon: Wand2,
    title: 'AI Builds It',
    description: 'Our AI analyzes your requirements and generates a complete mobile app with UI, features, and functionality.',
    color: 'accent',
  },
  {
    icon: Download,
    title: 'Export & Launch',
    description: 'Preview, customize, and export your app. Deploy to app stores or download the source code.',
    color: 'secondary',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            From idea to app in three simple steps
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary opacity-20" />

          <div className="grid md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="flex flex-col items-center text-center">
                  <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br from-${step.color} to-${step.color === 'primary' ? 'accent' : step.color === 'accent' ? 'secondary' : 'primary'} p-0.5 mb-6`}>
                    <div className="w-full h-full bg-white dark:bg-background rounded-2xl flex items-center justify-center">
                      <step.icon className={`w-10 h-10 text-${step.color}`} strokeWidth={2} />
                    </div>
                    {/* Step number badge */}
                    <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-${step.color} to-${step.color === 'primary' ? 'accent' : step.color === 'accent' ? 'secondary' : 'primary'} text-white font-bold flex items-center justify-center text-sm shadow-lg`}>
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-semibold text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300">
            Start Building Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
