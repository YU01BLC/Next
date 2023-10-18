import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RootLayout from "../app/layout";

describe("RootLayoutコンポーネントSnapshot", () => {
  it("snapshot", () => {
    // RootLayoutコンポーネントのレンダリング結果をオブジェクトとして定義(asFragment: 一般的にスナップショットの取得結果であることを示す名称として用いられる)
    const { asFragment } = render(<RootLayout>Test Contents</RootLayout>);
    // asFragment()で取得したスナップショットを現在の状態と比較する
    expect(asFragment()).toMatchSnapshot();
  });
});
describe("RootLayoutコンポーネント表示確認", () => {
  it("テキスト「Test Contents」が表示されること", () => {
    // RootLayoutの子要素表示確認のため仮想的に「Test Contents」提供して確認を行う
    render(<RootLayout>Test Contents</RootLayout>);
    // 「Hello, Next.js!」というテキストを含む要素を取得
    const dummyContents = screen.getByText("Test Contents");
    // 取得した上記要素が画面上に存在することを確認
    expect(dummyContents).toBeInTheDocument();
  });
});
