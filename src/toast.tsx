import type { toastPropsType } from "./types/toastPropsType";

let toasts: toastPropsType[] = [];

let listeners: ((toasts: toastPropsType[]) => void)[] = [];

export function toast(toast: toastPropsType) {
  toasts = [{ ...toast, id: crypto.randomUUID() }, ...toasts];
  listeners.forEach((listener) => {
    listener(toasts);
  });
  let newToasts: toastPropsType[] = [];
  toasts.map((toast, index) => {
    setTimeout(
      () => {
        toasts.map((toast2, index2) => {
          if (toast2.id !== toast.id) {
            newToasts.push(toast2);
          }
        });
        toasts = newToasts;
        newToasts = [];
        listeners.forEach((listener) => {
          listener(toasts);
        });
      },
      toast.duration ? toast.duration : 3000,
    );
  });
}

export function subscribe(listener: (toasts: toastPropsType[]) => void) {
  listeners.push(listener);
  listener(toasts);

  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}
