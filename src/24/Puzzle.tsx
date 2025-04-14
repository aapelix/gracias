import * as React from "react";

interface SvgPuzzleProps extends React.SVGAttributes<SVGElement> {}

const SvgPuzzle = React.forwardRef<SVGSVGElement, SvgPuzzleProps>(
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
      <path d="M10 1h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM9 2h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM8 3h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zM7 4h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zM7 5h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm6 0h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zM8 6h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm9 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM4 7h1v1H4zm1 0h1v1H5zm5 0h1v1h-1zm1 0h1v1h-1zm7 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM3 8h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm4 0h1v1h-1zm1 0h1v1h-1zm7 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 9h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm4 0h1v1h-1zm1 0h1v1h-1zm8 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM1 10h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm3 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm10 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM1 11h1v1H1zm1 0h1v1H2zm5 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm12 0h1v1h-1zm1 0h1v1h-1zM1 12h1v1H1zm1 0h1v1H2zm12 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zM1 13h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm10 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 14h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm8 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM3 15h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm7 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM3 16h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm7 0h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zM2 17h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm9 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM1 18h1v1H1zm1 0h1v1H2zm5 0h1v1H7zm1 0h1v1H8zm6 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM1 19h1v1H1zm1 0h1v1H2zm4 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM1 20h1v1H1zm1 0h1v1H2zm4 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 21h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm3 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM3 22h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgPuzzle.displayName = "SvgPuzzle";

export default SvgPuzzle;
