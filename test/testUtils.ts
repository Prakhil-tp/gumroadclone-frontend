import { ShallowWrapper, ReactWrapper } from "enzyme";

type Wrapper = ShallowWrapper | ReactWrapper;

/**
 * Return node(s) with given data-test attribute
 * @param {Wrapper} wrapper - Enzyme Shallow | React wrapper
 * @param {string} val - Value of data-test attribute for test
 */
export const findByTestAttr = (wrapper: Wrapper, val: string): Wrapper => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const getCalcValue = (): string => "";
