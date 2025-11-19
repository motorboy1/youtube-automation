'use client'

import { motion } from 'framer-motion'
import { Settings2, Info, Play, Square, RotateCw } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'

type Tab = 'settings' | 'info' | 'workflow'

export default function RightPanel() {
  const [activeTab, setActiveTab] = useState<Tab>('workflow')
  const [isRunning, setIsRunning] = useState(false)

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="w-80 border-l border-border bg-background flex flex-col"
    >
      {/* Header */}
      <div className="h-12 px-4 flex items-center border-b border-border">
        <span className="font-semibold text-sm">Control Panel</span>
      </div>

      {/* SubHeader - Tabs */}
      <div className="h-10 px-2 flex items-center border-b border-border bg-muted/30">
        <div className="flex gap-1 w-full">
          {[
            { id: 'workflow' as Tab, label: 'Workflow', icon: RotateCw },
            { id: 'settings' as Tab, label: 'Settings', icon: Settings2 },
            { id: 'info' as Tab, label: 'Info', icon: Info },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'flex-1 px-3 py-1.5 rounded-md text-xs font-medium transition-colors',
                'flex items-center justify-center gap-1.5',
                activeTab === tab.id
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <tab.icon className="w-3.5 h-3.5" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === 'workflow' && (
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Workflow Control</h3>
              <div className="space-y-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsRunning(!isRunning)}
                  className={cn(
                    'w-full px-4 py-3 rounded-lg font-medium text-sm',
                    'flex items-center justify-center gap-2 transition-colors',
                    isRunning
                      ? 'bg-destructive text-destructive-foreground hover:bg-destructive/90'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  )}
                >
                  {isRunning ? (
                    <>
                      <Square className="w-4 h-4" />
                      Stop Workflow
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      Start Workflow
                    </>
                  )}
                </motion.button>

                {isRunning && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-lg bg-muted/50 border border-border"
                  >
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      >
                        <RotateCw className="w-3.5 h-3.5" />
                      </motion.div>
                      <span>Workflow running...</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            <div className="pt-2 border-t border-border">
              <h4 className="text-xs font-medium text-muted-foreground mb-3">Workflow Steps</h4>
              <div className="space-y-2">
                {[
                  { label: 'Initialize', status: 'completed' },
                  { label: 'Process Data', status: isRunning ? 'running' : 'pending' },
                  { label: 'Generate Output', status: 'pending' },
                  { label: 'Finalize', status: 'pending' },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm"
                  >
                    <div className={cn(
                      'w-2 h-2 rounded-full',
                      step.status === 'completed' && 'bg-green-500',
                      step.status === 'running' && 'bg-blue-500 animate-pulse',
                      step.status === 'pending' && 'bg-muted'
                    )} />
                    <span className={cn(
                      step.status === 'pending' && 'text-muted-foreground'
                    )}>
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Configuration</h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-muted-foreground">API Key</label>
                <input
                  type="password"
                  placeholder="Enter API key..."
                  className="w-full mt-1 px-3 py-2 rounded-md border border-border bg-background text-sm"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Output Format</label>
                <select className="w-full mt-1 px-3 py-2 rounded-md border border-border bg-background text-sm">
                  <option>JSON</option>
                  <option>XML</option>
                  <option>CSV</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'info' && (
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Tool Information</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>Version: 1.0.0</p>
              <p>Last updated: Nov 19, 2025</p>
              <p className="text-xs leading-relaxed">
                This tool is part of the DanteLabs Global Automation System.
                Configure your workflow settings in the Settings tab.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="h-12 px-4 flex items-center border-t border-border">
        <div className="flex items-center gap-2 text-xs">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-muted-foreground">System Ready</span>
        </div>
      </div>
    </motion.div>
  )
}
