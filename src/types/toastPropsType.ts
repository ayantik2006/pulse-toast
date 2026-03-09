export interface toastPropsType {
  message: string;
  duration?: number;
  className?: string;
  id?: string;
  type?: "success" | "failure";
  icon?: "string" | React.ReactNode;
}