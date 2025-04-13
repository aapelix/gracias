import * as React from "react";

interface SvgAnvilProps extends React.SVGAttributes<SVGElement> {}

const SvgAnvil = React.forwardRef<SVGSVGElement, SvgAnvilProps>(
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
      <path d="M4 2h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zM1 3h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm7 0h1v1h-1zM1 4h1v1H1zm2 0h1v1H3zm7 0h1v1h-1zM2 5h1v1H2zm1 0h1v1H3zm6 0h1v1H9zM4 6h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zM4 7h1v1H4zm3 0h1v1H7zM3 8h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zM2 9h1v1H2zm7 0h1v1H9zm-7 1h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9z" />
    </svg>
  )
);

SvgAnvil.displayName = "SvgAnvil";

export default SvgAnvil;
