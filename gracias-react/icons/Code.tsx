import * as React from "react";

interface SvgCodeProps extends React.SVGAttributes<SVGElement> {}

const SvgCode = React.forwardRef<SVGSVGElement, SvgCodeProps>(
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
      <path d="M4 2h1v1H4zM7 2h1v1H7zM3 3h1v1H3zM8 3h1v1H8zM2 4h1v1H2zM9 4h1v1H9zM1 5h1v1H1zM10 5h1v1h-1zM2 6h1v1H2zM9 6h1v1H9zM3 7h1v1H3zM8 7h1v1H8zM4 8h1v1H4zM7 8h1v1H7z" />
    </svg>
  )
);

SvgCode.displayName = "SvgCode";

export default SvgCode;
