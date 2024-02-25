import * as vscode from "vscode";

test("Extension should be activated", async () => {
	const ext =
		vscode.extensions.getExtension<vscode.ExtensionContext>("senken.raw-sqler");
	const context = await ext?.activate();
	if (!context) {
		throw new Error("context is undefined");
	}
	expect(context).toBeDefined();
});
