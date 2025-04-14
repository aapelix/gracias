import * as React from "react";

interface SvgPenToolProps extends React.SVGAttributes<SVGElement> {}

const SvgPenTool = React.forwardRef<SVGSVGElement, SvgPenToolProps>(
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
      <path d="M2 1h1v1H2zm1 0h1v1H3zm1 0h1v1H4zM1 2h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zM1 3h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM1 4h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm4 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 5h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm7 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 6h1v1H2zm1 0h1v1H3zm2 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm9 0h1v1h-1zm1 0h1v1h-1zM2 7h1v1H2zm1 0h1v1H3zm3 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm8 0h1v1h-1zm1 0h1v1h-1zM2 8h1v1H2zm1 0h1v1H3zm4 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zM3 9h1v1H3zm1 0h1v1H4zm4 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zM3 10h1v1H3zm1 0h1v1H4zm4 0h1v1H8zm1 0h1v1H9zm3 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM3 11h1v1H3zm1 0h1v1H4zm4 0h1v1H8zm1 0h1v1H9zm3 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zM3 12h1v1H3zm1 0h1v1H4zm4 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM4 13h1v1H4zm1 0h1v1H5zm4 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM4 14h1v1H4zm1 0h1v1H5zm10 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zM4 15h1v1H4zm1 0h1v1H5zm9 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zM5 16h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM6 17h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-10 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-7 1h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-6 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm-4 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgPenTool.displayName = "SvgPenTool";

export default SvgPenTool;
