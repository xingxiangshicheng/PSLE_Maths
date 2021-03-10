function calculateColoredTriangles(figure) {
    var totalWhite = 0;
    //var totalGrey = 0;
    var totalTriangle = figure ** 2;
    var rowTriangle = 1;
    for (var level = 1; level <= figure; level++) {
        if (level % 2 == 1) {
            totalWhite += rowTriangle;
        }
        rowTriangle += 2;
    }
    console.log(`There are ${totalWhite} white triangles and ${totalTriangle - totalWhite} grey triangles in figure ${figure}.`);
}

calculateColoredTriangles(5);