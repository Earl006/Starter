declare module 'react-typed' {
    import * as React from 'react';
  
    interface TypedProps {
      strings: string[];
      typeSpeed?: number;
      backSpeed?: number;
      startDelay?: number;
      backDelay?: number;
      loop?: boolean;
      showCursor?: boolean;
      cursorChar?: string;
      attr?: string;
      contentType?: 'html' | 'text';
      onComplete?: () => void;
      onTypingPaused?: () => void;
      onTypingResumed?: () => void;
      onStringTyped?: (arrayPos: number) => void;
      onLastStringBackspaced?: () => void;
      onFinished?: () => void;
    }
  
    const ReactTyped: React.FC<TypedProps>;
    export { ReactTyped };
}