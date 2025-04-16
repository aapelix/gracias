import * as React from "react";

interface SvgChevronFirstProps extends React.SVGAttributes<SVGElement> {}

const SvgChevronFirst = React.forwardRef<SVGSVGElement, SvgChevronFirstProps>(
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
      <path d="M2 2h1v1H2zM7 2h1v1H7zM2 3h1v1H2zM6 3h1v1H6zM2 4h1v1H2zM5 4h1v1H5zM2 5h1v1H2zM4 5h1v1H4zM2 6h1v1H2zM5 6h1v1H5zM2 7h1v1H2zM6 7h1v1H6zM2 8h1v1H2zM7 8h1v1H7z" />
    </svg>
  )
);

SvgChevronFirst.displayName = "SvgChevronFirst";

export default SvgChevronFirst;
