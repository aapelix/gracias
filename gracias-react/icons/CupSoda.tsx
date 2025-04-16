import * as React from "react";

interface SvgCupSodaProps extends React.SVGAttributes<SVGElement> {}

const SvgCupSoda = React.forwardRef<SVGSVGElement, SvgCupSodaProps>(
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
      <path d="M5 1h1v1H5zM6 1h1v1H6zM4 2h1v1H4zM4 3h1v1H4zM1 4h1v1H1zM2 4h1v1H2zM3 4h1v1H3zM4 4h1v1H4zM5 4h1v1H5zM6 4h1v1H6zM7 4h1v1H7zM8 4h1v1H8zM9 4h1v1H9zM2 5h1v1H2zM8 5h1v1H8zM2 6h1v1H2zM8 6h1v1H8zM3 7h1v1H3zM4 7h1v1H4zM7 7h1v1H7zM3 8h1v1H3zM5 8h1v1H5zM6 8h1v1H6zM7 8h1v1H7zM3 9h1v1H3zM7 9h1v1H7zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7z" />
    </svg>
  )
);

SvgCupSoda.displayName = "SvgCupSoda";

export default SvgCupSoda;
