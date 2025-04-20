import * as React from "react";

interface SvgEllipsisVerticalProps extends React.SVGAttributes<SVGElement> {}

const SvgEllipsisVertical = React.forwardRef<SVGSVGElement, SvgEllipsisVerticalProps>(
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
      <path d="M5 2h1v1H5zM6 2h1v1H6zM5 3h1v1H5zM6 3h1v1H6zM5 5h1v1H5zM6 5h1v1H6zM5 6h1v1H5zM6 6h1v1H6zM5 8h1v1H5zM6 8h1v1H6zM5 9h1v1H5zM6 9h1v1H6z" />
    </svg>
  )
);

SvgEllipsisVertical.displayName = "SvgEllipsisVertical";

export default SvgEllipsisVertical;
