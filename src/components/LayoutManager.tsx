'use client'

import { useEffect } from 'react'
import { useLayoutStore, LayoutMode } from '@/store/layout-store'
import { motion } from 'framer-motion'
import { Monitor, Code, LayoutDashboard } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * LayoutManager - Controls which layout mode is active
 * Provides UI controls to switch between:
 * - Three-Pane Mode (TopNavbar + LeftPanel + MainPanel + RightPanel)
 * - IDE Mode (LeftPanel + MainPanel + BottomPanel)
 * - Dashboard Mode (TopNavbar + MainPanel + RightPanel)
 */
export default function LayoutManager() {
  const { mode, applyModeLayout } = useLayoutStore()

  const modes: { id: LayoutMode; label: string; icon: any; description: string }[] = [
    {
      id: 'three-pane',
      label: 'Three-Pane',
      icon: Monitor,
      description: 'Full workspace layout',
    },
    {
      id: 'ide',
      label: 'IDE Mode',
      icon: Code,
      description: 'Development focused',
    },
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      description: 'Overview & metrics',
    },
  ]

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="flex gap-2 p-2 rounded-xl bg-background/95 backdrop-blur border border-border shadow-lg"
      >
        {modes.map((modeItem) => {
          const Icon = modeItem.icon
          const isActive = mode === modeItem.id

          return (
            <motion.button
              key={modeItem.id}
              onClick={() => applyModeLayout(modeItem.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'relative px-4 py-2.5 rounded-lg transition-all',
                'flex flex-col items-center gap-1.5 min-w-[100px]',
                isActive
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'hover:bg-accent text-muted-foreground hover:text-foreground'
              )}
            >
              <Icon className="w-5 h-5" />
              <div className="text-xs font-medium">{modeItem.label}</div>
              <div className={cn(
                'text-[10px]',
                isActive ? 'text-primary-foreground/70' : 'text-muted-foreground'
              )}>
                {modeItem.description}
              </div>

              {isActive && (
                <motion.div
                  layoutId="activeMode"
                  className="absolute inset-0 bg-primary rounded-lg -z-10"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          )
        })}
      </motion.div>
    </div>
  )
}
