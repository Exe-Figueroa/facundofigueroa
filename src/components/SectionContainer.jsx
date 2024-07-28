export const SectionContainer = ({children, className, id}) => {
  return (
    <section id={id} className={`w-full mx-auto pb-24 sm:px-12 px-2 ${className}`} >
        {children}
    </section >
  );
};
