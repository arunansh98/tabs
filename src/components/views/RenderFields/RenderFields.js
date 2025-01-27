import "./RenderFields.css";
import Input from "../../inputs/Input";

export default function RenderFields({ fields, tabIndex }) {
  return (
    <div className="fields">
      {fields?.map((field, index) => (
        <div>
          <Input key={index} field={field} tabIndex={tabIndex} />
        </div>
      )) || "No fields present !"}
    </div>
  );
}
