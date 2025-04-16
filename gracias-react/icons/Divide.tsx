import * as React from "react";

interface SvgDivideProps extends React.SVGAttributes<SVGElement> {}

const SvgDivide = React.forwardRef<SVGSVGElement, SvgDivideProps>(
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
      <path d="M5 2h1v1H5zM2 5h1v1H2zM3 5h1v1H3zM4 5h1v1H4zM5 5h1v1H5zM6 5h1v1H6zM7 5h1v1H7zM8 5h1v1H8zM5 8h1v1H5z" />
    </svg>
  )
);

SvgDivide.displayName = "SvgDivide";

export default SvgDivide;
