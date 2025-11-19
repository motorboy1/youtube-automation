'use client'

import { motion } from 'framer-motion'
import { Sparkles, Code2, Database, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface MainPanelProps {
  children?: ReactNode
}

export default function MainPanel({ children }: MainPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex-1 bg-background flex flex-col overflow-hidden"
    >
      {/* Header */}
      <div className="h-12 px-6 flex items-center border-b border-border">
        <div className="flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-primary" />
          <h2 className="font-semibold">Main Workspace</h2>
        </div>
      </div>

      {/* SubHeader */}
      <div className="h-10 px-6 flex items-center border-b border-border bg-muted/20">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Home</span>
          <span>/</span>
          <span className="text-foreground">Dashboard</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto">
        {children || (
          <div className="h-full p-6">
            {/* Welcome Content */}
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Hero Section */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-center space-y-4 py-12"
              >
                <h1 className="text-4xl font-bold tracking-tight">
                  Welcome to <span className="text-primary">DanteLabs</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Global Automation System - Unified UI Framework for 15+ automation tools
                </p>
              </motion.div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    icon: Code2,
                    title: 'Three-Pane Mode',
                    description: 'Full workspace with navigation, main panel, and controls',
                    color: 'text-blue-500',
                  },
                  {
                    icon: Database,
                    title: 'IDE Mode',
                    description: 'Developer-focused layout with file tree and console',
                    color: 'text-green-500',
                  },
                  {
                    icon: Zap,
                    title: 'Dashboard Mode',
                    description: 'High-level overview with metrics and quick actions',
                    color: 'text-yellow-500',
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all"
                  >
                    <feature.icon className={cn('w-10 h-10 mb-4', feature.color)} />
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Quick Stats */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
              >
                {[
                  { label: 'Active Tools', value: '5' },
                  { label: 'Workflows', value: '12' },
                  { label: 'Automations', value: '38' },
                  { label: 'Success Rate', value: '98%' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-muted/50 text-center"
                  >
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* Getting Started */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-12 p-6 rounded-xl border border-border bg-accent/50"
              >
                <h3 className="font-semibold text-lg mb-3">Getting Started</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Select a tool from the left panel
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Configure your workflow in the right panel
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Switch between layout modes using the mode selector
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Monitor progress in the console (IDE mode)
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="h-8 px-6 flex items-center justify-between border-t border-border text-xs text-muted-foreground">
        <span>DanteLabs Global Automation System v1.0.0</span>
        <span>Ready</span>
      </div>
    </motion.div>
  )
}
