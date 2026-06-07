import {test,expect,Locator} from "@playwright/test"

test.beforeAll("before all test",async()=>
{
console.log("before all test runs")
});
test.afterAll("after all test",async()=>
{
console.log("after all test runs")
});

test.beforeEach("before each test",async()=>
{
console.log("before each test runs")
});
test.afterEach("after each test",async()=>
{
console.log("after each test runs")
});
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