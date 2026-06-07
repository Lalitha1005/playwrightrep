import { test } from '@playwright/test'



import {parse} from 'csv-parse/sync';
import {family} from '../test-datafiles/familyData.json';

    test("verify the details", async () => {
        console.log("Family details are below:")
        console.log("Name of the person is:", family.name);
        console.log("Age of the person is :", family.age)
        console.log("Gender of the person is :",family.gender)

    });