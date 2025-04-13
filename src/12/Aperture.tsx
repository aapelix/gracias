import * as React from "react";

interface SvgApertureProps extends React.SVGAttributes<SVGElement> {}

const SvgAperture = React.forwardRef<SVGSVGElement, SvgApertureProps>(
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
      <path d="M4 1h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zM3 2h1v1H3zm3 0h1v1H6zm2 0h1v1H8zM2 3h1v1H2zm1 0h1v1H3zm3 0h1v1H6zm3 0h1v1H9zM1 4h1v1H1zm2 0h1v1H3zm2 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zM1 5h1v1H1zm3 0h1v1H4zm3 0h1v1H7zm3 0h1v1h-1zM1 6h1v1H1zm3 0h1v1H4zm3 0h1v1H7zm3 0h1v1h-1zM1 7h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm2 0h1v1H8zm2 0h1v1h-1zM2 8h1v1H2zm3 0h1v1H5zm3 0h1v1H8zm1 0h1v1H9zM3 9h1v1H3zm2 0h1v1H5zm3 0h1v1H8zm-4 1h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7z" />
    </svg>
  )
);

SvgAperture.displayName = "SvgAperture";

export default SvgAperture;
