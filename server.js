
import http from "http";

const students = [
    { id: 1, name: "Sunitha", branch: "CSE", year: 3 },
    { id: 2, name: "Priya", branch: "CSE", year: 3 },
    { id: 3, name: "Rahul", branch: "ECE", year: 2 }
];

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify(students, null, 2));
});

server.listen(process.env.PORT || 3000, "0.0.0.0", () => {
    console.log("Student HTTP JSON Server running");
});

