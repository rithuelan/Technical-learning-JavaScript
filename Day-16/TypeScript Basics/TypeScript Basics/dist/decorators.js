"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ---------------------------
// Class Decorator
// ---------------------------
function Logger(constructor) {
    console.log(`📘 Class Created: ${constructor.name}`);
}
// ---------------------------
// Method Decorator
// ---------------------------
function LogMethod(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`🟢 Method Called: ${propertyKey} with args: ${JSON.stringify(args)}`);
        const result = originalMethod.apply(this, args);
        console.log(`🔵 Method Result: ${result}`);
        return result;
    };
    return descriptor;
}
// ---------------------------
// Class using decorators
// ---------------------------
let Student = class Student {
    constructor(name) {
        this.name = name;
    }
    // ✅ Method must be a standard class method, NOT an arrow function
    study(subject) {
        console.log(`${this.name} is studying ${subject}.`);
        return "Done";
    }
    sleep(hours) {
        console.log(`${this.name} is sleeping for ${hours} hours.`);
        return "Slept well";
    }
};
__decorate([
    LogMethod
], Student.prototype, "study", null);
__decorate([
    LogMethod
], Student.prototype, "sleep", null);
Student = __decorate([
    Logger
], Student);
// ---------------------------
// Test
// ---------------------------
const s1 = new Student("Rithiha");
s1.study("TypeScript");
s1.sleep(8);
