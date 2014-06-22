JeSter - The JS Tester
======================
JeSter is an extremely simple JS unit testing framework which runs in your
browser. (Though, currently only Firefox is supported.)

There's no development web server to contend with, nor any dependency on a JS
runtime like node.js which must be installed separately. (The only JS runtime
required is the JS runtime integrated into your browser.) To use JeSter in your
project, simply place a copy of jester.html in your code repository, write a
jester_config.js, write a unit test, and point your browser at the url to where
jester.html lives on your hard drive.

JeSter supports stubbing (also known as "mocking" or "monkeypatching"). So, you
can easily import *only* the code you wish to test without involving any
dependencies. Even most browser built-ins may be stubbed!

This repository contains example code to be tested as well as example tests
which test these examples. See jester_config.js in this repository for an
example JeSter configuration and see the JS files in the example_js and
example_test directories for examples of how the unit tests interact with the
code to be tested.

Legal Stuff
===========
Copyright 2014 Richard Anderson

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.
