import * as React from "react";

interface SvgFishSymbolProps extends React.SVGAttributes<SVGElement> {}

const SvgFishSymbol = React.forwardRef<SVGSVGElement, SvgFishSymbolProps>(
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
      <path d="M0 3h1v1H0zM4 3h1v1H4zM5 3h1v1H5zM6 3h1v1H6zM7 3h1v1H7zM8 3h1v1H8zM1 4h1v1H1zM3 4h1v1H3zM9 4h1v1H9zM2 5h1v1H2zM10 5h1v1h-1zM1 6h1v1H1zM3 6h1v1H3zM9 6h1v1H9zM0 7h1v1H0zM4 7h1v1H4zM5 7h1v1H5zM6 7h1v1H6zM7 7h1v1H7zM8 7h1v1H8z" />
    </svg>
  )
);

SvgFishSymbol.displayName = "SvgFishSymbol";

export default SvgFishSymbol;
