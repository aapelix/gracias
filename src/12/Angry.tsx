import * as React from "react";

interface SvgAngryProps extends React.SVGAttributes<SVGElement> {}

const SvgAngry = React.forwardRef<SVGSVGElement, SvgAngryProps>(
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
      <path d="M3 1h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zM2 2h1v1H2zm7 0h1v1H9zM1 3h1v1H1zm9 0h1v1h-1zM1 4h1v1H1zm2 0h1v1H3zm5 0h1v1H8zm2 0h1v1h-1zM1 5h1v1H1zm3 0h1v1H4zm3 0h1v1H7zm3 0h1v1h-1zM1 6h1v1H1zm9 0h1v1h-1zM1 7h1v1H1zm4 0h1v1H5zm1 0h1v1H6zm4 0h1v1h-1zM1 8h1v1H1zm3 0h1v1H4zm3 0h1v1H7zm3 0h1v1h-1zM2 9h1v1H2zm7 0h1v1H9zm-6 1h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8z" />
    </svg>
  )
);

SvgAngry.displayName = "SvgAngry";

export default SvgAngry;
