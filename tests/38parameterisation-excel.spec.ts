//npm install xlsx
import { test } from '@playwright/test'


import * as fs from 'fs'
import * as XLSX from 'xlsx'
//load the excel file
const xlPath = 'test-datafiles/data_1.xlsx';
const workBook = XLSX.readFile(xlPath);
const sheetName = workBook.SheetNames[0];
const workSheet = workBook.Sheets[sheetName]


console.log(xlPath);

console.log(fs.existsSync(xlPath));
const fData: any = XLSX.utils.sheet_to_json(workSheet)


for (const { name, Age, Gender } of fData)
{
    test(`verify the details of ${name}`, async() => 
    {
        console.log("Family details are below:")
        console.log("Name of the person is:", name);
        console.log("Age of the person is :", Age)
        console.log("Gender of the person is :", Gender)
    });
}
