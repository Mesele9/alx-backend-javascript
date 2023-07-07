import Cpp from "./subjects/Cpp";
import Java from "./subjects/Java";
import React from "./subjects/React";

const cpp = new Cpp();
const java = new Java();
const react = new React();

const cTeacher = { firstName: "Mesele", lastName: "Assefa", experienceTeachingC: 10};

cpp.setTeacher(cTeacher);

console.log("C++");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

java.setTeacher(cTeacher);

console.log("Java");
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

react.setTeacher(cTeacher);

console.log("React");
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
