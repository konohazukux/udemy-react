import { React } from "react";

export const ChildArea = (props) => {
  const { open } = props;
  return <>{open ? <div>子コンポーネント</div> : null}</>;
};
