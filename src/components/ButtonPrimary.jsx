function ButtonPrimary({ children, onClick, className = '', type = 'button', disabled = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`mt-3 inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-[#1E90FF] to-blue-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 border border-white/10 disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none disabled:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1E90FF] focus-visible:ring-offset-white ${className}`}
    >
      {children}
    </button>
  )
}

export default ButtonPrimary

