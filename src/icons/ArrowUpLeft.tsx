import * as React from "react";

interface SvgArrowUpLeftProps extends React.SVGAttributes<SVGElement> {}

const SvgArrowUpLeft = React.forwardRef<SVGSVGElement, SvgArrowUpLeftProps>(
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
      <path d="M2 2h1v1H2zM3 2h1v1H3zM4 2h1v1H4zM5 2h1v1H5zM6 2h1v1H6zM2 3h1v1H2zM3 3h1v1H3zM2 4h1v1H2zM4 4h1v1H4zM2 5h1v1H2zM5 5h1v1H5zM2 6h1v1H2zM6 6h1v1H6zM7 7h1v1H7z" />
    </svg>
  )
);

SvgArrowUpLeft.displayName = "SvgArrowUpLeft";

export default SvgArrowUpLeft;
