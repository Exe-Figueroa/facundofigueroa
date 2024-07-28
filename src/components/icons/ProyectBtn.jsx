export const ProyectBtn = ({children, ...props}) => (
  <a
    className="rounded-lg border border-white/10 flex justify-center items-center gap-x-2 py-2 px-4 bg-white/5 sm:hover:shadow-sm shadow-btn transition sm:hover:bg-white/10 w-1/2 sm:w-1/2"
    {...props}
  >
    {children}
  </a>
);
