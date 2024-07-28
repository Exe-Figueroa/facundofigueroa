export const ExperienceItem = ({ date, title, description, link }) => (
  <>
    <div
      className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border dark:border-gray-200 dark:bg-gray-100"
    >
    </div>
    <time className="mb-1 text-sm font-normal leading-none dark:text-sky-200/80"
    >{date}</time>
    <h3 className="text-lg font-semibold dark:text-yellow-200 mt-2">
      {title}
    </h3>
    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
      {description}
    </p>
    {link && (
      <a
        href={link}
        className="inline-flex items-center gap-1 dark:bg-white px-4 py-2 text-sm font-medium border rounded-lg dark:hover:text-red focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 dark:text-gray-700 dark:border-gray-600 hover:bg-gray-700 focus:ring-gray-700 transition"
      >
        Saber más...{" "}
        <svg
          className="w-3 h-3 ms-2 rtl:rotate-180"
          aria-hidden="true"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </a>
    )}
  </>
);
