/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[0] - b[0]);
    let arrows = 0;
    let arrow = points[0].slice();
    for (let i = 1; i < points.length; i++) {
        if (arrow[0] <= points[i][1] && points[i][0] <= arrow[1]) {
            arrow[0] = points[i][0];
            arrow[1] = Math.min(arrow[1], points[i][1]);
        } else {
            arrows++;
            arrow = points[i].slice();
        }
    }
    return arrows + 1;;
};