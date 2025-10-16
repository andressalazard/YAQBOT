export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

export type StepperType = 'first' | 'middle' | 'end';
export interface Stepper {
  value: string;
  title: string;
  supportingText?: string;
  type: StepperType;
}
