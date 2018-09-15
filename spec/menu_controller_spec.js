const MenuController = require("../controllers/MenuController");

describe("MenuController", () => {

  describe("#delete()", () => {
    it("should not remove any contacts that do not match the ID passed", (done) => {
      this.book.addContact("Rick Deckard", "000-000-000", "null@null.com")
      .then(() => {
        this.book.getContacts()
        .then((contacts) => {
          expect(contacts[0].name).toBe("Rick Deckard");
          expect(contacts.length).toBe(1);
          this.book.delete(99)
          .then(() => {
            this.book.getContacts()
            .then((contacts) => {
              expect(contacts.length).toBe(1);
              done();
            })
            .catch((err) => {
              console.log(err);
              done();
            });
          });
        });
      });
    });

    it("should remove the contact that matches the ID passed", (done) => {

      this.book.addContact("Rick Deckard", "000-000-000", "null@null.com").then((contact) => {
        this.book.getContacts()
        .then((contacts) => {
          expect(contacts[0].name).toBe("Rick Deckard");
          expect(contacts.length).toBe(1);
          this.book.delete(contact.id)
          .then(() => {
            this.book.getContacts()
            .then((contacts) => {
              expect(contacts.length).toBe(0);
              done();
            })
            .catch((err) => {
              console.log(err);
              done();
            });
          });
        });
      });
    });
  });
});
