import { moxConfig } from "../../moxCss/mox.config";

type Breakpoint = keyof typeof moxConfig.viewportBreakpoints &
  keyof typeof moxConfig.containerBreakpoints;

// Todo: type the key to the possible values (get from config?)
export const propsToClassNames = (
  props: Record<string, string | Record<Breakpoint, string>>
): Array<string> => {
  const classNames: Array<string> = [];
  const { prefix } = moxConfig;

  for (const [prop, value] of Object.entries(props)) {
    // Either string is given (no responsiveness)
    if (typeof value === "string") {
      // inlineSize="xl"
      classNames.push(`${prefix}-${prop}-${value}`);
    } else if (typeof value === "object" && value !== null) {
      // Or an object with breakpoints is given
      // inlineSize={{ min640: "xl", max640: "md" }}
      for (const [breakpoint, responsiveValue] of Object.entries(value)) {
        if (responsiveValue)
          classNames.push(
            `${prefix}-${prop}-${responsiveValue}\\@${breakpoint}`
          );
      }
    }
  }

  return classNames;
};

/** Todo: Some unit-tests */
