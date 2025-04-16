import * as React from "react";

interface SvgCaseSensitiveProps extends React.SVGAttributes<SVGElement> {}

const SvgCaseSensitive = React.forwardRef<SVGSVGElement, SvgCaseSensitiveProps>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 12 12"
      fill="currentColor"
      shapeRendering="crispEdges"
      ref={ref}
      {...props}
    >
      <path d="M2 2h1v1H2zM3 2h1v1H3zM1 3h1v1H1zM4 3h1v1H4zM1 4h1v1H1zM4 4h1v1H4zM1 5h1v1H1zM4 5h1v1H4zM6 5h1v1H6zM7 5h1v1H7zM8 5h1v1H8zM9 5h1v1H9zM1 6h1v1H1zM2 6h1v1H2zM3 6h1v1H3zM4 6h1v1H4zM6 6h1v1H6zM9 6h1v1H9zM1 7h1v1H1zM4 7h1v1H4zM6 7h1v1H6zM9 7h1v1H9zM1 8h1v1H1zM4 8h1v1H4zM6 8h1v1H6zM7 8h1v1H7zM8 8h1v1H8zM10 8h1v1h-1z" />
    </svg>
  )
);

SvgCaseSensitive.displayName = "SvgCaseSensitive";

export default SvgCaseSensitive;
