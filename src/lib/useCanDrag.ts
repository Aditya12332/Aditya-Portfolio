"use client";

import { useEffect, useState } from "react";

// Dragging sets `touch-action: none`, which stops the page from scrolling when a
// swipe starts on a draggable element. Only allow dragging with a mouse/trackpad.
export function useCanDrag() {
  const [canDrag, setCanDrag] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setCanDrag(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return canDrag;
}
