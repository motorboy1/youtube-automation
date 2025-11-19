"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { fadeIn } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface TopNavbarProps {
  className?: string;
  children?: React.ReactNode;
  onMenuClick?: () => void;
}

/**
 * TopNavbar Component
 * Part 1 규칙: AppShell의 최상단 네비게이션 바
 * Motion: fadeIn variant 사용
 */
export function TopNavbar({ className, children, onMenuClick }: TopNavbarProps) {
  return (
    <motion.header
      variants={fadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
    >
      <div className="container flex h-14 items-center px-4">
        {/* Menu Button */}
        {onMenuClick && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="mr-2"
          >
            <Menu className="h-5 w-5" />
          </Button>
        )}

        {/* Logo / Brand */}
        <div className="mr-4 flex items-center space-x-2">
          <span className="text-xl font-bold">25+ Tool Studio</span>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          {children}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2">
          {/* 추후 유저 메뉴, 설정 등 추가 */}
        </div>
      </div>
    </motion.header>
  );
}
