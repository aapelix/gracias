import * as React from "react";

interface SvgCaravanProps extends React.SVGAttributes<SVGElement> {}

const SvgCaravan = React.forwardRef<SVGSVGElement, SvgCaravanProps>(
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
      <path d="M2 2h1v1H2zM3 2h1v1H3zM4 2h1v1H4zM5 2h1v1H5zM6 2h1v1H6zM7 2h1v1H7zM1 3h1v1H1zM8 3h1v1H8zM1 4h1v1H1zM8 4h1v1H8zM1 5h1v1H1zM2 5h1v1H2zM5 5h1v1H5zM8 5h1v1H8zM1 6h1v1H1zM2 6h1v1H2zM4 6h1v1H4zM6 6h1v1H6zM8 6h1v1H8zM1 7h1v1H1zM2 7h1v1H2zM4 7h1v1H4zM6 7h1v1H6zM8 7h1v1H8zM1 8h1v1H1zM4 8h1v1H4zM6 8h1v1H6zM8 8h1v1H8zM1 9h1v1H1zM3 9h1v1H3zM4 9h1v1H4zM6 9h1v1H6zM8 9h1v1H8zM10 9h1v1h-1zM2 10h1v1H2zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9zM10 10h1v1h-1zM3 11h1v1H3z" />
    </svg>
  )
);

SvgCaravan.displayName = "SvgCaravan";

export default SvgCaravan;
