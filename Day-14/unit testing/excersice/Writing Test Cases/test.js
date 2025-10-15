test('checks uppercase conversion', () => {
  // Arrange
  const input = 'hello';
  
  // Act
  const output = input.toUpperCase();
  
  // Assert
  expect(output).toBe('HELLO');
});
