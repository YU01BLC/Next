import { render, screen } from "@testing-library/react";
import Page from "../../app/@reactHookForm/page";

describe("@reactHookForm/Pageコンポーネントscreenshot", () => {
  it("snapshot", () => {
    const { asFragment } = render(<Page />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("@reactHookForm/Pageコンポーネント表示確認", () => {
  it("テキスト「react hook form」が表示されること", () => {
    render(<Page />);
    const headElement = screen.getByText("react hook form");
    expect(headElement).toBeInTheDocument();
  });
});
