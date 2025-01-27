import RenderFields from "../views/RenderFields/RenderFields";

export default function Settings({ fields, tabIndex }) {
  return (
    <div>
      <RenderFields fields={fields} tabIndex={tabIndex} />
    </div>
  );
}
