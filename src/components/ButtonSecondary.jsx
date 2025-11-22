function ButtonSecondary({ children, onClick, className = '', type = 'button', disabled = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`mt-3 inline-flex items-center justify-center gap-3 px-9 py-4 bg-gradient-to-r from-[#FFA500] to-orange-500 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 border border-white/10 disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none disabled:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FFA500] focus-visible:ring-offset-white ${className}`}
    >
      {children}
    </button>
  )
}

export default ButtonSecondary

