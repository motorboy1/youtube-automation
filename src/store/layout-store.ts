import { create } from 'zustand'

export type LayoutMode = 'three-pane' | 'ide' | 'dashboard'

export interface PanelState {
  topNavbar: boolean
  leftPanel: boolean
  rightPanel: boolean
  bottomPanel: boolean
}

export interface LayoutState {
  mode: LayoutMode
  panels: PanelState
  setMode: (mode: LayoutMode) => void
  togglePanel: (panel: keyof PanelState) => void
  setPanelState: (panel: keyof PanelState, state: boolean) => void
  applyModeLayout: (mode: LayoutMode) => void
}

const getModeDefaultPanels = (mode: LayoutMode): PanelState => {
  switch (mode) {
    case 'three-pane':
      return {
        topNavbar: true,
        leftPanel: true,
        rightPanel: true,
        bottomPanel: false,
      }
    case 'ide':
      return {
        topNavbar: false,
        leftPanel: true,
        rightPanel: false,
        bottomPanel: true,
      }
    case 'dashboard':
      return {
        topNavbar: true,
        leftPanel: false,
        rightPanel: true,
        bottomPanel: false,
      }
  }
}

export const useLayoutStore = create<LayoutState>((set) => ({
  mode: 'three-pane',
  panels: getModeDefaultPanels('three-pane'),

  setMode: (mode) => {
    set({ mode, panels: getModeDefaultPanels(mode) })
  },

  togglePanel: (panel) => {
    set((state) => ({
      panels: {
        ...state.panels,
        [panel]: !state.panels[panel],
      },
    }))
  },

  setPanelState: (panel, panelState) => {
    set((state) => ({
      panels: {
        ...state.panels,
        [panel]: panelState,
      },
    }))
  },

  applyModeLayout: (mode) => {
    set({ mode, panels: getModeDefaultPanels(mode) })
  },
}))
