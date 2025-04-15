import * as React from "react";

interface SvgAlignHorizontalSpaceBetweenProps extends React.SVGAttributes<SVGElement> {}

const SvgAlignHorizontalSpaceBetween = React.forwardRef<SVGSVGElement, SvgAlignHorizontalSpaceBetweenProps>(
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
      <path d="M1 1h1v1H1zM10 1h1v1h-1zM1 2h1v1H1zM2 2h1v1H2zM3 2h1v1H3zM10 2h1v1h-1zM1 3h1v1H1zM4 3h1v1H4zM8 3h1v1H8zM9 3h1v1H9zM10 3h1v1h-1zM1 4h1v1H1zM4 4h1v1H4zM7 4h1v1H7zM10 4h1v1h-1zM1 5h1v1H1zM4 5h1v1H4zM7 5h1v1H7zM10 5h1v1h-1zM1 6h1v1H1zM4 6h1v1H4zM7 6h1v1H7zM10 6h1v1h-1zM1 7h1v1H1zM4 7h1v1H4zM7 7h1v1H7zM10 7h1v1h-1zM1 8h1v1H1zM4 8h1v1H4zM8 8h1v1H8zM9 8h1v1H9zM10 8h1v1h-1zM1 9h1v1H1zM2 9h1v1H2zM3 9h1v1H3zM10 9h1v1h-1zM1 10h1v1H1zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgAlignHorizontalSpaceBetween.displayName = "SvgAlignHorizontalSpaceBetween";

export default SvgAlignHorizontalSpaceBetween;
