import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Image from "./image";

export default function Images() {
  const images = [...Array(20)]

  return (
    <>
      {images && images.map(() => (
        <Image src='http://placekitten.com/200/300' />
      ))}
    </>
  )
}
