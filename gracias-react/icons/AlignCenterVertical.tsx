import * as React from "react";

interface SvgAlignCenterVerticalProps extends React.SVGAttributes<SVGElement> {}

const SvgAlignCenterVertical = React.forwardRef<SVGSVGElement, SvgAlignCenterVerticalProps>(
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
      <path d="M5 1h1v1H5zM1 2h1v1H1zM2 2h1v1H2zM3 2h1v1H3zM5 2h1v1H5zM7 2h1v1H7zM8 2h1v1H8zM9 2h1v1H9zM0 3h1v1H0zM5 3h1v1H5zM10 3h1v1h-1zM0 4h1v1H0zM5 4h1v1H5zM10 4h1v1h-1zM1 5h1v1H1zM2 5h1v1H2zM3 5h1v1H3zM5 5h1v1H5zM7 5h1v1H7zM8 5h1v1H8zM9 5h1v1H9zM5 6h1v1H5zM2 7h1v1H2zM3 7h1v1H3zM5 7h1v1H5zM7 7h1v1H7zM8 7h1v1H8zM1 8h1v1H1zM5 8h1v1H5zM9 8h1v1H9zM1 9h1v1H1zM5 9h1v1H5zM9 9h1v1H9zM2 10h1v1H2zM3 10h1v1H3zM5 10h1v1H5zM7 10h1v1H7zM8 10h1v1H8z" />
    </svg>
  )
);

SvgAlignCenterVertical.displayName = "SvgAlignCenterVertical";

export default SvgAlignCenterVertical;
