/* Find and fix every bug. Do not change the function name. */
function generateLeaderboard(students) {
    if (!Array.isArray(students)){
        return "Invalid";
    }

    if (students.length === 0) {
    return "Invalid";
    }

    const qualified = students.filter(student => {
        student.score >= 70;
    });

    const names = qualified.map(({ name }) => {
        name.toUpperCase();
    });

    return names.slice(0, 2);
}

