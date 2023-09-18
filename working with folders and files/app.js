const fs = require("fs");
const path = require("path");

// get the details of a file using Node.js
async function stat() {
  try {
    const stats = await fs.statSync(
      "/Users/RTC/OneDrive/Desktop/java script.txt"
    );

    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.isSymbolicLink());
    console.log(stats.size);
  } catch (error) {
    console.error(error);
  }
}

// Interact with file paths and manipulate them in Node.js
async function filePath() {
  const javaScriptText = "/Users/RTC/OneDrive/Desktop/java script.txt";

  console.log(path.dirname(javaScriptText));
  console.log(path.basename(javaScriptText));
  console.log(path.extname(javaScriptText));

  const name = "moaz";
  const file = path.join("/", "users", name, "notes.txt");
  console.log(file);
}

// Interact with file descriptors using Node.js (reference to an open file)
async function getFileDescriptors() {
  fs.open("/Users/RTC/OneDrive/Desktop/java script.txt", "r", (err, fd) => {
    console.log(fd);
  });
}

// Read the content of the file
async function readingFilesWithNodejs() {
  fs.readFile(
    "/Users/RTC/OneDrive/Desktop/java script.txt",
    "utf8",
    (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    }
  );
}

// Writing to the file while deleting the existing content
async function writingFilesWithNodejs() {
  const content = "Some content!";

  fs.writeFile(
    "/Users/RTC/OneDrive/Desktop/java script.txt",
    content,
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );
}

// Writing to the file without deleting the existing content
async function AppendingContentToAFile() {
  const content = "Some content!";

  fs.appendFile(
    "/Users/RTC/OneDrive/Desktop/java script.txt",
    content,
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );
}

// Create the folder if it does not exist
async function workingWithFoldersInNodejs() {
  const folderName = "/Users/RTC/OneDrive/Desktop/moaz";

  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }
  } catch (error) {
    console.log(error);
  }
}

// read the content of a directory
async function readTheContentOfADirectory() {
  const folderName = "/Users/RTC/OneDrive/Desktop/moaz";

  const files = await fs.readdirSync(folderName);

  console.log(files);
}

// Rename the folder
async function renameFolder() {
  fs.rename(
    "/Users/RTC/OneDrive/Desktop/moaz",
    "/Users/RTC/OneDrive/Desktop/moazashraf",
    (err) => {
      if (err) console.log(err);
    }
  );
}

// remove a folder that has not contents
async function removeFolder() {
  const dir = "/Users/RTC/OneDrive/Desktop/moazashraf";
  fs.rmdir("/Users/RTC/OneDrive/Desktop/moazashraf", (err) => {
    if (err) {
      console.error(err);
    }

    console.log(`${dir} is deleted!`);
  });
}

// remove a folder that has contents
async function removeFolderThatHasContent() {
  const dir = "/Users/RTC/OneDrive/Desktop/moazashraf";

  fs.rm(dir, { recursive: true, force: true }, (err) => {
    if (err) {
      throw err;
    }
    console.log(`${dir} is deleted!`);
  });
}
