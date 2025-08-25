const {mwst, brutto} = require("./mehrwertsteuer.js");

test("Die Prozentrechnung, 7% von 100 soll 7 ergeben", () => {
    expect(mwst(100, 0.07)).toBe(7);
});

test("Mehrwertsteuer (19%) von 200 soll 38 ergeben", () => {
    expect(mwst(200)).toBe(38);
});

test("Bei einem Betrag von 0 sollen auch 0 Euro steuern ausgegeben werden", () => {
    expect(mwst(0)).toBe(0);
});

test("Bei 100 Euro Netto mit 19% sollen 119 Euro Brutto ausgegeben werden", () => {
    expect(brutto(100)).toBe(119);
});

test("Bei 50 Euro Netto mit 7% sollen 53,5 Euro Brutto ausgegeben werden", () => {
    expect(brutto(50, 0.07)).toBe(53.5);
});