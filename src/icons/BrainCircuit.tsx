import * as React from "react";

interface SvgBrainCircuitProps extends React.SVGAttributes<SVGElement> {}

const SvgBrainCircuit = React.forwardRef<SVGSVGElement, SvgBrainCircuitProps>(
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
      <path d="M4 0h1v1H4zM3 1h1v1H3zM5 1h1v1H5zM6 1h1v1H6zM9 1h1v1H9zM2 2h1v1H2zM3 2h1v1H3zM6 2h1v1H6zM8 2h1v1H8zM9 2h1v1H9zM2 3h1v1H2zM4 3h1v1H4zM6 3h1v1H6zM8 3h1v1H8zM1 4h1v1H1zM6 4h1v1H6zM7 4h1v1H7zM8 4h1v1H8zM9 4h1v1H9zM10 4h1v1h-1zM1 5h1v1H1zM2 5h1v1H2zM5 5h1v1H5zM6 5h1v1H6zM10 5h1v1h-1zM1 6h1v1H1zM4 6h1v1H4zM6 6h1v1H6zM7 6h1v1H7zM8 6h1v1H8zM1 7h1v1H1zM6 7h1v1H6zM8 7h1v1H8zM2 8h1v1H2zM3 8h1v1H3zM6 8h1v1H6zM2 9h1v1H2zM6 9h1v1H6zM7 9h1v1H7zM8 9h1v1H8zM9 9h1v1H9zM10 9h1v1h-1zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgBrainCircuit.displayName = "SvgBrainCircuit";

export default SvgBrainCircuit;
