import React from "react";
import RateApplicant from "./RateApplicant";
import { shallow } from "enzyme";

/**
 *
 * @param {Wrapper } wrapper
 * @param {data-test attribute} val
 */

const findByAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

describe(" Testing Rate Applicant component", () => {
  const wrapper = shallow(<RateApplicant />);

  test("Render select stars properly", () => {
    const select = findByAttr(wrapper, "select");
    expect(select.length).toEqual(1);
  });

  test("Render name without errors", () => {
    const name = findByAttr(wrapper, "name");
    expect(name.length).toEqual(1);
  });

  test("Render Review without errors", () => {
    const review = findByAttr(wrapper, "review");
    expect(review.length).toEqual(0);
  });

  test("Render Submit Button without errors", () => {
    const button = findByAttr(wrapper, "button");
    expect(button.length).toEqual(1);
  });
});
