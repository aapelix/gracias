import * as React from "react";

interface SvgExpandProps extends React.SVGAttributes<SVGElement> {}

const SvgExpand = React.forwardRef<SVGSVGElement, SvgExpandProps>(
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
      <path d="M1 1h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm5 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zM1 2h1v1H1zm1 0h1v1H2zm7 0h1v1H9zm1 0h1v1h-1zM1 3h1v1H1zm2 0h1v1H3zm5 0h1v1H8zm2 0h1v1h-1zM4 4h1v1H4zm3 0h1v1H7zM4 7h1v1H4zm3 0h1v1H7zM1 8h1v1H1zm2 0h1v1H3zm5 0h1v1H8zm2 0h1v1h-1zM1 9h1v1H1zm1 0h1v1H2zm7 0h1v1H9zm1 0h1v1h-1zm-9 1h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm5 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgExpand.displayName = "SvgExpand";

export default SvgExpand;
