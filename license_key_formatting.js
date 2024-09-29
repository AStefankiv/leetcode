// const licenseKey = "5F3Z-2e-9-w"
// const characters = 4

// const alphanumericString = licenseKey.replace(/[^a-zA-Z0-9]/g, '');
// console.log(alphanumericString);

// const splitByFour = alphanumericString.match(new RegExp(`.{1,${characters}}`, 'g')).join('-').toUpperCase();
// console.log(splitByFour);

const licenseKeyFormatting = (licenseKey, characters) => {
  const alphanumericString = licenseKey.replace(/[^a-zA-Z0-9]/g, '');
  return alphanumericString.match(new RegExp(`.{1,${characters}}`, 'g')).join('-').toUpperCase();
}

console.log(licenseKeyFormatting(licenseKey, characters)); // "5F3Z-2E9W"
const licenseKey2 = "2-5g-3-J"
const characters2 = 2
console.log(licenseKeyFormatting(licenseKey2, characters2)); // "2-5G-3J"