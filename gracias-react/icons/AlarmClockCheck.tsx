import * as React from "react";

interface SvgAlarmClockCheckProps extends React.SVGAttributes<SVGElement> {}

const SvgAlarmClockCheck = React.forwardRef<SVGSVGElement, SvgAlarmClockCheckProps>(
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
      <path d="M2 1h1v1H2zM9 1h1v1H9zM1 2h1v1H1zM4 2h1v1H4zM5 2h1v1H5zM6 2h1v1H6zM7 2h1v1H7zM10 2h1v1h-1zM3 3h1v1H3zM8 3h1v1H8zM2 4h1v1H2zM9 4h1v1H9zM2 5h1v1H2zM7 5h1v1H7zM9 5h1v1H9zM2 6h1v1H2zM4 6h1v1H4zM6 6h1v1H6zM9 6h1v1H9zM2 7h1v1H2zM5 7h1v1H5zM9 7h1v1H9zM3 8h1v1H3zM8 8h1v1H8zM2 9h1v1H2zM4 9h1v1H4zM5 9h1v1H5zM6 9h1v1H6zM7 9h1v1H7zM9 9h1v1H9zM1 10h1v1H1zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgAlarmClockCheck.displayName = "SvgAlarmClockCheck";

export default SvgAlarmClockCheck;
