import * as React from "react";

interface SvgEggProps extends React.SVGAttributes<SVGElement> {}

const SvgEgg = React.forwardRef<SVGSVGElement, SvgEggProps>(
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
      <path d="M5 1h1v1H5zM6 1h1v1H6zM4 2h1v1H4zM7 2h1v1H7zM3 3h1v1H3zM8 3h1v1H8zM3 4h1v1H3zM8 4h1v1H8zM2 5h1v1H2zM9 5h1v1H9zM2 6h1v1H2zM9 6h1v1H9zM2 7h1v1H2zM9 7h1v1H9zM2 8h1v1H2zM9 8h1v1H9zM3 9h1v1H3zM8 9h1v1H8zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7z" />
    </svg>
  )
);

SvgEgg.displayName = "SvgEgg";

export default SvgEgg;
