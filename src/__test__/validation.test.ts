import { isValidEmail } from "../validation"

describe('Email Validator', () => {
  test('should validate correct email addresses', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('user.name+tag+sorting@example.com')).toBe(true);
    expect(isValidEmail('example-indeed@strange-example.com')).toBe(true);
  });

  test('should invalidate incorrect email addresses', () => {
    expect(isValidEmail('plainaddress')).toBe(false);
    expect(isValidEmail('@missingusername.com')).toBe(false);
    expect(isValidEmail('username@.com')).toBe(false);
    expect(isValidEmail('username@com.')).toBe(false);
    expect(isValidEmail('username@com..com')).toBe(false);
    expect(isValidEmail('username@.com.')).toBe(false);
    expect(isValidEmail('username@com..')).toBe(false);
    expect(isValidEmail('username@com')).toBe(false); //
    expect(isValidEmail('user@domain,com')).toBe(false);
    expect(isValidEmail('x@com')).toBe(false);
  });
});