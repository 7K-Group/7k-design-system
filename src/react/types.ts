import type {
  CSSProperties,
  ReactNode,
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';

export interface BaseProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'glow'
  | 'glow-accent'
  | 'accent'
  | 'danger'
  | 'glow-secondary';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
  'aria-describedby'?: string;
}

export type BadgeVariant =
  | 'default'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'neutral';

export interface BadgeProps extends BaseProps {
  variant?: BadgeVariant;
  role?: string;
}

export interface InputProps
  extends
    BaseProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'style' | 'onChange'> {
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  id?: string;
  label?: ReactNode;
  error?: string;
  'aria-describedby'?: string;
}

export type Texture =
  | 'halftone'
  | 'scanline'
  | 'noise'
  | 'crosshatch'
  | 'dots'
  | 'grid-dots'
  | 'texture'
  | false
  | null;

export type IsometricPattern =
  | 'grid'
  | 'grid-dense'
  | 'cubes'
  | 'terrain'
  | 'pipes'
  | 'hex'
  | 'city'
  | 'wave';

export interface CardProps extends BaseProps {
  texture?: Texture;
  hover?: boolean;
}

export interface ModalProps extends BaseProps {
  open?: boolean;
  onClose?: () => void;
  texture?: Texture;
  role?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
}

export interface DrawerProps extends BaseProps {
  open?: boolean;
  onClose?: () => void;
  side?: 'left' | 'right';
  texture?: Texture;
  role?: string;
  'aria-labelledby'?: string;
}

export type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info';

export interface ToastProps extends BaseProps {
  variant?: ToastVariant;
  onDismiss?: () => void;
  texture?: Texture;
  role?: string;
}

export interface TooltipProps extends BaseProps {
  content: ReactNode;
  position?: 'top' | 'right' | 'bottom' | 'left';
}

export type AlertVariant = 'default' | 'success' | 'warning' | 'danger' | 'info';

export interface AlertProps extends BaseProps {
  variant?: AlertVariant;
  onClose?: () => void;
  role?: string;
}

export interface TabsProps extends BaseProps {
  defaultIndex?: number;
  index?: number;
  onChange?: (index: number) => void;
}

export interface TabProps extends BaseProps {
  index?: number;
}

export interface NavProps extends BaseProps {
  orientation?: 'horizontal' | 'vertical';
}

export interface NavItemProps extends BaseProps {
  active?: boolean;
  href?: string;
}

export interface CheckboxProps
  extends BaseProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'style' | 'type'> {
  label?: ReactNode;
  indeterminate?: boolean;
}

export interface RadioProps
  extends BaseProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'style' | 'type'> {
  label?: ReactNode;
}

export interface ToggleProps
  extends
    BaseProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'style' | 'type' | 'onChange'> {
  label?: ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export interface SelectProps
  extends BaseProps, Omit<SelectHTMLAttributes<HTMLSelectElement>, 'className' | 'style'> {}

export interface TextareaProps
  extends BaseProps, Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className' | 'style'> {}

export interface TextureOverlayProps extends BaseProps {
  texture?: Texture;
  opacity?: number;
  animate?: boolean;
}

export interface IsometricBackgroundProps extends BaseProps {
  pattern?: IsometricPattern;
  animated?: boolean;
}

export interface MangaPanelProps extends BaseProps {
  frame?: boolean;
  invert?: boolean;
  texture?: Texture;
  speedLine?: 'none' | 'horizontal' | 'radial';
}

export type IconName =
  | 'icon'
  | 'close'
  | 'chevron-down'
  | 'chevron-up'
  | 'chevron-left'
  | 'chevron-right'
  | 'check'
  | 'minus'
  | 'plus'
  | 'menu'
  | 'sun'
  | 'moon'
  | 'info'
  | 'warning'
  | 'danger'
  | 'success';

export interface IconProps extends BaseProps {
  name: IconName;
  size?: number;
}

export type Project = '7k' | 'square' | 'triangle' | 'circle' | 'grid' | 'line';

export interface ProjectContextValue {
  project: Project;
  setProject: (project: Project) => void;
}

export type Theme = 'dark' | 'light';

export interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}
