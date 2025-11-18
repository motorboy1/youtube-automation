/**
 * Framer Motion Variants for 25+ Tool Studio
 * Part 1 규칙: 모든 애니메이션은 이 3가지 variant만 사용
 */

import { Variants } from "framer-motion";

/**
 * Fade In - 투명도 기반 애니메이션
 * 사용처: 콘텐츠 로드, 모달, 카드 등
 */
export const fadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

/**
 * Slide In Left - 왼쪽에서 슬라이드
 * 사용처: LeftPanel, 사이드바 등
 */
export const slideInLeft: Variants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    x: -100,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

/**
 * Slide In Right - 오른쪽에서 슬라이드
 * 사용처: RightPanel, 알림 등
 */
export const slideInRight: Variants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

/**
 * Slide In Bottom - 아래에서 슬라이드
 * 사용처: BottomPanel, 토스트 등
 */
export const slideInBottom: Variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};
