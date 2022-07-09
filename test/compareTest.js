const comparePdf = require("compare-pdf");
const chai = require("chai");
const expect = chai.expect;
const config = require("../config");

describe("Compare Pdf Tests in Mocha + Chai", () => {
    it("Should be able to compare pdfs by image", async () => {
        let comparisonResults = await new comparePdf(config)
            .actualPdfFile("actualPdf")
            .baselinePdfFile("baselinePdf")
            .compare();
        expect(comparisonResults.status).to.equal("passed");
    });
});