import data from "@/lib/data";
import dbConnect from "@/lib/dbConnect";
import ProductModel from "@/lib/models/ProductModel";
import UserModel from "@/lib/models/UserModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
    const { users, product } = data
    await dbConnect()
    await UserModel.deleteMany()
    await UserModel.insertMany(users)

    await ProductModel.deleteMany()
    await ProductModel.insertMany(product)

    return NextResponse.json({
        message: 'seeded successfully',
        users,
        product,
      })
  
}