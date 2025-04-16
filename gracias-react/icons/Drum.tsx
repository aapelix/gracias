import * as React from "react";

interface SvgDrumProps extends React.SVGAttributes<SVGElement> {}

const SvgDrum = React.forwardRef<SVGSVGElement, SvgDrumProps>(
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
      <path d="M1 2h1v1H1zM10 2h1v1h-1zM2 3h1v1H2zM4 3h1v1H4zM5 3h1v1H5zM6 3h1v1H6zM7 3h1v1H7zM9 3h1v1H9zM2 4h1v1H2zM3 4h1v1H3zM8 4h1v1H8zM9 4h1v1H9zM1 5h1v1H1zM4 5h1v1H4zM7 5h1v1H7zM10 5h1v1h-1zM1 6h1v1H1zM2 6h1v1H2zM9 6h1v1H9zM10 6h1v1h-1zM1 7h1v1H1zM3 7h1v1H3zM4 7h1v1H4zM5 7h1v1H5zM6 7h1v1H6zM7 7h1v1H7zM8 7h1v1H8zM10 7h1v1h-1zM1 8h1v1H1zM3 8h1v1H3zM5 8h1v1H5zM8 8h1v1H8zM10 8h1v1h-1zM2 9h1v1H2zM3 9h1v1H3zM5 9h1v1H5zM8 9h1v1H8zM9 9h1v1H9zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8z" />
    </svg>
  )
);

SvgDrum.displayName = "SvgDrum";

export default SvgDrum;
