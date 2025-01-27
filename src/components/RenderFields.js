import Text from "./Text.js";
import Password from "./Password.js";
import Number from "./Number.js";
import "./RenderFields.css";

export default function RenderFields({ fields, tabIndex }) {
  return (
    <div className="fields">
      {fields?.map((field, index) => {
        switch (field.type) {
          case "text":
            return (
              <div>
                <Text key={index} field={field} tabIndex={tabIndex} />
              </div>
            );
          case "number":
            return (
              <div>
                <Number key={index} field={field} tabIndex={tabIndex} />
              </div>
            );
          case "password":
            return (
              <div>
                <Password key={index} field={field} tabIndex={tabIndex} />
              </div>
            );
        }
      }) || "No fields present !"}
    </div>
  );
}
