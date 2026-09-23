import {test} from '@playwright/test';

test.describe("Test Group", () => {

    test.beforeAll(async () => {
        console.log("Before All is executed");
    });

    test.afterAll(async () => {
        console.log("After All is executed");
    });

    test.beforeEach(async () => {
        console.log("Before Each is executed");
    });

    test.afterEach(async () => {
        console.log("After Each is executed");
    });

    test("Test case 1", async () => { 
        console.log("Test Case 1 is exected");
    });

    test("Test case 2", async () => {
        console.log("Test Case 2 is exected");
    });


    test("Test case 3. ", async () => {
        console.log("Test Case 3 is exected");
    });

    test("Test case 4. ", async () => {
        console.log("Test Case 4 is exected");
    });

});