import * as React from "react";

interface SvgDropletProps extends React.SVGAttributes<SVGElement> {}

const SvgDroplet = React.forwardRef<SVGSVGElement, SvgDropletProps>(
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
      <path d="M5 1h1v1H5zM5 2h1v1H5zM4 3h1v1H4zM6 3h1v1H6zM3 4h1v1H3zM7 4h1v1H7zM3 5h1v1H3zM7 5h1v1H7zM2 6h1v1H2zM8 6h1v1H8zM1 7h1v1H1zM9 7h1v1H9zM1 8h1v1H1zM9 8h1v1H9zM1 9h1v1H1zM9 9h1v1H9zM2 10h1v1H2zM8 10h1v1H8zM3 11h1v1H3zM4 11h1v1H4zM5 11h1v1H5zM6 11h1v1H6zM7 11h1v1H7z" />
    </svg>
  )
);

SvgDroplet.displayName = "SvgDroplet";

export default SvgDroplet;
