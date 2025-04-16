import * as React from "react";

interface SvgCarTaxiFrontProps extends React.SVGAttributes<SVGElement> {}

const SvgCarTaxiFront = React.forwardRef<SVGSVGElement, SvgCarTaxiFrontProps>(
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
      <path d="M4 0h1v1H4zM5 0h1v1H5zM6 0h1v1H6zM7 0h1v1H7zM3 2h1v1H3zM4 2h1v1H4zM5 2h1v1H5zM6 2h1v1H6zM7 2h1v1H7zM8 2h1v1H8zM2 3h1v1H2zM9 3h1v1H9zM0 4h1v1H0zM2 4h1v1H2zM9 4h1v1H9zM11 4h1v1h-1zM1 5h1v1H1zM2 5h1v1H2zM3 5h1v1H3zM4 5h1v1H4zM5 5h1v1H5zM6 5h1v1H6zM7 5h1v1H7zM8 5h1v1H8zM9 5h1v1H9zM10 5h1v1h-1zM1 6h1v1H1zM10 6h1v1h-1zM1 7h1v1H1zM3 7h1v1H3zM8 7h1v1H8zM10 7h1v1h-1zM1 8h1v1H1zM10 8h1v1h-1zM2 9h1v1H2zM3 9h1v1H3zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM8 9h1v1H8zM9 9h1v1H9zM2 10h1v1H2zM9 10h1v1H9z" />
    </svg>
  )
);

SvgCarTaxiFront.displayName = "SvgCarTaxiFront";

export default SvgCarTaxiFront;
