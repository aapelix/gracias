import * as React from "react";

interface SvgBriefcaseConveyorBeltProps extends React.SVGAttributes<SVGElement> {}

const SvgBriefcaseConveyorBelt = React.forwardRef<SVGSVGElement, SvgBriefcaseConveyorBeltProps>(
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
      <path d="M5 1h1v1H5zM6 1h1v1H6zM4 2h1v1H4zM7 2h1v1H7zM3 3h1v1H3zM4 3h1v1H4zM5 3h1v1H5zM6 3h1v1H6zM7 3h1v1H7zM8 3h1v1H8zM2 4h1v1H2zM4 4h1v1H4zM7 4h1v1H7zM9 4h1v1H9zM2 5h1v1H2zM4 5h1v1H4zM7 5h1v1H7zM9 5h1v1H9zM2 6h1v1H2zM4 6h1v1H4zM7 6h1v1H7zM9 6h1v1H9zM2 7h1v1H2zM4 7h1v1H4zM7 7h1v1H7zM9 7h1v1H9zM3 8h1v1H3zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM7 8h1v1H7zM8 8h1v1H8zM1 10h1v1H1zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9zM10 10h1v1h-1zM2 11h1v1H2zM4 11h1v1H4zM6 11h1v1H6zM8 11h1v1H8z" />
    </svg>
  )
);

SvgBriefcaseConveyorBelt.displayName = "SvgBriefcaseConveyorBelt";

export default SvgBriefcaseConveyorBelt;
