import { render, screen } from "@testing-library/react";
import MainContent from "./MainContent";
import userEvent from "@testing-library/user-event";

describe("MainContent", () => {
  it("should render a button", () => {
    render(<MainContent />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should show help area after clicking the button", async () => {
    render(<MainContent />);

    const button = screen.getByRole("button");
    await userEvent.click(button);

    expect(screen.getByTestId("help-are")).toBeInTheDocument();
  });
});
