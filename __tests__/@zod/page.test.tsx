import { render, screen } from "@testing-library/react";
import Page from "../../app/@zod/page";

describe("@zod/Pageコンポーネントscreenshot", () => {
  it("snapshot", () => {
    const { asFragment } = render(<Page />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("@zod/Pageコンポーネント表示確認", () => {
  it("テキスト「zod」が表示されること", () => {
    render(<Page />);
    const headElement = screen.getByText("zod");
    expect(headElement).toBeInTheDocument();
  });
});
