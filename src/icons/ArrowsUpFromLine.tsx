import * as React from "react";

interface SvgArrowsUpFromLineProps extends React.SVGAttributes<SVGElement> {}

const SvgArrowsUpFromLine = React.forwardRef<SVGSVGElement, SvgArrowsUpFromLineProps>(
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
      <path d="M3 1h1v1H3zM8 1h1v1H8zM2 2h1v1H2zM3 2h1v1H3zM4 2h1v1H4zM7 2h1v1H7zM8 2h1v1H8zM9 2h1v1H9zM1 3h1v1H1zM3 3h1v1H3zM5 3h1v1H5zM6 3h1v1H6zM8 3h1v1H8zM10 3h1v1h-1zM3 4h1v1H3zM8 4h1v1H8zM3 5h1v1H3zM8 5h1v1H8zM3 6h1v1H3zM8 6h1v1H8zM3 7h1v1H3zM8 7h1v1H8zM3 8h1v1H3zM8 8h1v1H8zM1 10h1v1H1zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgArrowsUpFromLine.displayName = "SvgArrowsUpFromLine";

export default SvgArrowsUpFromLine;
