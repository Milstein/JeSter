/**
 * Example JeSter configuration file.
 */
registerConfig({
    // The directory in which the JavaScript files to be tested lives. Must be a subdirectory of the directory in which jester.html lives. The JavaScript files may be organized into subdirectories if desired.
    "jsBase": "example_js/",

    // The directory in which the unit tests live. Must be a subdirectory of the directory in which jester.html lives.
    "testBase": "example_tests/",

    // A list of the unit test files relative to the testBase directory defined above.
    "testFiles": [
        "add_test.js",
        "add_list_test.js"
    ]
});
