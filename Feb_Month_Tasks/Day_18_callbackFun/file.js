async function validateFile(file) {
    console.log("Validating file...");

    if (!file) {
        throw new Error("No file provided");
    }

    if (file.type !== "image/png") {
        throw new Error("Only image/png files are allowed");
    }

    if (file.size > 1024) {
        throw new Error("File size exceeds limit");
    }

    return file;
}


async function uploadFile(file) {
    try {
        console.log("Upload started");

        //validate file
        const validFile = await validateFile(file);

        console.log("File validated:", validFile.name);

        // upload 
        console.log("Uploading file...");

        const uploadResponse = {
            status: "success",
            fileName: validFile.name
        };

        console.log("Upload successful");

        return uploadResponse;

    } catch (err) {
        console.log("Error:", err.message);
    } finally {
        console.log("Upload process finished");
    }
}


(async () => {
    const file = {
        name: "image.png",
        type: "image/png",
        size: 500
    };

    const result = await uploadFile(file);
    console.log("Result:", result);
})();