/* Problem 4 statement:  Function Name Must be: bonusScore
একটি Programming Contest-এ প্রতিটি Participant-এর Score একটি Number Array আকারে দেওয়া আছে।

Contest শেষে প্রত্যেক Participant-এর Score-এর সাথে ১০ Bonus Marks যোগ করা হবে। এরপর সব Updated Score যোগ করে Total Score Return করতে হবে।

Input:
একটি Number Array, যেমনঃ 
[80, 65, 90, 75]

Output:
350

Explanation:
Updated Scores: (প্রত্যেকের সাথে 10 যোগ করে)
[90, 75, 100, 85]
Total: 
90 + 75 + 100 + 85 = 350


Challenge
Return "Invalid" যদি—
Input Array না হয়।
Array Empty হয়।
Array-এর মধ্যে Number ছাড়া অন্য কোনো Data Type থাকে। */

function bonusScore(scores) {
    if (!Array.isArray(scores) || scores.length === 0) {
        return "Invalid";
    }
    for (const score of scores) {
        if (typeof score !== "number") {
            return "Invalid";
        }
    }

    const updatedScores = scores.map(score => score + 10);

    const total = updatedScores.reduce((sum, score) => sum + score, 0);

    return total;
}

console.log(bonusScore([80, 65, 90, 75]))
console.log(bonusScore([100]))
console.log(bonusScore([0, 10]))
console.log(bonusScore([]))
console.log(bonusScore("scores"))
console.log(bonusScore([80, "90", 70]))