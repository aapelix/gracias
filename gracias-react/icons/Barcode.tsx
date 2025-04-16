import * as React from "react";

interface SvgBarcodeProps extends React.SVGAttributes<SVGElement> {}

const SvgBarcode = React.forwardRef<SVGSVGElement, SvgBarcodeProps>(
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
      <path d="M1 2h1v1H1zM4 2h1v1H4zM6 2h1v1H6zM8 2h1v1H8zM10 2h1v1h-1zM1 3h1v1H1zM4 3h1v1H4zM6 3h1v1H6zM8 3h1v1H8zM10 3h1v1h-1zM1 4h1v1H1zM4 4h1v1H4zM6 4h1v1H6zM8 4h1v1H8zM10 4h1v1h-1zM1 5h1v1H1zM4 5h1v1H4zM6 5h1v1H6zM8 5h1v1H8zM10 5h1v1h-1zM1 6h1v1H1zM4 6h1v1H4zM6 6h1v1H6zM8 6h1v1H8zM10 6h1v1h-1zM1 7h1v1H1zM4 7h1v1H4zM6 7h1v1H6zM8 7h1v1H8zM10 7h1v1h-1zM1 8h1v1H1zM4 8h1v1H4zM6 8h1v1H6zM8 8h1v1H8zM10 8h1v1h-1zM1 9h1v1H1zM4 9h1v1H4zM6 9h1v1H6zM8 9h1v1H8zM10 9h1v1h-1z" />
    </svg>
  )
);

SvgBarcode.displayName = "SvgBarcode";

export default SvgBarcode;
