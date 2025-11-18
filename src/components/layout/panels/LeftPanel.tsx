"use client";

import { motion } from "framer-motion";
import { slideInLeft } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

interface LeftPanelProps {
  className?: string;
  header?: React.ReactNode;
  subHeader?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  isVisible?: boolean;
}

/**
 * LeftPanel Component
 * Part 1 규칙: 4층 구조 (Header, SubHeader, Body, Footer)
 * Motion: slideInLeft variant 사용
 * 사용처: 파일 트리, 프로젝트 탐색, 리소스 리스트 등
 */
export function LeftPanel({
  className,
  header,
  subHeader,
  children,
  footer,
  isVisible = true,
}: LeftPanelProps) {
  if (!isVisible) return null;

  return (
    <motion.aside
      variants={slideInLeft}
      initial="initial"
      animate="animate"
      exit="exit"
      className={cn(
        "flex h-full w-64 flex-col border-r bg-background",
        className
      )}
    >
      {/* Header */}
      {header && (
        <div className="border-b px-4 py-3">
          <div className="font-semibold">{header}</div>
        </div>
      )}

      {/* SubHeader */}
      {subHeader && (
        <div className="border-b px-4 py-2 text-sm text-muted-foreground">
          {subHeader}
        </div>
      )}

      {/* Body - 메인 콘텐츠 영역 */}
      <div className="flex-1 overflow-y-auto px-2 py-2">
        {children}
      </div>

      {/* Footer */}
      {footer && (
        <div className="border-t px-4 py-2 text-xs text-muted-foreground">
          {footer}
        </div>
      )}
    </motion.aside>
  );
}
