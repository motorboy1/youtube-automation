"use client";

import { motion } from "framer-motion";
import { slideInBottom } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

interface BottomPanelProps {
  className?: string;
  header?: React.ReactNode;
  subHeader?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  isVisible?: boolean;
}

/**
 * BottomPanel Component
 * Part 1 규칙: 4층 구조 (Header, SubHeader, Body, Footer)
 * Motion: slideInBottom variant 사용
 * 사용처: 터미널, 로그, 디버그 콘솔 등 (선택적)
 */
export function BottomPanel({
  className,
  header,
  subHeader,
  children,
  footer,
  isVisible = false,
}: BottomPanelProps) {
  if (!isVisible) return null;

  return (
    <motion.div
      variants={slideInBottom}
      initial="initial"
      animate="animate"
      exit="exit"
      className={cn(
        "flex h-48 flex-col border-t bg-background",
        className
      )}
    >
      {/* Header */}
      {header && (
        <div className="border-b px-4 py-2">
          <div className="text-sm font-semibold">{header}</div>
        </div>
      )}

      {/* SubHeader */}
      {subHeader && (
        <div className="border-b px-4 py-1 text-xs text-muted-foreground">
          {subHeader}
        </div>
      )}

      {/* Body - 메인 콘텐츠 영역 */}
      <div className="flex-1 overflow-y-auto px-4 py-2 font-mono text-sm">
        {children}
      </div>

      {/* Footer */}
      {footer && (
        <div className="border-t px-4 py-1 text-xs text-muted-foreground">
          {footer}
        </div>
      )}
    </motion.div>
  );
}
