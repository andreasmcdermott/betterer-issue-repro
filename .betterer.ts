import { BettererFileTest } from "@betterer/betterer";

function countFiles(issue: string) {
  return new BettererFileTest(async (filePaths, fileTestResult) => {
    filePaths.forEach((filePath) => {
      const file = fileTestResult.addFile(filePath, "");
      file.addIssue(0, 0, issue);
    });
  });
}

export default {
  "should use typescript": () =>
    countFiles("use typescript instead of javascript")
      .include("**/*.{js,jsx}")
      .exclude(/node_modules/),
};
