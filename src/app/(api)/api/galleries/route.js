import { fetchGalleries } from "@/lib/data.service"
import { NextResponse } from "next/server"

export async function GET(request) {

    let galleries = await fetchGalleries()

    return NextResponse.json(galleries)

}
