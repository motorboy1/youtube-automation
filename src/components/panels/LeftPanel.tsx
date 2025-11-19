'use client'

import { motion } from 'framer-motion'
import {
  Home,
  Layers,
  Zap,
  Code,
  Database,
  GitBranch,
  FileText,
  ChevronRight
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const TOOLS = [
  { id: 1, name: 'MCP Infinite Crawling', icon: Zap, category: 'Automation' },
  { id: 2, name: 'YouTube Automation', icon: Home, category: 'Video' },
  { id: 3, name: 'Code Generator', icon: Code, category: 'Development' },
  { id: 4, name: 'Database Manager', icon: Database, category: 'Data' },
  { id: 5, name: 'Git Workflow', icon: GitBranch, category: 'DevOps' },
]

export default function LeftPanel() {
  const [selectedTool, setSelectedTool] = useState<number | null>(null)

  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="w-64 border-r border-border bg-background flex flex-col"
    >
      {/* Header */}
      <div className="h-12 px-4 flex items-center border-b border-border">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4" />
          <span className="font-semibold text-sm">Tool Library</span>
        </div>
      </div>

      {/* SubHeader */}
      <div className="h-10 px-4 flex items-center border-b border-border bg-muted/50">
        <input
          type="text"
          placeholder="Search tools..."
          className="w-full text-sm bg-transparent outline-none placeholder:text-muted-foreground"
        />
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-2 space-y-1">
          {TOOLS.map((tool) => (
            <motion.button
              key={tool.id}
              onClick={() => setSelectedTool(tool.id)}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                'w-full px-3 py-2.5 rounded-lg text-left transition-colors',
                'flex items-center gap-3 group',
                selectedTool === tool.id
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-accent'
              )}
            >
              <tool.icon className="w-4 h-4 shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{tool.name}</div>
                <div className={cn(
                  'text-xs truncate',
                  selectedTool === tool.id
                    ? 'text-primary-foreground/70'
                    : 'text-muted-foreground'
                )}>
                  {tool.category}
                </div>
              </div>
              <ChevronRight className={cn(
                'w-4 h-4 shrink-0 opacity-0 transition-opacity',
                selectedTool === tool.id && 'opacity-100'
              )} />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="h-12 px-4 flex items-center border-t border-border text-xs text-muted-foreground">
        <FileText className="w-3 h-3 mr-2" />
        {TOOLS.length} tools available
      </div>
    </motion.div>
  )
}
