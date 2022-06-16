// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import open = require("open");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "Search" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand("Search.helloWorld", () => {
    // The code you place here will be executed every time your command is executed
    // Display a message box to the user
    vscode.window.showInformationMessage("Hello World from EngHub+!");
  });

  const searchInternalStackOverflow = vscode.commands.registerCommand(
    "Search.internalStackOverflow",
    () => {
      const editor = vscode.window.activeTextEditor;

      if (!editor) {
        return;
      }

      const text = editor.document.getText(editor.selection);

      var url = `https://stackoverflow.microsoft.com/search?q=${text}`;

      open(url);
    }
  );

  const searchEngineeringHub = vscode.commands.registerCommand(
    "Search.engineeringHub",
    () => {
      const editor = vscode.window.activeTextEditor;

      if (!editor) {
        return;
      }

      const text = editor.document.getText(editor.selection);

      var url = `https://eng.ms/search?q=${text}`;

      open(url);
    }
  );

  const searchStackOverflow = vscode.commands.registerCommand(
    "Search.stackOverflow",
    () => {
      const editor = vscode.window.activeTextEditor;

      if (!editor) {
        return;
      }

      const text = editor.document.getText(editor.selection);

      var url = `https://stackoverflow.com/search?q=${text}`;

      open(url);
    }
  );

  const OPEN_EVERYTHING_NOW = vscode.commands.registerCommand(
    "Search.everything",
    () => {
      const editor = vscode.window.activeTextEditor;

      if (!editor) {
        return;
      }

      const text = editor.document.getText(editor.selection);

      var url = `https://stackoverflow.com/search?q=${text}`;
      open(url);

      url = `https://eng.ms/search?q=${text}`;
      open(url);

      url = `https://eng.ms/search?q=${text}`;
      open(url);
    }
  );

  context.subscriptions.push(disposable);

  context.subscriptions.push(searchInternalStackOverflow);
  context.subscriptions.push(searchEngineeringHub);
  context.subscriptions.push(searchStackOverflow);
  context.subscriptions.push(OPEN_EVERYTHING_NOW);
}

// this method is called when your extension is deactivated
export function deactivate() {}
