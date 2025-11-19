'use client'

import { motion } from 'framer-motion'
import { Menu, Settings, Search, Bell } from 'lucide-react'
import { useLayoutStore } from '@/store/layout-store'
import { cn } from '@/lib/utils'

export default function TopNavbar() {
  const { togglePanel, mode } = useLayoutStore()

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="h-14 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      {/* Header */}
      <div className="h-full px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => togglePanel('leftPanel')}
            className="p-2 hover:bg-accent rounded-md transition-colors"
            aria-label="Toggle left panel"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">DL</span>
            </div>
            <h1 className="font-semibold text-lg">DanteLabs</h1>
          </div>

          <div className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium">
            {mode === 'three-pane' && 'Three-Pane Mode'}
            {mode === 'ide' && 'IDE Mode'}
            {mode === 'dashboard' && 'Dashboard Mode'}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-accent rounded-md transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-accent rounded-md transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full"></span>
          </button>
          <button className="p-2 hover:bg-accent rounded-md transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
