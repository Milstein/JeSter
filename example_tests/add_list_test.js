// Example test for add_list.js .
registerTests({
    "setup": function (t) {
        t.addArgs = [];

        t.stub("add", function (a, b) {
            t.addArgs.push(arguments);
            return a + b;
        });
    },
    "tests": [
        {
            "name": "Add List",
            "description": "Tests the functionality of the addList function.",
            "files": ["add_list.js"],
            "func": function (t) {
                var ans = addList([1,2,3]),
                    expArgs = [ [0, 1], [1, 2], [3, 3] ],
                    expAns = 1 + 2 + 3,
                    i,
                    j;

                if (ans !== expAns) {
                    t.fail("addList() produced an incorrect return value. Expected: " + expAns + ". Got: " + ans + ".");
                }

                if (t.addArgs.length !== expArgs.length) {
                    t.fail("addList() called add() an incorrect number of times. Expected: " + expArgs.length + ". Got: " + t.addArgs.length + ".");
                }

                for (i = 0; i < t.addArgs.length && i < expArgs.length; i += 1) {
                    if (t.addArgs[i].length !== expArgs[i].length) {
                        t.fail("addList() called add() with an incorrect number of arguments on iteration " + i + ". Expected: " + expArgs.length + ". Got: " + t.addArgs[i].length + ".");
                    }
                    for (j = 0; j < t.addArgs[i].length && j < expArgs[i].length; j += 1) {
                        if (t.addArgs[i][j] !== expArgs[i][j]) {
                            t.fail("addList() called add() with incorrect number of arguments on iteration " + i + " argument number " + j + ". Expected: " + expArgs[i][j] + ". Got: " + t.addArgs[i][j] + ".");
                        }
                    }
                }
            }
        }
    ]
});
