import React from "react";
import { Button } from "../../components/Button";
import { useDisclosure } from "./useDisclosure";

export default {
  title: "Hooks/useDisclosure",
  component: useDisclosure,
};

export const Usage = () => {
  const { isOpen, toggle } = useDisclosure();

  return <Button onClick={toggle}>{isOpen ? "Open" : "Close"}</Button>;
};
