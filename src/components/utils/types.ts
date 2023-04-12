import { RefObject } from "react";

export interface Handler {
  (event: MouseEvent): void;
}

export interface UseOnClickOutsideProps {
  ref: RefObject<HTMLElement>;
  handler: Handler;
}
