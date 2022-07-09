module.exports = {
    paths: {
        actualPdfRootFolder: process.cwd() + "/files/pdf/actual",
        baselinePdfRootFolder: process.cwd() + "/files/pdf/baseline",
        actualPngRootFolder: process.cwd() + "/files/png",
        baselinePngRootFolder: process.cwd() + "/files/png",
        diffPngRootFolder: process.cwd() + "/files/png"
    },
    settings: {
        density: 150,
        quality: 80,
        tolerance: 0,
        threshold: 0.1
    }
};