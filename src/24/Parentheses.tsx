import * as React from "react";

interface SvgParenthesesProps extends React.SVGAttributes<SVGElement> {}

const SvgParentheses = React.forwardRef<SVGSVGElement, SvgParenthesesProps>(
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
      <path d="M7 2h1v1H7zm1 0h1v1H8zm7 0h1v1h-1zm1 0h1v1h-1zM6 3h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm7 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 4h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm9 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM5 5h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zM4 6h1v1H4zm1 0h1v1H5zm13 0h1v1h-1zm1 0h1v1h-1zM4 7h1v1H4zm1 0h1v1H5zm13 0h1v1h-1zm1 0h1v1h-1zM3 8h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm13 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM3 9h1v1H3zm1 0h1v1H4zm15 0h1v1h-1zm1 0h1v1h-1zM3 10h1v1H3zm1 0h1v1H4zm15 0h1v1h-1zm1 0h1v1h-1zM3 11h1v1H3zm1 0h1v1H4zm15 0h1v1h-1zm1 0h1v1h-1zM3 12h1v1H3zm1 0h1v1H4zm15 0h1v1h-1zm1 0h1v1h-1zM3 13h1v1H3zm1 0h1v1H4zm15 0h1v1h-1zm1 0h1v1h-1zM3 14h1v1H3zm1 0h1v1H4zm15 0h1v1h-1zm1 0h1v1h-1zM3 15h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm13 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM4 16h1v1H4zm1 0h1v1H5zm13 0h1v1h-1zm1 0h1v1h-1zM4 17h1v1H4zm1 0h1v1H5zm13 0h1v1h-1zm1 0h1v1h-1zM5 18h1v1H5zm1 0h1v1H6zm11 0h1v1h-1zm1 0h1v1h-1zM5 19h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm9 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM6 20h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm7 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM7 21h1v1H7zm1 0h1v1H8zm7 0h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgParentheses.displayName = "SvgParentheses";

export default SvgParentheses;
