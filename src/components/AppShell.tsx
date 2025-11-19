'use client'

import { AnimatePresence } from 'framer-motion'
import { useLayoutStore } from '@/store/layout-store'
import TopNavbar from './panels/TopNavbar'
import LeftPanel from './panels/LeftPanel'
import RightPanel from './panels/RightPanel'
import BottomPanel from './panels/BottomPanel'
import MainPanel from './panels/MainPanel'
import { ReactNode } from 'react'

interface AppShellProps {
  children?: ReactNode
}

/**
 * AppShell - The root container for the entire application
 * Manages panel visibility and animations
 * All panels support mount/unmount animations via Framer Motion
 */
export default function AppShell({ children }: AppShellProps) {
  const { panels } = useLayoutStore()

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-background">
      {/* Top Navbar */}
      <AnimatePresence mode="wait">
        {panels.topNavbar && <TopNavbar key="topNavbar" />}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel */}
        <AnimatePresence mode="wait">
          {panels.leftPanel && <LeftPanel key="leftPanel" />}
        </AnimatePresence>

        {/* Main Panel (always visible) */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <MainPanel>{children}</MainPanel>

          {/* Bottom Panel (IDE Mode) */}
          <AnimatePresence mode="wait">
            {panels.bottomPanel && <BottomPanel key="bottomPanel" />}
          </AnimatePresence>
        </div>

        {/* Right Panel */}
        <AnimatePresence mode="wait">
          {panels.rightPanel && <RightPanel key="rightPanel" />}
        </AnimatePresence>
      </div>
    </div>
  )
}
