import { test } from '@playwright/test'

import * as fs from 'fs'

const jsonPath = 'test-datafiles/familyData.json';

console.log(jsonPath);
console.log("json path is:", jsonPath)
console.log(fs.existsSync(jsonPath));
const jsonData: any = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

for (const s of jsonData)
     {
test(`verify the details of ${s.name}`, async () => {
    console.log("Family details are below:")
    console.log("Name of the person is:", s.name);
    console.log("Age of the person is :", s.age)
    console.log("Gender of the person is :", s.gender)

});
}

