export const SocialPill = ({ children, ...props }) => (
  <a
    className="rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-2 px-4 bg-white/5 sm:hover:scale-110 transition sm:hover:bg-white/10"
    {...props}
  >
    {children}
  </a>
);
