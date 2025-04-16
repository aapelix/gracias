import * as React from "react";

interface SvgCitrusProps extends React.SVGAttributes<SVGElement> {}

const SvgCitrus = React.forwardRef<SVGSVGElement, SvgCitrusProps>(
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
      <path d="M2 1h1v1H2zM3 1h1v1H3zM2 2h1v1H2zM4 2h1v1H4zM1 3h1v1H1zM4 3h1v1H4zM5 3h1v1H5zM1 4h1v1H1zM3 4h1v1H3zM6 4h1v1H6zM1 5h1v1H1zM3 5h1v1H3zM4 5h1v1H4zM5 5h1v1H5zM7 5h1v1H7zM1 6h1v1H1zM3 6h1v1H3zM5 6h1v1H5zM6 6h1v1H6zM8 6h1v1H8zM2 7h1v1H2zM4 7h1v1H4zM6 7h1v1H6zM8 7h1v1H8zM9 7h1v1H9zM2 8h1v1H2zM5 8h1v1H5zM6 8h1v1H6zM7 8h1v1H7zM10 8h1v1h-1zM3 9h1v1H3zM4 9h1v1H4zM9 9h1v1H9zM10 9h1v1h-1zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8z" />
    </svg>
  )
);

SvgCitrus.displayName = "SvgCitrus";

export default SvgCitrus;
