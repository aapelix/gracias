import * as React from "react";

interface SvgPaletteProps extends React.SVGAttributes<SVGElement> {}

const SvgPalette = React.forwardRef<SVGSVGElement, SvgPaletteProps>(
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
      <path d="M3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM6 1h1v1H6zM7 1h1v1H7zM8 1h1v1H8zM2 2h1v1H2zM9 2h1v1H9zM1 3h1v1H1zM6 3h1v1H6zM10 3h1v1h-1zM1 4h1v1H1zM4 4h1v1H4zM8 4h1v1H8zM10 4h1v1h-1zM1 5h1v1H1zM10 5h1v1h-1zM1 6h1v1H1zM3 6h1v1H3zM8 6h1v1H8zM9 6h1v1H9zM1 7h1v1H1zM7 7h1v1H7zM1 8h1v1H1zM6 8h1v1H6zM2 9h1v1H2zM7 9h1v1H7zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6z" />
    </svg>
  )
);

SvgPalette.displayName = "SvgPalette";

export default SvgPalette;
