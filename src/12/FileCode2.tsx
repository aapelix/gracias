import * as React from "react";

interface SvgFileCode2Props extends React.SVGAttributes<SVGElement> {}

const SvgFileCode2 = React.forwardRef<SVGSVGElement, SvgFileCode2Props>(
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
      <path d="M3 1h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zM2 2h1v1H2zm3 0h1v1H5zm2 0h1v1H7zM2 3h1v1H2zm3 0h1v1H5zm3 0h1v1H8zM2 4h1v1H2zm3 0h1v1H5zm4 0h1v1H9zM6 5h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zM2 6h1v1H2zm2 0h1v1H4zm5 0h1v1H9zM1 7h1v1H1zm4 0h1v1H5zm4 0h1v1H9zM2 8h1v1H2zm2 0h1v1H4zm5 0h1v1H9zm0 1h1v1H9zm-7 1h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8z" />
    </svg>
  )
);

SvgFileCode2.displayName = "SvgFileCode2";

export default SvgFileCode2;
