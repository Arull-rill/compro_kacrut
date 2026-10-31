const paths = {
  home: (
    <>
      <path d="M3 11l9-8 9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  about: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </>
  ),
  music: (
    <>
      <path d="M9 18V5l11-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="17" cy="16" r="3" />
    </>
  ),
  members: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M17 14c2.8 0 4.5 1.9 4.5 4.5" />
    </>
  ),
  story: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  gallery: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <circle cx="9" cy="10" r="1.5" />
      <path d="M21 16l-5-5-8 8" />
    </>
  ),
  contact: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  arrow: <path d="M7 17L17 7M8 7h9v9" />,
  play: <path d="M7 4l13 8-13 8z" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  left: <path d="M15 5l-7 7 7 7" />,
  right: <path d="M9 5l7 7-7 7" />,
  copy: (
    <>
      <rect x="9" y="9" width="11" height="11" rx="1" />
      <path d="M5 15V5a1 1 0 011-1h10" />
    </>
  ),
  check: <path d="M4 12l5 5L20 6" />,
  down: <path d="M6 9l6 6 6-6" />,
}

export default function Icon({ name, className = 'h-full w-full', strokeWidth = 1.6, ...rest }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={name === 'play' ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      {paths[name]}
    </svg>
  )
}
