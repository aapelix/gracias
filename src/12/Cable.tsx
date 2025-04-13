import * as React from "react";

interface SvgCableProps extends React.SVGAttributes<SVGElement> {}

const SvgCable = React.forwardRef<SVGSVGElement, SvgCableProps>(
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
      <path d="M3 1h1v1H3zm4 0h1v1H7zm1 0h1v1H8zM1 2h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm2 0h1v1H6zm3 0h1v1H9zM1 3h1v1H1zm3 0h1v1H4zm2 0h1v1H6zm3 0h1v1H9zM2 4h1v1H2zm1 0h1v1H3zm3 0h1v1H6zm3 0h1v1H9zM2 5h1v1H2zm3 0h1v1H5zm4 0h1v1H9zM2 6h1v1H2zm3 0h1v1H5zm4 0h1v1H9zM2 7h1v1H2zm3 0h1v1H5zm3 0h1v1H8zm1 0h1v1H9zM2 8h1v1H2zm3 0h1v1H5zm2 0h1v1H7zm3 0h1v1h-1zM2 9h1v1H2zm3 0h1v1H5zm2 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm-7 1h1v1H3zm1 0h1v1H4zm5 0h1v1H9z" />
    </svg>
  )
);

SvgCable.displayName = "SvgCable";

export default SvgCable;
