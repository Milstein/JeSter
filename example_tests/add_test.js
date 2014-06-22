// Example test for add.js .
registerTests({
    "tests": [
        {
            "name": "Add",
            "description": "Tests the functionality of the add function.",
            "files": ["add.js"],
            "func": function (t) {
                var ans = add(1, 2),
                    expAns = 1 + 2;

                if (ans !== expAns) {
                    t.fail("add() produced incorrect answer. Expected: " + expAns + ". Got: " + ans + ".");
                }
            }
        }
    ]
});
