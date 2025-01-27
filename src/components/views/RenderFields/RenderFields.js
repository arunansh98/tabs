import Text from "../../inputs/Text";
import Password from "../../inputs/Password";
import Number from "../../inputs/Number";
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
