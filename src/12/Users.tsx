import * as React from "react";

interface SvgUsersProps extends React.SVGAttributes<SVGElement> {}

const SvgUsers = React.forwardRef<SVGSVGElement, SvgUsersProps>(
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
      <path d="M3 1h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm3 0h1v1H8zM2 2h1v1H2zm4 0h1v1H6zm3 0h1v1H9zM2 3h1v1H2zm4 0h1v1H6zm3 0h1v1H9zM2 4h1v1H2zm4 0h1v1H6zm3 0h1v1H9zM3 5h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm3 0h1v1H8zM2 7h1v1H2zm1 0h1v1H3zm1 0h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm3 0h1v1H9zM1 8h1v1H1zm6 0h1v1H7zm3 0h1v1h-1zM1 9h1v1H1zm6 0h1v1H7zm3 0h1v1h-1zm-9 1h1v1H1zm6 0h1v1H7zm3 0h1v1h-1z" />
    </svg>
  )
);

SvgUsers.displayName = "SvgUsers";

export default SvgUsers;
