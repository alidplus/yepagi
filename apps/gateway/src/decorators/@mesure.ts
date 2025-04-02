function Measure(target: any, propertyName: string, propertyDescriptor: PropertyDescriptor): PropertyDescriptor {
  const method = propertyDescriptor.value;
  propertyDescriptor.value = function (...args: any[]) {
      const start = performance.now();
      const result = method.apply(this, args);
      const end = performance.now();
      console.log(`${propertyName} took ${end - start} milliseconds`);
      return result;
  };
  return propertyDescriptor;
}