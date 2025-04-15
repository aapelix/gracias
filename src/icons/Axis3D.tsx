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
      <path d="M1 2h1v1H1zM1 3h1v1H1zM1 4h1v1H1zM1 5h1v1H1zM1 6h1v1H1zM1 7h1v1H1zM4 7h1v1H4zM1 8h1v1H1zM3 8h1v1H3zM1 9h1v1H1zM2 9h1v1H2zM1 10h1v1H1zM2 10h1v1H2zM3 10h1v1H3zM4 10h1v1H4zM5 10h1v1H5zM6 10h1v1H6zM7 10h1v1H7zM8 10h1v1H8zM9 10h1v1H9z" />
    </svg>
  )
);

SvgAxis3D.displayName = "SvgAxis3D";

export default SvgAxis3D;
