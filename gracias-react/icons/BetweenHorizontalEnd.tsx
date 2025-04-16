import * as React from "react";

interface SvgBetweenHorizontalEndProps extends React.SVGAttributes<SVGElement> {}

const SvgBetweenHorizontalEnd = React.forwardRef<SVGSVGElement, SvgBetweenHorizontalEndProps>(
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
      <path d="M2 2h1v1H2zM3 2h1v1H3zM4 2h1v1H4zM5 2h1v1H5zM1 3h1v1H1zM6 3h1v1H6zM1 4h1v1H1zM6 4h1v1H6zM2 5h1v1H2zM3 5h1v1H3zM4 5h1v1H4zM5 5h1v1H5zM9 5h1v1H9zM8 6h1v1H8zM2 7h1v1H2zM3 7h1v1H3zM4 7h1v1H4zM5 7h1v1H5zM9 7h1v1H9zM1 8h1v1H1zM6 8h1v1H6zM1 9h1v1H1zM6 9h1v1H6zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5z" />
    </svg>
  )
);

SvgBetweenHorizontalEnd.displayName = "SvgBetweenHorizontalEnd";

export default SvgBetweenHorizontalEnd;
