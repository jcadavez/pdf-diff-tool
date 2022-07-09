const comparePdf = require("compare-pdf");
const chai = require("chai");
const config = require("./config");

async function execute() {
    await new comparePdf(config)
        .actualPdfFile("actualPdf")
        .baselinePdfFile("baselinePdf")
        .compare();
}

execute()