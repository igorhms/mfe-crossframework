import React from "react";

export default function NavigateLinkToAngular(props) {
  return (
    <a
      href=""
      onClick={(e) => {
        e.preventDefault();
        window.AngularRouter.navigate([props.href]);
      }}
    >
      Navegar para o host Angular
    </a>
  );
}
