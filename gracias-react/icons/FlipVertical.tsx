import * as React from "react";

interface SvgFlipVerticalProps extends React.SVGAttributes<SVGElement> {}

const SvgFlipVertical = React.forwardRef<SVGSVGElement, SvgFlipVerticalProps>(
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
      <path d="M1 1h1v1H1zM2 1h1v1H2zM3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM8 1h1v1H8zM9 1h1v1H9zM1 2h1v1H1zM9 2h1v1H9zM1 3h1v1H1zM9 3h1v1H9zM0 5h1v1H0zM1 5h1v1H1zM3 5h1v1H3zM4 5h1v1H4zM6 5h1v1H6zM7 5h1v1H7zM9 5h1v1H9zM10 5h1v1h-1zM1 7h1v1H1zM9 7h1v1H9zM1 8h1v1H1zM9 8h1v1H9zM1 9h1v1H1zM2 9h1v1H2zM3 9h1v1H3zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM8 9h1v1H8zM9 9h1v1H9z" />
    </svg>
  )
);

SvgFlipVertical.displayName = "SvgFlipVertical";

export default SvgFlipVertical;
