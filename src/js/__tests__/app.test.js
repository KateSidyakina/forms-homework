import { togglePopover, showPopover, hidePopover } from "../app";

describe("App", () => {
  beforeEach(() => {
    document.body.innerHTML =
      "<button class='button' id='popover-trigger'>Click to toggle popover</button><div class='popover' id='popover-container'><h3>Popover Title</h3><p>And here`s some amazing content. It`s very engaging. Right?</p></div>";
  });

  test("togglePopover should show popover if it's hidden", () => {
    const triggerButton = document.getElementById("popover-trigger");
    const popoverContainer = document.getElementById("popover-container");

    popoverContainer.style.display = "none";

    togglePopover(triggerButton, popoverContainer);
    expect(popoverContainer.style.display).toBe("block");
  });

  test("togglePopover should hide popover if it's visible", () => {
    const triggerButton = document.getElementById("popover-trigger");
    const popoverContainer = document.getElementById("popover-container");

    popoverContainer.style.display = "block";
    togglePopover(triggerButton, popoverContainer);
    expect(popoverContainer.style.display).toBe("none");
  });

  test("showPopover should correctly calculate popover position", () => {
    const triggerButton = document.getElementById("popover-trigger");
    const popoverContainer = document.getElementById("popover-container");

    showPopover(triggerButton, popoverContainer);

    const top = parseInt(popoverContainer.style.top);
    const left = parseInt(popoverContainer.style.left);

    expect(top).toBeGreaterThanOrEqual(0);
    expect(left).toBeGreaterThanOrEqual(0);
  });

  test("hidePopover should hide the popover", () => {
    const popoverContainer = document.getElementById("popover-container");

    hidePopover(popoverContainer);
    expect(popoverContainer.style.display).toBe("none");
  });
});
