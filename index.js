const comparePdf = require("compare-pdf");
const config = require("./config");

async function execute() {
    await new comparePdf(config)
        .actualPdfFile("actualPdf")
        .baselinePdfFile("baselinePdf")
        .compare();
}

execute()