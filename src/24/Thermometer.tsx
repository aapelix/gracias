import * as React from "react";

interface SvgThermometerProps extends React.SVGAttributes<SVGElement> {}

const SvgThermometer = React.forwardRef<SVGSVGElement, SvgThermometerProps>(
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
      <path d="M10 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM9 2h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM9 3h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zM9 4h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zM9 5h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zM9 6h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zM9 7h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zM9 8h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zM9 9h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm-5 1h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm-5 1h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm-5 1h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm-5 1h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm-5 1h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm-6 1h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1zm-8 1h1v1H7zm1 0h1v1H8zm7 0h1v1h-1zm1 0h1v1h-1zm-9 1h1v1H7zm1 0h1v1H8zm7 0h1v1h-1zm1 0h1v1h-1zm-9 1h1v1H7zm1 0h1v1H8zm7 0h1v1h-1zm1 0h1v1h-1zm-9 1h1v1H7zm1 0h1v1H8zm7 0h1v1h-1zm1 0h1v1h-1zm-8 1h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1zm-6 1h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-4 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgThermometer.displayName = "SvgThermometer";

export default SvgThermometer;
