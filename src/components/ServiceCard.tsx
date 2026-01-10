import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { motion } from '@/components/ui/motion';

interface ServiceCardProps {
  title: string;
  href: string;
  icon: LucideIcon;
}

export default function ServiceCard({
  title,
  href,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <Link
        href={href}
        className="group rounded-lg border border-border p-6 hover:bg-secondary/50 transition-all duration-300 hover:scale-[1.02]"
      >
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100/10">
            <Icon size={24} className="text-blue-500" />
          </div>
          <h3 className="font-medium">{title}</h3>
          <ArrowRight
            size={16}
            className="text-foreground/50 group-hover:text-blue-500 transition-colors"
          />
        </div>
      </Link>
    </motion.div>
  );
}
