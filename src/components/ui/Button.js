const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  disabled = false,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-[rgb(var(--color-primary-rgb))] text-[rgb(var(--color-text-dark-rgb))] hover:bg-[rgb(var(--color-primary-dark-rgb))] focus:ring-[rgb(var(--color-primary-rgb))]',
    secondary: 'bg-[rgb(var(--color-bg-muted-rgb))] text-[rgb(var(--color-primary-rgb))] hover:bg-[rgb(var(--color-primary-light-rgb))] focus:ring-[rgb(var(--color-primary-rgb))]',
    outline: 'bg-transparent border-2 border-[rgb(var(--color-primary-rgb))] text-[rgb(var(--color-primary-rgb))] hover:bg-[rgba(var(--color-primary-rgb),0.1)] focus:ring-[rgb(var(--color-primary-rgb))]',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-3',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
