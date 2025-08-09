/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { ArrowRight, Headphones, Eye, Box, Users } from 'lucide-react';
import { motion } from '@/components/ui/motion';

export default function ARVRPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Prompt: "Immersive AR/VR experience with headset and holograms" */}
      <motion.section
        className="py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold">AR / VR</h1>
        <p className="mt-4 text-xl text-foreground/70 max-w-4xl">
          Create immersive experiences that blend digital and physical worlds
          with interactive AR/VR prototypes and production-ready apps. From
          concept to reality in virtual worlds.
        </p>
        <div className="mt-8 h-72 rounded-lg overflow-hidden border border-white/10">
          <img
            src="/images/ar-vr-immersive-experience.jpeg"
            alt="Immersive AR/VR experience with headset and holograms"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.section>

      <motion.section
        className="py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-8">Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="rounded-lg border border-white/10 p-6 hover:border-white/20"
            whileHover={{ y: -4 }}
          >
            <Eye className="w-7 h-7 text-purple-500 mb-3" />
            <h3 className="font-medium">
              WebXR experiences for browser-based AR/VR
            </h3>
            <p className="text-foreground/70 text-sm mt-2">
              Cross-platform immersive web experiences accessible from any
              device.
            </p>
          </motion.div>
          <motion.div
            className="rounded-lg border border-white/10 p-6 hover:border-white/20"
            whileHover={{ y: -4 }}
          >
            <Box className="w-7 h-7 text-pink-500 mb-3" />
            <h3 className="font-medium">3D asset pipelines and optimization</h3>
            <p className="text-foreground/70 text-sm mt-2">
              Efficient workflows for creating and optimizing 3D content.
            </p>
          </motion.div>
          <motion.div
            className="rounded-lg border border-white/10 p-6 hover:border-white/20"
            whileHover={{ y: -4 }}
          >
            <Headphones className="w-7 h-7 text-blue-500 mb-3" />
            <h3 className="font-medium">Unity/Unreal prototyping</h3>
            <p className="text-foreground/70 text-sm mt-2">
              Rapid prototyping with industry-standard game engines.
            </p>
          </motion.div>
          <motion.div
            className="rounded-lg border border-white/10 p-6 hover:border-white/20"
            whileHover={{ y: -4 }}
          >
            <Users className="w-7 h-7 text-green-500 mb-3" />
            <h3 className="font-medium">
              Spatial UX research & usability testing
            </h3>
            <p className="text-foreground/70 text-sm mt-2">
              Human-centered design for immersive experiences.
            </p>
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
        <div className="rounded-lg border border-white/10 p-8 text-center">
          <h3 className="text-xl font-semibold">
            Want to explore immersive experiences?
          </h3>
          <p className="mt-2 text-foreground/70">
            Let&apos;s turn concepts into interactive realities.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-5 py-3 text-sm font-medium hover:bg-blue-500 transition-colors"
          >
            Get Started <ArrowRight size={16} />
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
