'use client';

import Link from 'next/link';
import { ArrowRight, Brain, Database, Eye, MessageSquare, BarChart3, Zap } from 'lucide-react';
import { motion } from '@/components/ui/motion';

export default function AIMLPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero */}
      <motion.section 
        className="py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-6">AI & Machine Learning</h1>
        <p className="text-xl text-foreground/70 max-w-4xl leading-relaxed">
          Unlock the power of Artificial Intelligence and Machine Learning to
          drive innovation in your business. We create intelligent solutions
          that learn, adapt, and deliver exceptional results, transforming data
          into actionable insights and competitive advantages.
        </p>
        {/* Prompt: "AI robot analyzing real-time data streams with floating holographic charts" */}
        <div className="mt-8 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <p className="text-foreground/50 text-lg">AI & ML Hero Image Placeholder</p>
            <p className="text-foreground/30 text-sm mt-2">&quot;AI robot analyzing real-time data streams with floating holographic charts&quot;</p>
          </div>
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section 
        className="py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-500">95%</div>
            <div className="text-foreground/70">Accuracy Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-500">50+</div>
            <div className="text-foreground/70">AI Models Deployed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-500">10x</div>
            <div className="text-foreground/70">Faster Processing</div>
          </div>
        </div>
      </motion.section>

      {/* Features */}
      <motion.section 
        className="py-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-12 text-center">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            className="rounded-lg border border-white/10 p-6 hover:border-white/20 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <Brain className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-medium mb-3">Machine Learning Models</h3>
            <p className="text-foreground/70">
              Custom ML models tailored to your data and business needs, from
              predictive analytics to recommendation systems and anomaly detection.
            </p>
          </motion.div>
          
          <motion.div 
            className="rounded-lg border border-white/10 p-6 hover:border-white/20 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <Eye className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="text-lg font-medium mb-3">Computer Vision</h3>
            <p className="text-foreground/70">
              Advanced image and video analysis capabilities for automation,
              quality control, intelligent monitoring, and object recognition.
            </p>
          </motion.div>
          
          <motion.div 
            className="rounded-lg border border-white/10 p-6 hover:border-white/20 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <MessageSquare className="w-8 h-8 text-green-500 mb-4" />
            <h3 className="text-lg font-medium mb-3">Natural Language Processing</h3>
            <p className="text-foreground/70">
              Sophisticated text analysis, chatbots, sentiment analysis, and language 
              understanding systems for enhanced user experiences.
            </p>
          </motion.div>
          
          <motion.div 
            className="rounded-lg border border-white/10 p-6 hover:border-white/20 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <Database className="w-8 h-8 text-orange-500 mb-4" />
            <h3 className="text-lg font-medium mb-3">Deep Learning Solutions</h3>
            <p className="text-foreground/70">
              Cutting-edge neural networks for complex pattern recognition,
              decision-making automation, and advanced AI applications.
            </p>
          </motion.div>
          
          <motion.div 
            className="rounded-lg border border-white/10 p-6 hover:border-white/20 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <BarChart3 className="w-8 h-8 text-red-500 mb-4" />
            <h3 className="text-lg font-medium mb-3">Predictive Analytics</h3>
            <p className="text-foreground/70">
              Forecast trends, optimize operations, and make data-driven decisions
              with advanced statistical modeling and machine learning algorithms.
            </p>
          </motion.div>
          
          <motion.div 
            className="rounded-lg border border-white/10 p-6 hover:border-white/20 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <Zap className="w-8 h-8 text-yellow-500 mb-4" />
            <h3 className="text-lg font-medium mb-3">AI Automation</h3>
            <p className="text-foreground/70">
              Streamline workflows and processes with intelligent automation
              that learns and adapts to your business requirements.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Use Cases */}
      <motion.section 
        className="py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-8">Industries We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-white/10 p-6">
            <h3 className="font-medium mb-2">Healthcare</h3>
            <p className="text-foreground/70 text-sm">Medical imaging analysis, drug discovery, patient diagnosis support</p>
          </div>
          <div className="rounded-lg border border-white/10 p-6">
            <h3 className="font-medium mb-2">Finance</h3>
            <p className="text-foreground/70 text-sm">Fraud detection, algorithmic trading, risk assessment, credit scoring</p>
          </div>
          <div className="rounded-lg border border-white/10 p-6">
            <h3 className="font-medium mb-2">E-commerce</h3>
            <p className="text-foreground/70 text-sm">Recommendation engines, demand forecasting, price optimization</p>
          </div>
          <div className="rounded-lg border border-white/10 p-6">
            <h3 className="font-medium mb-2">Manufacturing</h3>
            <p className="text-foreground/70 text-sm">Quality control, predictive maintenance, supply chain optimization</p>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section 
        className="py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="rounded-lg border border-white/10 p-8 text-center bg-gradient-to-r from-blue-500/5 to-purple-500/5">
          <h3 className="text-2xl font-semibold mb-4">
            Ready to transform your business with AI?
          </h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Let&apos;s discuss how AI and ML can elevate your operations, improve efficiency,
            and unlock new opportunities for growth and innovation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-6 py-3 text-sm font-medium hover:bg-blue-500 transition-colors"
          >
            Get Started <ArrowRight size={16} />
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
