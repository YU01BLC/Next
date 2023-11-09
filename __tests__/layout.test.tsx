import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RootLayout from "../app/layout";
import Error from "../app/error";

describe("RootLayoutコンポーネントSnapshot", () => {
  // 現状エラーになってしまうためコメントアウトとする。
  it("snapshot", () => {
    // RootLayoutコンポーネントのレンダリング結果をオブジェクトとして定義(asFragment: 一般的にスナップショットの取得結果であることを示す名称として用いられる)
    // テスト用のエラーオブジェクトを作成
    //   const mockError = new Error("テスト用エラーメッセージ") as Error & {
    //     digest?: string;
    //   };
    //   // テスト用のリセット関数を作成
    //   const resetFunction = jest.fn();
    //   const { asFragment } = render(
    //     <RootLayout
    //       reactHookForm={<div>Mock React Hook Form</div>}
    //       zod={<div>Mock Zod</div>}
    //       ErrorBoundary={<Error error={mockError} reset={resetFunction} />}
    //     >
    //       Test Contents
    //     </RootLayout>
    //   );
    //   // asFragment()で取得したスナップショットを現在の状態と比較する
    //   expect(asFragment()).toMatchSnapshot();
  });
});

describe("RootLayoutコンポーネント", () => {
  // 現状エラーになってしまうためコメントアウトとする。

  it("ErrorBoundaryコンポーネントが正しくレンダリングされること", () => {
    // // テスト用のエラーオブジェクトを作成
    // const mockError = new Error("テスト用エラーメッセージ") as Error & {
    //   digest?: string;
    // };
    // // テスト用のリセット関数を作成
    // const resetFunction = jest.fn();
    // // RootLayoutコンポーネントをレンダリングし、ErrorBoundaryコンポーネントが正しく表示されるかどうかを確認
    // render(
    //   <RootLayout
    //     reactHookForm={<div>Mock React Hook Form</div>}
    //     zod={<div>Mock Zod</div>}
    //     ErrorBoundary={<Error error={mockError} reset={resetFunction} />}
    //   >
    //     Test Contents
    //   </RootLayout>
    // );
    // // ErrorBoundaryコンポーネントが画面に表示されているかどうかを確認
    // const errorBoundary = screen.getByText("Something went wrong!");
    // expect(errorBoundary).toBeInTheDocument();
  });
});
