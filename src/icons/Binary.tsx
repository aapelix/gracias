import * as React from "react";

interface SvgBinaryProps extends React.SVGAttributes<SVGElement> {}

const SvgBinary = React.forwardRef<SVGSVGElement, SvgBinaryProps>(
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
      <path d="M3 2h1v1H3zM4 2h1v1H4zM7 2h1v1H7zM8 2h1v1H8zM2 3h1v1H2zM5 3h1v1H5zM8 3h1v1H8zM2 4h1v1H2zM5 4h1v1H5zM8 4h1v1H8zM3 5h1v1H3zM4 5h1v1H4zM7 5h1v1H7zM8 5h1v1H8zM9 5h1v1H9zM2 7h1v1H2zM3 7h1v1H3zM7 7h1v1H7zM8 7h1v1H8zM3 8h1v1H3zM6 8h1v1H6zM9 8h1v1H9zM3 9h1v1H3zM6 9h1v1H6zM9 9h1v1H9zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM7 10h1v1H7zM8 10h1v1H8z" />
    </svg>
  )
);

SvgBinary.displayName = "SvgBinary";

export default SvgBinary;
