import * as React from "react";

interface SvgDropletOffProps extends React.SVGAttributes<SVGElement> {}

const SvgDropletOff = React.forwardRef<SVGSVGElement, SvgDropletOffProps>(
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
      <path d="M1 1h1v1H1zM5 1h1v1H5zM2 2h1v1H2zM5 2h1v1H5zM3 3h1v1H3zM6 3h1v1H6zM4 4h1v1H4zM7 4h1v1H7zM3 5h1v1H3zM5 5h1v1H5zM2 6h1v1H2zM6 6h1v1H6zM1 7h1v1H1zM7 7h1v1H7zM1 8h1v1H1zM8 8h1v1H8zM1 9h1v1H1zM9 9h1v1H9zM2 10h1v1H2zM8 10h1v1H8zM10 10h1v1h-1zM3 11h1v1H3zM4 11h1v1H4zM5 11h1v1H5zM6 11h1v1H6zM7 11h1v1H7z" />
    </svg>
  )
);

SvgDropletOff.displayName = "SvgDropletOff";

export default SvgDropletOff;
