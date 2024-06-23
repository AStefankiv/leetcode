const filename = 'index.html';

const extension = (filename) => {
    const ext = filename.split('.').pop();
    return ext;
}

console.log(extension(filename)); // html