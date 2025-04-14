import * as React from "react";

interface SvgMessageCircleDashedProps extends React.SVGAttributes<SVGElement> {}

const SvgMessageCircleDashed = React.forwardRef<SVGSVGElement, SvgMessageCircleDashedProps>(
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
      <path d="M10 2h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-3 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM6 4h1v1H6zm1 0h1v1H7zm9 0h1v1h-1zm1 0h1v1h-1zM5 5h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zM4 6h1v1H4zm1 0h1v1H5zm13 0h1v1h-1zm1 0h1v1h-1zM4 7h1v1H4zm15 0h1v1h-1zM2 10h1v1H2zm1 0h1v1H3zm17 0h1v1h-1zm1 0h1v1h-1zM2 11h1v1H2zm1 0h1v1H3zm17 0h1v1h-1zm1 0h1v1h-1zM2 12h1v1H2zm1 0h1v1H3zm17 0h1v1h-1zm1 0h1v1h-1zM2 13h1v1H2zm1 0h1v1H3zm17 0h1v1h-1zm1 0h1v1h-1zm-2 3h1v1h-1zM2 17h1v1H2zm1 0h1v1H3zm15 0h1v1h-1zm1 0h1v1h-1zM2 18h1v1H2zm1 0h1v1H3zm14 0h1v1h-1zm1 0h1v1h-1zM2 19h1v1H2zm1 0h1v1H3zm13 0h1v1h-1zm1 0h1v1h-1zM1 20h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm4 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM1 21h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm4 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM1 22h1v1H1zm1 0h1v1H2zm1 0h1v1H3z" />
    </svg>
  )
);

SvgMessageCircleDashed.displayName = "SvgMessageCircleDashed";

export default SvgMessageCircleDashed;
