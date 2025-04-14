import * as React from "react";

interface SvgShoppingCartProps extends React.SVGAttributes<SVGElement> {}

const SvgShoppingCart = React.forwardRef<SVGSVGElement, SvgShoppingCartProps>(
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
      <path d="M1 1h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm1 0h1v1H4zM1 2h1v1H1zm1 0h1v1H2zm1 0h1v1H3zm1 0h1v1H4zM3 3h1v1H3zm1 0h1v1H4zm0 1h1v1H4zm1 0h1v1H5zM4 5h1v1H4zm1 0h1v1H5zM4 6h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM4 7h1v1H4zm1 0h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM4 8h1v1H4zm1 0h1v1H5zm16 0h1v1h-1zm1 0h1v1h-1zM5 9h1v1H5zm1 0h1v1H6zm15 0h1v1h-1zm1 0h1v1h-1zM5 10h1v1H5zm1 0h1v1H6zm14 0h1v1h-1zm1 0h1v1h-1zM5 11h1v1H5zm1 0h1v1H6zm14 0h1v1h-1zm1 0h1v1h-1zM5 12h1v1H5zm1 0h1v1H6zm14 0h1v1h-1zm1 0h1v1h-1zM5 13h1v1H5zm1 0h1v1H6zm1 0h1v1H7zm13 0h1v1h-1zm1 0h1v1h-1zM6 14h1v1H6zm1 0h1v1H7zm12 0h1v1h-1zm1 0h1v1h-1zM6 15h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM7 16h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM7 19h1v1H7zm1 0h1v1H8zm10 0h1v1h-1zm1 0h1v1h-1zM6 20h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm8 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM6 21h1v1H6zm1 0h1v1H7zm1 0h1v1H8zm1 0h1v1H9zm8 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zm1 0h1v1h-1zM7 22h1v1H7zm1 0h1v1H8zm10 0h1v1h-1zm1 0h1v1h-1z" />
    </svg>
  )
);

SvgShoppingCart.displayName = "SvgShoppingCart";

export default SvgShoppingCart;
