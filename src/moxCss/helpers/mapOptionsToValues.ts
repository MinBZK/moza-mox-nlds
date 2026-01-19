/**
 * Map options directly to their values (no CSS variables).
 */
export const mapOptionsToValues = <O extends string>(
  options: ReadonlyArray<O>,
  cssProps: Array<string>
) => {
  const mappedBasicOptions = {} as Record<O, Record<string, string>>;
  for (const option of options) {
    const result = cssProps.reduce((acc, cssProp) => {
      acc[cssProp] = `${option}`;
      return acc;
    }, {} as Record<string, string>);
    mappedBasicOptions[option] = result;
  }
  return mappedBasicOptions;
};
