import * as React from "react";

interface SvgAnchorProps extends React.SVGAttributes<SVGElement> {}

const SvgAnchor = React.forwardRef<SVGSVGElement, SvgAnchorProps>(
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
      <path d="M5 1h1v1H5zm1 0h1v1H6zM4 2h1v1H4zm3 0h1v1H7zM4 3h1v1H4zm3 0h1v1H7zM5 4h1v1H5zm1 0h1v1H6zM5 5h1v1H5zM1 6h1v1H1zm1 0h1v1H2zm3 0h1v1H5zm3 0h1v1H8zm1 0h1v1H9zM1 7h1v1H1zm4 0h1v1H5zm4 0h1v1H9zM1 8h1v1H1zm4 0h1v1H5zm4 0h1v1H9zM2 9h1v1H2zm3 0h1v1H5zm3 0h1v1H8zm-5 1h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7z" />
    </svg>
  )
);

SvgAnchor.displayName = "SvgAnchor";

export default SvgAnchor;
