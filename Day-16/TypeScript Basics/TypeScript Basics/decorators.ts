// ---------------------------
// Class Decorator
// ---------------------------
function Logger(constructor: Function) {
  console.log(`📘 Class Created: ${constructor.name}`);
}

// ---------------------------
// Method Decorator
// ---------------------------
function LogMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
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
@Logger
class Student {
  constructor(public name: string) {}

  // ✅ Method must be a standard class method, NOT an arrow function
  @LogMethod
  study(subject: string) {
    console.log(`${this.name} is studying ${subject}.`);
    return "Done";
  }

  @LogMethod
  sleep(hours: number) {
    console.log(`${this.name} is sleeping for ${hours} hours.`);
    return "Slept well";
  }
}

// ---------------------------
// Test
// ---------------------------
const s1 = new Student("Rithiha");
s1.study("TypeScript");
s1.sleep(8);
