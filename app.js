var studentName= prompt("Enter Your Name");
var fName= prompt("Enter Your Father Name");
var eng= +prompt("Enter Your English Marks");
var maths= +prompt("Enter Your Maths Marks");
var urdu= +prompt("Enter Your Urdu Marks");
var fsx= +prompt("Enter Your Physics Marks");
var comSci= +prompt("Enter Your Computer Science Marks");
var total= eng + maths + urdu + fsx + comSci;
var per= total / 500 * 100;
var Grade;


if (per >= 80){
    Grade = "A1";
}
else if (per >= 70){
    Grade = "A";
}
else if (per >= 60){
    Grade = "B";
}
else if (per >= 50){
    Grade = "C";
}
else {
    Grade = "Fail";
}

document.write(`<table border="4px">
<tr>
    <td><b>Student Name</b></td>
    <td><b>Father Name</b></td>
    <td><b>English</b></td>
    <td><b>Maths</b></td>
    <td><b>Urdu</b></td>
    <td><b>Physics</b></td>
    <td><b>Computer Science</b></td>
    <td><b>Total Obtained Marks</b></td>
    <td><b>Percentage</b></td>
    <td><b>Grade</b></td>

</tr>
<tr>
<td> ${studentName}</td>
<td> ${fName}</td>
<td> ${eng}</td>
<td> ${maths}</td>
<td> ${urdu}</td>
<td> ${fsx}</td>
<td> ${comSci}</td>
<td> ${total}</td>
<td> ${per}%</td>
<td> ${Grade}</td>

</tr>
</table>`)