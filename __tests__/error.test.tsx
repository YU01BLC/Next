import React from "react";
import { render } from "@testing-library/react";
import ErrorWrapper from "./errorWrapper";
describe("ErrorWrapperコンポーネント", () => {
  it("エラーメッセージが表示されること", () => {
    const { container } = render(<ErrorWrapper />);
    const errorElement = container.querySelector("h2");
    expect(errorElement).toBeInTheDocument();
  });
});
