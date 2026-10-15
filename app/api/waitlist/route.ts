import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

interface WaitlistEntry {
  email: string
  integrationType: string
  explorationGoal?: string
  organization?: string
  role?: string
  roleType?: string
  createdAt: string
  ip?: string
  userAgent?: string
}

const DATA_DIR = path.join(process.cwd(), "data")
const WAITLIST_FILE = path.join(DATA_DIR, "waitlist.json")

function getWaitlist(): WaitlistEntry[] {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true })
    }
    if (!fs.existsSync(WAITLIST_FILE)) {
      fs.writeFileSync(WAITLIST_FILE, JSON.stringify([], null, 2), "utf8")
      return []
    }
    const content = fs.readFileSync(WAITLIST_FILE, "utf8")
    return JSON.parse(content)
  } catch (err) {
    console.warn("Could not read waitlist file:", err)
    return []
  }
}

function saveWaitlist(entries: WaitlistEntry[]) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true })
    }
    fs.writeFileSync(WAITLIST_FILE, JSON.stringify(entries, null, 2), "utf8")
  } catch (err) {
    console.warn("Could not save waitlist file:", err)
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, integrationType, explorationGoal, organization, role, roleType } = body

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid work or protocol email address is required." },
        { status: 400 },
      )
    }

    const entries = getWaitlist()
    const normalizedEmail = email.trim().toLowerCase()

    const existingIndex = entries.findIndex((e) => e.email.toLowerCase() === normalizedEmail)

    const entry: WaitlistEntry = {
      email: normalizedEmail,
      integrationType: integrationType || "institutional-pilot",
      explorationGoal: explorationGoal?.trim() || "",
      organization: organization?.trim() || "",
      role: role?.trim() || "",
      roleType: roleType?.trim() || "",
      createdAt: new Date().toISOString(),
      userAgent: request.headers.get("user-agent") || undefined,
    }

    if (existingIndex >= 0) {
      entries[existingIndex] = { ...entries[existingIndex], ...entry }
    } else {
      entries.push(entry)
    }

    saveWaitlist(entries)

    return NextResponse.json({
      success: true,
      message: "Priority beta spot reserved. Our architecture team will reach out for onboarding.",
      position: existingIndex >= 0 ? existingIndex + 1 : entries.length,
      email: normalizedEmail,
    })
  } catch (error) {
    console.error("Waitlist submission error:", error)
    return NextResponse.json(
      { error: "Internal server error. Please try again or reach out to hi@zcred.xyz." },
      { status: 500 },
    )
  }
}

export async function GET() {
  const entries = getWaitlist()
  return NextResponse.json({
    totalCount: entries.length,
    status: "active",
  })
}
