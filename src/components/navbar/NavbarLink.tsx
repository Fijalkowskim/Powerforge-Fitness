import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
interface Props {
  to: string;
  name: string;
}
function NavbarLink(props: Props) {
  const { pathname } = useLocation();
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(pathname === props.to);
  }, [pathname, props.to]);
  return (
    <motion.button
      className={`uppercase transition-colors hover:text-action-300 ${active && "text-action-300"}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.02 }}
    >
      <Link to={props.to}>{props.name}</Link>
    </motion.button>
  );
}

export default NavbarLink;
