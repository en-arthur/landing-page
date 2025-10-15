'use client';

import { motion } from 'framer-motion';
import { Download as DownloadIcon, Apple, Monitor, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const platforms = [
  {
    name: 'Windows',
    icon: Monitor,
    version: 'Windows 10/11',
    size: '125 MB',
    downloadUrl: '#',
  },
  {
    name: 'macOS',
    icon: Apple,
    version: 'macOS 11+',
    size: '118 MB',
    downloadUrl: '#',
  },
  {
    name: 'Linux',
    icon: Monitor,
    version: 'Ubuntu 20.04+',
    size: '132 MB',
    downloadUrl: '#',
  },
];

export default function Download() {
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [downloadedPlatform, setDownloadedPlatform] = useState('');

  const handleDownload = (platformName) => {
    setDownloadedPlatform(platformName);
    setDownloadStarted(true);
    
    // Hide message after 5 seconds
    setTimeout(() => {
      setDownloadStarted(false);
    }, 5000);
  };

  return (
    <section id="download" className="py-24 px-6 bg-foreground/[0.02]">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Download InitFlow
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Available for all major desktop platforms. Choose your OS and start building.
          </p>
        </motion.div>

        {/* Download Started Message */}
        {downloadStarted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-8 mx-auto max-w-md"
          >
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
              <div>
                <p className="font-semibold text-green-800 dark:text-green-300">Download Started!</p>
                <p className="text-sm text-green-700 dark:text-green-400">
                  Your {downloadedPlatform} download will begin shortly. Check your downloads folder for more info.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Download Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white dark:bg-foreground/5 rounded-2xl p-8 border border-foreground/5 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent p-0.5 mb-6">
                <div className="w-full h-full bg-white dark:bg-background rounded-xl flex items-center justify-center">
                  <platform.icon className="w-8 h-8 text-primary" strokeWidth={2} />
                </div>
              </div>

              {/* Platform Info */}
              <h3 className="text-2xl font-semibold mb-2">{platform.name}</h3>
              <p className="text-foreground/60 mb-1">{platform.version}</p>
              <p className="text-sm text-foreground/40 mb-6">{platform.size}</p>

              {/* Download Button */}
              <button 
                onClick={() => handleDownload(platform.name)}
                className="w-full py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group-hover:scale-105"
              >
                <DownloadIcon className="w-5 h-5" />
                Download
              </button>

              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-foreground/60 mb-4">
            Free forever. No credit card required.
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm text-foreground/50">
            <span>✓ Automatic updates</span>
            <span>✓ Offline support</span>
            <span>✓ Cloud sync</span>
            <span>✓ 24/7 support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
