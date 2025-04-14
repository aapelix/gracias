import * as React from "react";

interface SvgGitGraphProps extends React.SVGAttributes<SVGElement> {}

const SvgGitGraph = React.forwardRef<SVGSVGElement, SvgGitGraphProps>(
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
      <path d="M3 2h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm5 0h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 3h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm4 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM1 4h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm3 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm3 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM1 5h1v1H1zm1 0h1v1H2zm5 0h1v1H7zm1 0h1v1H8zm3 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zM1 6h1v1H1zm1 0h1v1H2zm5 0h1v1H7zm1 0h1v1H8zm3 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zM1 7h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm3 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm3 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM2 8h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm4 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM3 9h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm5 0h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM4 10h1v1H4zm1 0h1v1H5zm6 0h1v1h-1zm1 0h1v1h-1zm6 0h1v1h-1zm1 0h1v1h-1zM4 11h1v1H4zm1 0h1v1H5zm6 0h1v1h-1zm1 0h1v1h-1zm6 0h1v1h-1zm1 0h1v1h-1zM4 12h1v1H4zm1 0h1v1H5zm6 0h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zM4 13h1v1H4zm1 0h1v1H5zm6 0h1v1h-1zm1 0h1v1h-1zm5 0h1v1h-1zm1 0h1v1h-1zM3 14h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm5 0h1v1h-1zm1 0h1v1h-1zm4 0h1v1h-1zm1 0h1v1h-1zM2 15h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm4 0h1v1h-1zm1 0h1v1h-1zm3 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM1 16h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm3 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm3 0h1v1h-1zm1 0h1v1h-1zM1 17h1v1H1zm1 0h1v1H2zm5 0h1v1H7zm1 0h1v1H8zm3 0h1v1h-1zm1 0h1v1h-1zM1 18h1v1H1zm1 0h1v1H2zm5 0h1v1H7zm1 0h1v1H8zm3 0h1v1h-1zm1 0h1v1h-1zM1 19h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm3 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm3 0h1v1h-1zm1 0h1v1h-1zM2 20h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm4 0h1v1h-1zm1 0h1v1h-1zm-9 1h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm5 0h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgGitGraph.displayName = "SvgGitGraph";

export default SvgGitGraph;
