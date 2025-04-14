import * as React from "react";

interface SvgDnaProps extends React.SVGAttributes<SVGElement> {}

const SvgDna = React.forwardRef<SVGSVGElement, SvgDnaProps>(
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
      <path d="M14 1h1v1h-1zm1 0h1v1h-1zm-2 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-2 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-3 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-4 1h1v1h-1zm1 0h1v1h-1zm2 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-6 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm-6 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-3 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-3 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-7 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM6 11h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM4 12h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 13h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm-7 1h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm-3 1h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm5 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-3 1h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-6 1h1v1H6zm1 0h1v1H7zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-6 1h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm2 0h1v1h-1zm1 0h1v1h-1zm-4 1h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm-3 1h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm-2 1h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm-2 1h1v1H8zm1 0h1v1H9z" />
    </svg>
  )
);

SvgDna.displayName = "SvgDna";

export default SvgDna;
