import getHealth from './health';

console.log(getHealth({ name: 'Маг', health: 90 }));
// это для того, чтобы Eslint проглотил 'get Health' is defined but never used  no-unused-vars
