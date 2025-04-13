import * as React from "react";

interface SvgAxis3DProps extends React.SVGAttributes<SVGElement> {}

const SvgAxis3D = React.forwardRef<SVGSVGElement, SvgAxis3DProps>(
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
      <path d="M3 3h1v1H3zm1 0h1v1H4zM3 4h1v1H3zm1 0h1v1H4zM3 5h1v1H3zm1 0h1v1H4zM3 6h1v1H3zm1 0h1v1H4zM3 7h1v1H3zm1 0h1v1H4zM3 8h1v1H3zm1 0h1v1H4zM3 9h1v1H3zm1 0h1v1H4zm-1 1h1v1H3zm1 0h1v1H4zm-1 1h1v1H3zm1 0h1v1H4zm-1 1h1v1H3zm1 0h1v1H4zm6 0h1v1h-1zm1 0h1v1h-1zm-8 1h1v1H3zm1 0h1v1H4zm5 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm-8 1h1v1H3zm1 0h1v1H4zm4 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm-7 1h1v1H3zm1 0h1v1H4zm3 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm-6 1h1v1H3zm1 0h1v1H4zm2 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm-5 1h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm-4 1h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm-3 1h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM3 20h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgAxis3D.displayName = "SvgAxis3D";

export default SvgAxis3D;
