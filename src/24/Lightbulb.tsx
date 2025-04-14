import * as React from "react";

interface SvgLightbulbProps extends React.SVGAttributes<SVGElement> {}

const SvgLightbulb = React.forwardRef<SVGSVGElement, SvgLightbulbProps>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      shapeRendering="crispEdges"
      ref={ref}
      {...props}
    >
      <path d="M9 1h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM8 2h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM7 3h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM6 4h1v1H6zm1 0h1v1H7zm9 0h1v1h-1zm1 0h1v1h-1zM5 5h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm9 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 6h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zM5 7h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zM5 8h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zM5 9h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zM6 10h1v1H6zm1 0h1v1H7zm9 0h1v1h-1zm1 0h1v1h-1zM6 11h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm7 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM7 12h1v1H7zm1 0h1v1H8zm7 0h1v1h-1zm1 0h1v1h-1zm-8 1h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1zm-7 1h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1zm-7 3h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-7 1h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-6 3h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-5 1h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgLightbulb.displayName = "SvgLightbulb";

export default SvgLightbulb;
