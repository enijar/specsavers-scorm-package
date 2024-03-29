import * as path from "node:path";
import * as url from "node:url";
import * as fs from "node:fs/promises";
import { execSync } from "child_process";
import { zip } from "zip-a-folder";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VERSION: "1.2" | "2004" = "2004";
const ROOT_DIR = path.resolve(__dirname, "..");
const SCORM_DIR = path.join(ROOT_DIR, "scorm");
const PACKAGES_DIR = path.join(ROOT_DIR, "packages");
const BUILD_DIR = path.join(ROOT_DIR, "build");

const config = {
  name: "Specsavers SCORM Package",
};

function replaceTemplate(template: string, key: string, value: string): string {
  const regex = new RegExp(`::${key}::`, "gmi");
  return template.replace(regex, value);
}

async function getAllFiles(dir: string, allFiles: string[] = []): Promise<string[]> {
  const files = await fs.readdir(dir);

  await Promise.all(
    files.map(async (file) => {
      try {
        const filePath = path.join(dir, file);
        const stat = await fs.stat(filePath);
        if (stat.isDirectory()) {
          allFiles = await getAllFiles(filePath, allFiles);
        } else {
          allFiles.push(filePath);
        }
      } catch (err) {
        console.error(err);
        process.exit(1);
      }
    }),
  );

  return allFiles;
}

(async () => {
  try {
    const pkg = JSON.parse(await fs.readFile(path.join(ROOT_DIR, "package.json"), "utf-8"));

    execSync(`rm -rf ${path.join(PACKAGES_DIR, "build")}`, { stdio: "inherit" });
    execSync(`cp -R ${BUILD_DIR} ${path.join(PACKAGES_DIR, "build")}`, { stdio: "inherit" });

    const manifestTemplate = await fs.readFile(path.join(SCORM_DIR, `imsmanifest-${VERSION}.xml`), "utf-8");
    const files = await getAllFiles(BUILD_DIR);

    let manifest = replaceTemplate(manifestTemplate, "name", config.name);
    manifest = replaceTemplate(
      manifest,
      "files",
      files
        .map((file) => {
          const href = file.replace(BUILD_DIR, ".");
          return `<file href="${href}"/>`;
        })
        .join("\n"),
    );
    manifest = replaceTemplate(manifest, "version", String(pkg.version));

    execSync(`cp -R ${path.join(SCORM_DIR, VERSION, "*")} ${path.join(PACKAGES_DIR, "build")}`);
    await fs.writeFile(path.join(PACKAGES_DIR, "build", "imsmanifest.xml"), manifest);

    await zip(path.join(PACKAGES_DIR, "build"), path.join(PACKAGES_DIR, "build.zip"));

    execSync(`rm -rf ${path.join(PACKAGES_DIR, "build")}`, { stdio: "inherit" });

    await fs.rename(
      path.join(PACKAGES_DIR, "build.zip"),
      path.join(PACKAGES_DIR, `${config.name.toLowerCase()}-${pkg.version}.zip`),
    );

    console.log("SCORM package generated successfully");

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
