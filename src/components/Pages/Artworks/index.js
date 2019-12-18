import React from "react";

import NavBar from "../../NavBar";
import ArtList from "../../ArtList";

export default ({id}) => (
  <div>
    <NavBar />
    <ArtList id={id} />
  </div>
);
