import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      external = false,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center font-label-lg text-label-lg tracking-widest uppercase transition-all duration-300 font-manrope focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary';

    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-8 py-4',
      lg: 'px-12 py-4',
    };

    const variantClasses = {
      primary: 'bg-tertiary text-on-tertiary hover:bg-tertiary/90',
      secondary: 'bg-surface-container text-on-surface hover:bg-surface-container-high',
      outline: 'border border-tertiary text-tertiary hover:bg-tertiary hover:text-on-tertiary',
    };

    const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

    if (href) {
      return (
        <motion.a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className={classes}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...(props as any)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
