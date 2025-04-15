import * as React from "react";

interface SvgUsersProps extends React.SVGAttributes<SVGElement> {}

const SvgUsers = React.forwardRef<SVGSVGElement, SvgUsersProps>(
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
      <path d="M3 1h1v1H3zM4 1h1v1H4zM5 1h1v1H5zM8 1h1v1H8zM2 2h1v1H2zM6 2h1v1H6zM9 2h1v1H9zM2 3h1v1H2zM6 3h1v1H6zM9 3h1v1H9zM2 4h1v1H2zM6 4h1v1H6zM9 4h1v1H9zM3 5h1v1H3zM4 5h1v1H4zM5 5h1v1H5zM8 5h1v1H8zM2 7h1v1H2zM3 7h1v1H3zM4 7h1v1H4zM5 7h1v1H5zM6 7h1v1H6zM9 7h1v1H9zM1 8h1v1H1zM7 8h1v1H7zM10 8h1v1h-1zM1 9h1v1H1zM7 9h1v1H7zM10 9h1v1h-1zM1 10h1v1H1zM7 10h1v1H7zM10 10h1v1h-1z" />
    </svg>
  )
);

SvgUsers.displayName = "SvgUsers";

export default SvgUsers;
