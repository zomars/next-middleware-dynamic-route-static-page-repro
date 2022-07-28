import { NextRequest, NextResponse } from "next/server";

const middleware = async (req: NextRequest) => {
  console.log(req.url);
  return NextResponse.next();
};

export default middleware;
