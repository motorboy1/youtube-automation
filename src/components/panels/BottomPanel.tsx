'use client'

import { motion } from 'framer-motion'
import { Terminal, X, ChevronUp, Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { useLayoutStore } from '@/store/layout-store'

const CONSOLE_LOGS = [
  { time: '10:23:45', level: 'info', message: 'Workflow initialized successfully' },
  { time: '10:23:46', level: 'info', message: 'Loading configuration files...' },
  { time: '10:23:47', level: 'success', message: 'Configuration loaded' },
  { time: '10:23:48', level: 'info', message: 'Starting automation process...' },
  { time: '10:23:50', level: 'warning', message: 'Rate limit approaching: 80% used' },
  { time: '10:23:52', level: 'success', message: 'Process completed successfully' },
]

export default function BottomPanel() {
  const [logs, setLogs] = useState(CONSOLE_LOGS)
  const { togglePanel } = useLayoutStore()

  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 300, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="h-64 border-t border-border bg-background flex flex-col"
    >
      {/* Header */}
      <div className="h-10 px-4 flex items-center justify-between border-b border-border bg-muted/30">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4" />
          <span className="font-semibold text-sm">Console</span>
          <span className="px-2 py-0.5 rounded-md bg-muted text-muted-foreground text-xs">
            {logs.length} logs
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setLogs([])}
            className="p-1.5 hover:bg-accent rounded-md transition-colors"
            aria-label="Clear console"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => togglePanel('bottomPanel')}
            className="p-1.5 hover:bg-accent rounded-md transition-colors"
            aria-label="Minimize panel"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
          <button
            onClick={() => togglePanel('bottomPanel')}
            className="p-1.5 hover:bg-accent rounded-md transition-colors"
            aria-label="Close panel"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* SubHeader - Filter */}
      <div className="h-8 px-4 flex items-center gap-2 border-b border-border text-xs">
        {['All', 'Info', 'Warning', 'Error', 'Success'].map((filter) => (
          <button
            key={filter}
            className={cn(
              'px-2 py-1 rounded-md transition-colors',
              filter === 'All'
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-accent'
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto font-mono text-xs">
        {logs.length === 0 ? (
          <div className="h-full flex items-center justify-center text-muted-foreground">
            Console is empty
          </div>
        ) : (
          <div className="p-2 space-y-1">
            {logs.map((log, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 px-2 py-1 hover:bg-muted/50 rounded group"
              >
                <span className="text-muted-foreground shrink-0">{log.time}</span>
                <span className={cn(
                  'shrink-0 font-semibold uppercase',
                  log.level === 'info' && 'text-blue-500',
                  log.level === 'success' && 'text-green-500',
                  log.level === 'warning' && 'text-yellow-500',
                  log.level === 'error' && 'text-red-500'
                )}>
                  [{log.level}]
                </span>
                <span className="flex-1">{log.message}</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="h-8 px-4 flex items-center justify-between border-t border-border text-xs text-muted-foreground">
        <span>Press Ctrl+L to clear console</span>
        <span>Terminal v1.0.0</span>
      </div>
    </motion.div>
  )
}
