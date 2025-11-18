"use client";

import { motion } from "framer-motion";
import { slideInRight } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

interface RightPanelProps {
  className?: string;
  header?: React.ReactNode;
  subHeader?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  isVisible?: boolean;
}

/**
 * RightPanel Component
 * Part 1 규칙: 4층 구조 (Header, SubHeader, Body, Footer)
 * Motion: slideInRight variant 사용
 * 사용처: AI 명령, 속성 패널, 도구 패널 등
 */
export function RightPanel({
  className,
  header,
  subHeader,
  children,
  footer,
  isVisible = true,
}: RightPanelProps) {
  if (!isVisible) return null;

  return (
    <motion.aside
      variants={slideInRight}
      initial="initial"
      animate="animate"
      exit="exit"
      className={cn(
        "flex h-full w-80 flex-col border-l bg-background",
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
      <div className="flex-1 overflow-y-auto px-4 py-2">
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
