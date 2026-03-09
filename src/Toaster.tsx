"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { subscribe } from "./toast";
import { createPortal } from "react-dom";
import { Check, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { toastPropsType } from "./types/toastPropsType";

export function Toaster({
  position,
}: {
  position:
    | "top-center"
    | "bottom-center"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
}) {
  const outerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    zIndex: 999999,
    gap: "0.75rem",
    ...(position === "top-center" || position === "bottom-center"
      ? { alignItems: "center" }
      : {}),
  };

  const getPositionStyle = (): CSSProperties => {
    const baseStyle: CSSProperties = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.5rem",
      position: "fixed",
      height: "fit-content",
      marginLeft: "auto",
      marginRight: "auto",
      whiteSpace: "normal",
      overflowWrap: "anywhere",
    };

    switch (position) {
      case "top-center":
        return { ...baseStyle, top: "1rem" };
      case "bottom-center":
        return { ...baseStyle, bottom: "1rem" };
      case "top-left":
        return { ...baseStyle, top: "1rem", left: "1rem" };
      case "top-right":
        return { ...baseStyle, top: "1rem", right: "1rem" };
      case "bottom-left":
        return { ...baseStyle, bottom: "1rem", left: "1rem" };
      case "bottom-right":
        return { ...baseStyle, bottom: "1rem", right: "1rem" };
      default:
        return baseStyle;
    }
  };

  const toastStyle: CSSProperties = {
    boxShadow: "0 2px 6px gray",
    padding: "0.5rem 1rem",
    borderRadius: "0.375rem",
    display: "flex",
    width: "fit-content",
    minWidth: "7.5rem",
    gap: "0.5rem",
    alignItems: "baseline",
    maxWidth: "20rem",
    whiteSpace: "normal",
    overflowWrap: "anywhere",
    backgroundColor:"white",
    color:"black"
  };

  const successIconContainerStyle: CSSProperties = {
    backgroundColor: "#22c55e",
    borderRadius: "9999px",
    padding: "0.25rem",
    width: "1.25rem",
    height: "1.25rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const failureIconContainerStyle: CSSProperties = {
    backgroundColor: "#ef4444",
    borderRadius: "9999px",
    padding: "0.25rem",
    width: "1.25rem",
    height: "1.25rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const iconStyle: CSSProperties = {
    marginTop: "0.15rem",
    strokeWidth: 4,
    color: "#f5f5f5",
  };

  const [toasts, setToasts] = useState<toastPropsType[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const unsubscribe = subscribe(setToasts);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    return unsubscribe;
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div style={outerStyle}>
      <div style={getPositionStyle()}>
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              exit={{ opacity: 0, scale: 0.8 }}
              style={toastStyle}
              key={toast.id}
            >
              {toast.type === "success" && !toast.icon && (
                <div style={successIconContainerStyle}>
                  <Check style={iconStyle} size={12} />
                </div>
              )}
              {toast.type === "failure" && !toast.icon && (
                <div style={failureIconContainerStyle}>
                  <X style={iconStyle} size={12} />
                </div>
              )}
              <p>{toast.icon}</p>
              <p>{toast.message}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>,
    document.body,
  );
}
