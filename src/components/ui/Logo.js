const Logo = () => {
  return (
    <div className="flex items-center gap-2 select-none">
      {/* Glassy pill background with icon */}
      <div className="w-12 h-12 bg-gradient-to-br from-[rgba(var(--color-bg-dark-rgb),0.8)] via-[rgba(var(--color-primary-rgb),0.3)] to-[rgba(var(--color-primary-light-rgb),0.2)] rounded-full flex items-center justify-center shadow-lg border border-[rgba(var(--color-primary-rgb),0.4)] backdrop-blur-md relative">
        {/* Bike SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="w-7 h-7 text-[rgb(var(--color-primary-rgb))] drop-shadow"
        >
          <circle cx="7" cy="17" r="3" />
          <circle cx="17" cy="17" r="3" />
          <path d="M7 17L12 7l5 10M12 7h5" />
        </svg>
      </div>
      
    </div>
  );
};

export default Logo;
