// Sums a list using the "add" function defined in the file "add.js".
function addList(l) {
    var out = 0,
        i;

    for (i = 0; i < l.length; i += 1) {
        out = add(out, l[i]);
    }

    return out;
}
