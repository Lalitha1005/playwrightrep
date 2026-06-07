import {test,expect,Locator} from "@playwright/test"


test.describe("Group2", async() =>
{
test("verify test1",async ({page})=> 
{
 console.log("test1")
});
test("verify test2",async ({page})=> 
{
 console.log("test2")
});
});

test.describe("Group1",async () =>
{
test("verify test3",async ({page})=> 
{
 console.log("test3")
});
test("verify test4",async ({page})=> 
{
 console.log("test4")
});
});