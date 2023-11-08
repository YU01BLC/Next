import React, { useEffect } from "react";
import Error from "../app/error";

export default function ErrorWrapper() {
  const mockError: Error & {
    digest?: string;
  } = new Error("テスト用エラーメッセージ");

  useEffect(() => {
    console.error("An error occurred:", mockError);
  }, []);

  return <Error error={mockError} reset={() => {}} />;
}
