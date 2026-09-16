import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET(request: Request) {
  try {
    const acceptHeader = request.headers.get("accept") || ""
    const url = new URL(request.url)
    const format = url.searchParams.get("format")

    const jsonFilePath = path.join(process.cwd(), "public", "zcred-apa-specification.json")
    const mdFilePath = path.join(process.cwd(), "public", "zcred-apa-specification.md")

    if (format === "markdown" || format === "text" || acceptHeader.includes("text/markdown") || acceptHeader.includes("text/plain")) {
      if (fs.existsSync(mdFilePath)) {
        const md = fs.readFileSync(mdFilePath, "utf8")
        return new NextResponse(md, {
          status: 200,
          headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=86400",
            "Access-Control-Allow-Origin": "*",
          },
        })
      }
    }

    if (fs.existsSync(jsonFilePath)) {
      const data = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"))
      return NextResponse.json(data, {
        status: 200,
        headers: {
          "Cache-Control": "public, max-age=3600, s-maxage=86400",
          "Access-Control-Allow-Origin": "*",
        },
      })
    }

    return NextResponse.json(
      { error: "APA specification file not found" },
      { status: 404 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to read agent specification" },
      { status: 500 }
    )
  }
}
