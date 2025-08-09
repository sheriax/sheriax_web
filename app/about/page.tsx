'use client';

import { motion } from '@/components/ui/motion';
import { Award, Users2, Globe2, HeartHandshake } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Prompt: "Team collaborating with holographic interface and AI assistant" */}
      <motion.section 
        className="py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold">About Sheriax</h1>
        <p className="mt-4 text-xl text-foreground/70 max-w-4xl">
          Sheriax Solutions is a multi-disciplinary technology studio building delightful, future-ready products.
          We blend AI, thoughtful design, and robust engineering to solve problems that matter.
        </p>
        <div className="mt-8 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <p className="text-foreground/50">About Hero Image Placeholder</p>
            <p className="text-foreground/30 text-sm mt-2">&quot;Team collaborating with holographic interface and AI assistant&quot;</p>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-8">Our Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div className="rounded-lg border border-white/10 p-6 hover:border-white/20" whileHover={{ y: -4 }}>
            <Award className="w-7 h-7 text-yellow-500 mb-3" />
            <h3 className="font-medium">Craft with excellence</h3>
            <p className="text-foreground/70 text-sm mt-2">We obsess over details and ship with quality.</p>
          </motion.div>
          <motion.div className="rounded-lg border border-white/10 p-6 hover:border-white/20" whileHover={{ y: -4 }}>
            <Users2 className="w-7 h-7 text-blue-500 mb-3" />
            <h3 className="font-medium">Design for humans</h3>
            <p className="text-foreground/70 text-sm mt-2">Empathy-led processes for usable, accessible products.</p>
          </motion.div>
          <motion.div className="rounded-lg border border-white/10 p-6 hover:border-white/20" whileHover={{ y: -4 }}>
            <Globe2 className="w-7 h-7 text-green-500 mb-3" />
            <h3 className="font-medium">Think sustainably</h3>
            <p className="text-foreground/70 text-sm mt-2">We prioritize longevity and responsible tech.</p>
          </motion.div>
          <motion.div className="rounded-lg border border-white/10 p-6 hover:border-white/20" whileHover={{ y: -4 }}>
            <HeartHandshake className="w-7 h-7 text-pink-500 mb-3" />
            <h3 className="font-medium">Partner, not vendor</h3>
            <p className="text-foreground/70 text-sm mt-2">Collaborative engagement focused on outcomes.</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="rounded-lg border border-white/10 p-8">
          <h3 className="text-xl font-semibold">Our Story</h3>
          <p className="mt-2 text-foreground/70">
            Started by a small team of builders, Sheriax has grown into a studio delivering impactful products across AI, web, mobile, and immersive technology.
            We cut complexity for our clients, turning ambitious ideas into well-crafted, scalable reality.
          </p>
          <div className="mt-6 h-56 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-md flex items-center justify-center">
            <div className="text-center">
              <p className="text-foreground/50">Studio Culture Image Placeholder</p>
              <p className="text-foreground/30 text-sm mt-2">&quot;Diverse team collaborating in modern studio with whiteboards and screens&quot;</p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
