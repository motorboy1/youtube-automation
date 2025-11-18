"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

interface MainPanelProps {
  className?: string;
  header?: React.ReactNode;
  subHeader?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

/**
 * MainPanel Component
 * Part 1 규칙: 4층 구조 (Header, SubHeader, Body, Footer)
 * Motion: fadeIn variant 사용
 * 사용처: 메인 작업 영역, 콘텐츠 표시, 에디터 등
 */
export function MainPanel({
  className,
  header,
  subHeader,
  children,
  footer,
}: MainPanelProps) {
  return (
    <motion.main
      variants={fadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
      className={cn("flex h-full flex-1 flex-col bg-background", className)}
    >
      {/* Header */}
      {header && (
        <div className="border-b px-6 py-3">
          <div className="font-semibold">{header}</div>
        </div>
      )}

      {/* SubHeader */}
      {subHeader && (
        <div className="border-b px-6 py-2 text-sm text-muted-foreground">
          {subHeader}
        </div>
      )}

      {/* Body - 메인 콘텐츠 영역 (기능이 들어가는 곳) */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        {children}
      </div>

      {/* Footer */}
      {footer && (
        <div className="border-t px-6 py-2 text-xs text-muted-foreground">
          {footer}
        </div>
      )}
    </motion.main>
  );
}
