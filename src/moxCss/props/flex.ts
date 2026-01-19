import { mapOptionsToCSSVars } from "../helpers/mapOptionsToCSSVars";
import { mapOptionsToValues } from "../helpers/mapOptionsToValues";
import { globalGapOptions, spaces } from "../configOptions";
import type { MoxConfigProps } from "../mox.config";

/* Flex or grid properties */
export const flexProps = {
  direction: {
    options: {
      row: { "flex-direction": "row" },
      column: { "flex-direction": "column" },
      rowReverse: { "flex-direction": "row-reverse" },
      columnReverse: { "flex-direction": "column-reverse" },
    },
    responsive: true,
  },
  wrap: {
    options: {
      nowrap: { "flex-wrap": "nowrap" },
      wrap: { "flex-wrap": "wrap" },
      wrapReverse: { "flex-wrap": "wrap-reverse" },
    },
    responsive: true,
  },
  alignItems: {
    options: {
      stretch: { "align-items": "stretch" },
      center: { "align-items": "center" },
      start: { "align-items": "flex-start" },
      end: { "align-items": "flex-end" },
      baseline: { "align-items": "baseline" },
      initial: { "align-items": "initial" },
      inherit: { "align-items": "inherit" },
    },
    responsive: true,
  },
  justifyContent: {
    options: {
      flexStart: { "justify-content": "flex-start" },
      flexEnd: { "justify-content": "flex-end" },
      center: { "justify-content": "center" },
      spaceBetween: { "justify-content": "space-between" },
      spaceAround: { "justify-content": "space-around" },
      spaceEvenly: { "justify-content": "space-evenly" },
    },
    responsive: true,
  },
  itemSize: {
    options: {
      half: {
        "grid-template-columns":
          "repeat(calc(var(--mox-container-grid-total-columns) / var(--mox-container-grid-columns-half)), minmax(0, 1fr))",
      },
      third: {
        "grid-template-columns":
          "repeat(calc(var(--mox-container-grid-total-columns) / var(--mox-container-grid-columns-third)), minmax(0, 1fr))",
      },
      quarter: {
        "grid-template-columns":
          "repeat(calc(var(--mox-container-grid-total-columns) / var(--mox-container-grid-columns-quarter)), minmax(0, 1fr))",
      },
      sixth: {
        "grid-template-columns":
          "repeat(calc(var(--mox-container-grid-total-columns) / var(--mox-container-grid-columns-sixth)), minmax(0, 1fr))",
      },
    },
    responsive: true,
  },
  gridColumn: {
    options: {
      window: { "--mox-page-grid-column": "window" },
      page: { "--mox-page-grid-column": "page" },
      span1: { "grid-column": "span 1" },
      span2: { "grid-column": "span 2" },
      span3: { "grid-column": "span 3" },
      span4: { "grid-column": "span 4" },
      span5: { "grid-column": "span 5" },
      span6: { "grid-column": "span 6" },
      span7: { "grid-column": "span 7" },
      span8: { "grid-column": "span 8" },
      span9: { "grid-column": "span 9" },
      span10: { "grid-column": "span 10" },
      span11: { "grid-column": "span 11" },
      span12: { "grid-column": "span 12" },
    },
    responsive: true,
  },
  gridColumnStart: {
    options: {
      windowStart: { "grid-column-start": "window-start" },
      pageStart: { "grid-column-start": "page-start" },
      pageEnd: { "grid-column-start": "page-end" },
      windowEnd: { "grid-column-start": "window-end" },
      0: { "grid-column-start": "0" },
      1: { "grid-column-start": "1" },
      2: { "grid-column-start": "2" },
      3: { "grid-column-start": "3" },
      4: { "grid-column-start": "4" },
      5: { "grid-column-start": "5" },
      6: { "grid-column-start": "6" },
      7: { "grid-column-start": "7" },
      8: { "grid-column-start": "8" },
      9: { "grid-column-start": "9" },
      10: { "grid-column-start": "10" },
      11: { "grid-column-start": "11" },
      12: { "grid-column-start": "12" },
      13: { "grid-column-start": "13" },
    },
    responsive: true,
  },
  gridColumnEnd: {
    options: {
      windowStart: { "grid-column-end": "window-start" },
      pageStart: { "grid-column-end": "page-start" },
      windowEnd: { "grid-column-end": "window-end" },
      pageEnd: { "grid-column-end": "page-end" },
      0: { "grid-column-end": "0" },
      1: { "grid-column-end": "1" },
      2: { "grid-column-end": "2" },
      3: { "grid-column-end": "3" },
      4: { "grid-column-end": "4" },
      5: { "grid-column-end": "5" },
      6: { "grid-column-end": "6" },
      7: { "grid-column-end": "7" },
      8: { "grid-column-end": "8" },
      9: { "grid-column-end": "9" },
      10: { "grid-column-end": "10" },
      11: { "grid-column-end": "11" },
      12: { "grid-column-end": "12" },
      13: { "grid-column-end": "13" },
    },
    responsive: true,
  },
  gap: {
    options: {
      ...mapOptionsToCSSVars(spaces, ["gap"], "space"),
      ...mapOptionsToValues(globalGapOptions, ["gap"]),
    },
    responsive: true,
  },
  rowGap: {
    options: {
      ...mapOptionsToCSSVars(spaces, ["row-gap"], "space"),
      ...mapOptionsToValues(globalGapOptions, ["row-gap"]),
    },
    responsive: true,
  },
  columnGap: {
    options: {
      ...mapOptionsToCSSVars(spaces, ["column-gap"], "space"),
      ...mapOptionsToValues(globalGapOptions, ["column-gap"]),
    },
    responsive: true,
  },
} as const satisfies MoxConfigProps;
