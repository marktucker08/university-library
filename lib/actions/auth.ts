"use server";

import { eq } from "drizzle-orm";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

const signUp = async (params: AuthCredentials) => {
    const { fullName, email, universityId, password, universityCard } = params;

    
};