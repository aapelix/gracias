import * as React from "react";

interface SvgDraftingCompassProps extends React.SVGAttributes<SVGElement> {}

const SvgDraftingCompass = React.forwardRef<SVGSVGElement, SvgDraftingCompassProps>(
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
      <path d="M5 1h1v1H5zM4 2h1v1H4zM6 2h1v1H6zM5 3h1v1H5zM4 4h1v1H4zM6 4h1v1H6zM3 5h1v1H3zM7 5h1v1H7zM1 6h1v1H1zM3 6h1v1H3zM9 6h1v1H9zM2 7h1v1H2zM3 7h1v1H3zM7 7h1v1H7zM8 7h1v1H8zM2 8h1v1H2zM4 8h1v1H4zM5 8h1v1H5zM6 8h1v1H6zM1 9h1v1H1zM9 9h1v1H9zM1 10h1v1H1zM9 10h1v1H9z" />
    </svg>
  )
);

SvgDraftingCompass.displayName = "SvgDraftingCompass";

export default SvgDraftingCompass;
