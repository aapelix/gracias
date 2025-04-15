import * as React from "react";

interface SvgBookDashedProps extends React.SVGAttributes<SVGElement> {}

const SvgBookDashed = React.forwardRef<SVGSVGElement, SvgBookDashedProps>(
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
      <path d="M3 1h1v1H3zM5 1h1v1H5zM6 1h1v1H6zM8 1h1v1H8zM9 1h1v1H9zM2 2h1v1H2zM9 2h1v1H9zM2 4h1v1H2zM9 4h1v1H9zM2 5h1v1H2zM9 5h1v1H9zM2 7h1v1H2zM5 7h1v1H5zM6 7h1v1H6zM8 7h1v1H8zM9 7h1v1H9zM2 8h1v1H2zM3 8h1v1H3zM9 8h1v1H9zM2 9h1v1H2zM3 10h1v1H3zM5 10h1v1H5zM6 10h1v1H6zM8 10h1v1H8zM9 10h1v1H9z" />
    </svg>
  )
);

SvgBookDashed.displayName = "SvgBookDashed";

export default SvgBookDashed;
