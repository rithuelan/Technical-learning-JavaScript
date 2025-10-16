"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// A simple class decorator
function Logger(constructor) {
    console.log(`📘 Class Created: ${constructor.name}`);
}
// Corrected Method Decorator
function LogMethod(target, propertyKey, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`🟢 Method Called: ${propertyKey} with args: ${JSON.stringify(args)}`);
        return original.apply(this, args);
    };
    return descriptor; // ✅ always return descriptor
}
@Logger
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
    @LogMethod
    study(subject) {
        console.log(`${this.name} is studying ${subject}.`);
    }
}
const s1 = new Student("Rithiha");
s1.study("TypeScript");
//# sourceMappingURL=decorators.js.map