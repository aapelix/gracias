import * as React from "react";

interface SvgEggFriedProps extends React.SVGAttributes<SVGElement> {}

const SvgEggFried = React.forwardRef<SVGSVGElement, SvgEggFriedProps>(
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
      <path d="M2 1h1v1H2zM3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM1 2h1v1H1zM6 2h1v1H6zM7 2h1v1H7zM1 3h1v1H1zM8 3h1v1H8zM1 4h1v1H1zM5 4h1v1H5zM6 4h1v1H6zM9 4h1v1H9zM2 5h1v1H2zM4 5h1v1H4zM7 5h1v1H7zM10 5h1v1h-1zM2 6h1v1H2zM4 6h1v1H4zM7 6h1v1H7zM10 6h1v1h-1zM2 7h1v1H2zM5 7h1v1H5zM6 7h1v1H6zM10 7h1v1h-1zM1 8h1v1H1zM10 8h1v1h-1zM1 9h1v1H1zM6 9h1v1H6zM7 9h1v1H7zM8 9h1v1H8zM9 9h1v1H9zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5z" />
    </svg>
  )
);

SvgEggFried.displayName = "SvgEggFried";

export default SvgEggFried;
