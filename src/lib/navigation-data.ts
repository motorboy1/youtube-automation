import {
  Upload,
  BarChart3,
  FileEdit,
  Image,
  Search,
  MessageSquare,
  Calendar,
  ListVideo,
  Settings,
  DollarSign,
  Captions,
  Tag,
  TrendingUp,
  Layers,
  TestTube,
  Film,
  Music,
  Video,
  Users,
  Activity,
  HardDrive,
  Download,
  FileText,
  Workflow,
  FolderOpen,
  type LucideIcon,
} from "lucide-react";

export interface Tool {
  id: string;
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
  mode: "three-pane" | "dashboard" | "ide";
  category: string;
}

export const categories = [
  { id: "upload", name: "Upload & Publishing", color: "blue" },
  { id: "content", name: "Content Creation", color: "purple" },
  { id: "analytics", name: "Analytics & Insights", color: "green" },
  { id: "management", name: "Management", color: "orange" },
  { id: "automation", name: "Automation & Tools", color: "pink" },
];

export const tools: Tool[] = [
  // Upload & Publishing
  {
    id: "youtube-uploader",
    name: "YouTube Uploader",
    description: "Upload videos with metadata",
    href: "/youtube-uploader",
    icon: Upload,
    mode: "three-pane",
    category: "upload",
  },
  {
    id: "video-scheduler",
    name: "Video Scheduler",
    description: "Schedule video publishing",
    href: "/video-scheduler",
    icon: Calendar,
    mode: "three-pane",
    category: "upload",
  },
  {
    id: "bulk-uploader",
    name: "Bulk Uploader",
    description: "Upload multiple videos at once",
    href: "/bulk-uploader",
    icon: Layers,
    mode: "three-pane",
    category: "upload",
  },

  // Content Creation
  {
    id: "script-editor",
    name: "Script Editor",
    description: "Write and edit video scripts",
    href: "/script-editor",
    icon: FileEdit,
    mode: "ide",
    category: "content",
  },
  {
    id: "thumbnail-generator",
    name: "Thumbnail Generator",
    description: "Create custom thumbnails",
    href: "/thumbnail-generator",
    icon: Image,
    mode: "three-pane",
    category: "content",
  },
  {
    id: "video-editor",
    name: "Video Editor",
    description: "Edit videos with timeline",
    href: "/video-editor",
    icon: Film,
    mode: "ide",
    category: "content",
  },
  {
    id: "subtitle-editor",
    name: "Subtitle Editor",
    description: "Create and edit subtitles",
    href: "/subtitle-editor",
    icon: Captions,
    mode: "ide",
    category: "content",
  },
  {
    id: "music-library",
    name: "Music Library",
    description: "Browse royalty-free music",
    href: "/music-library",
    icon: Music,
    mode: "three-pane",
    category: "content",
  },
  {
    id: "stock-footage",
    name: "Stock Footage",
    description: "Browse stock video footage",
    href: "/stock-footage",
    icon: Video,
    mode: "three-pane",
    category: "content",
  },
  {
    id: "template-library",
    name: "Template Library",
    description: "Video templates and presets",
    href: "/template-library",
    icon: FileText,
    mode: "three-pane",
    category: "content",
  },

  // Analytics & Insights
  {
    id: "analytics-dashboard",
    name: "Analytics Dashboard",
    description: "View channel analytics",
    href: "/analytics-dashboard",
    icon: BarChart3,
    mode: "dashboard",
    category: "analytics",
  },
  {
    id: "revenue-dashboard",
    name: "Revenue Dashboard",
    description: "Track monetization",
    href: "/revenue-dashboard",
    icon: DollarSign,
    mode: "dashboard",
    category: "analytics",
  },
  {
    id: "trend-analyzer",
    name: "Trend Analyzer",
    description: "Analyze market trends",
    href: "/trend-analyzer",
    icon: TrendingUp,
    mode: "dashboard",
    category: "analytics",
  },
  {
    id: "ab-test-manager",
    name: "A/B Test Manager",
    description: "Test thumbnails and titles",
    href: "/ab-test-manager",
    icon: TestTube,
    mode: "dashboard",
    category: "analytics",
  },
  {
    id: "performance-monitor",
    name: "Performance Monitor",
    description: "System performance metrics",
    href: "/performance-monitor",
    icon: Activity,
    mode: "dashboard",
    category: "analytics",
  },

  // Management
  {
    id: "playlist-manager",
    name: "Playlist Manager",
    description: "Organize video playlists",
    href: "/playlist-manager",
    icon: ListVideo,
    mode: "three-pane",
    category: "management",
  },
  {
    id: "channel-settings",
    name: "Channel Settings",
    description: "Configure channel settings",
    href: "/channel-settings",
    icon: Settings,
    mode: "three-pane",
    category: "management",
  },
  {
    id: "comment-manager",
    name: "Comment Manager",
    description: "Manage video comments",
    href: "/comment-manager",
    icon: MessageSquare,
    mode: "dashboard",
    category: "management",
  },
  {
    id: "collaboration-hub",
    name: "Collaboration Hub",
    description: "Team collaboration tools",
    href: "/collaboration-hub",
    icon: Users,
    mode: "dashboard",
    category: "management",
  },
  {
    id: "project-dashboard",
    name: "Project Dashboard",
    description: "Manage multiple projects",
    href: "/project-dashboard",
    icon: FolderOpen,
    mode: "dashboard",
    category: "management",
  },

  // Automation & Tools
  {
    id: "seo-optimizer",
    name: "SEO Optimizer",
    description: "Optimize video SEO",
    href: "/seo-optimizer",
    icon: Search,
    mode: "three-pane",
    category: "automation",
  },
  {
    id: "tag-generator",
    name: "Tag Generator",
    description: "Generate video tags",
    href: "/tag-generator",
    icon: Tag,
    mode: "three-pane",
    category: "automation",
  },
  {
    id: "workflow-automation",
    name: "Workflow Automation",
    description: "Automate repetitive tasks",
    href: "/workflow-automation",
    icon: Workflow,
    mode: "ide",
    category: "automation",
  },
  {
    id: "backup-manager",
    name: "Backup Manager",
    description: "Backup and restore data",
    href: "/backup-manager",
    icon: HardDrive,
    mode: "three-pane",
    category: "automation",
  },
  {
    id: "export-manager",
    name: "Export Manager",
    description: "Export videos in formats",
    href: "/export-manager",
    icon: Download,
    mode: "three-pane",
    category: "automation",
  },
];

export function getToolsByCategory(categoryId: string) {
  return tools.filter((tool) => tool.category === categoryId);
}

export function getToolById(id: string) {
  return tools.find((tool) => tool.id === id);
}
