function welcome(student: string): string {
    return `Welcome, ${student}!`;
}

function getCollege(college: string = "SVECW"): string {
    return `College: ${college}`;
}

function sendEmail(email: string, subject?: string): void {
    console.log(`Sending email to ${email}`);
    if (subject) {
        console.log(`Subject: ${subject}`);
    }
}

function totalMarks(...marks: number[]): number {
    return marks.reduce((sum, mark) => sum + mark, 0);
}

console.log(welcome("Akanksha"));

console.log(getCollege());
console.log(getCollege("bhimavaram"));

sendEmail("pravallika@gmail.com");
sendEmail("pravallika.com", "Lab Submission");

const total = totalMarks(85, 90, 88, 95);
console.log(`Total Marks: ${total}`);
