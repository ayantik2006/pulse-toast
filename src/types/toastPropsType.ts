export interface toastPropsType {
  message: string;
  duration?: number;
  id?: string;
  type?: "success" | "failure";
  icon?: "string" | React.ReactNode;
  closeButton?: boolean;
}