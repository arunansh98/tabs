import RenderFields from "../views/RenderFields/RenderFields";

export default function Profile({ fields, tabIndex }) {
  console.log({ fields, tabIndex });
  return <RenderFields fields={fields} tabIndex={tabIndex} />;
}
