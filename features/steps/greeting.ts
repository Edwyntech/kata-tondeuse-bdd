import {Then, When} from "@cucumber/cucumber";
import * as assert from "assert";
import {Greeter} from "../../src";

When('the greeter says hello', function () {
	this.whatIHeard = new Greeter().sayHello()
})

Then('I should have heard {string}', function (expectedResponse) {
	assert.equal(this.whatIHeard, expectedResponse)
})