const MenuController = require("../controllers/MenuController");

describe("MenuController", () => {
  describe("#getContactCount()", () => {
    beforeEach(() => {
      this.menu = new MenuController();
    });
    it("should return 0 when no contacts are in the book", () => {
      expect(this.menu.getContactCount()).toBe(0);
    });
    it("should return 1 when there is exactly one contact in the book", () => {
      this.menu.book.addContact("Bob", "555-555-5555");
      expect(this.menu.getContactCount()).toBe(1)
    });
  })
})
