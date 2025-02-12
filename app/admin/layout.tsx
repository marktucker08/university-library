import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";
import "@/styles/admin.css";
import Sidebar from "@/components/admin/sidebar";
import Header from "@/components/admin/Header";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";


const Layout = async ({children}: { children: ReactNode }) => {
    const session = await auth();

    if (!session?.user?.id) redirect("/sign-in");

    console.log('session.user.id:', session.user.id);

    const isAdmin = await db
        .select({ isAdmin: users.role })
        .from(users)
        .where(eq(users.id, session.user.id))
        .limit(1)
        .then((res) => res[0]?.isAdmin === "ADMIN");

    // try {
    //     const result = await db
    //         .select({ isAdmin: users.role })
    //         .from(users)
    //         .where(eq(users.id, session.user.id))   
    //         .limit(1);
    
    //     const isAdmin = result[0]?.isAdmin === "ADMIN";
    //     console.log('isAdmin:', isAdmin);
    // } catch (error) {
    //     console.error('Error fetching admin status:', error);
    //     const isAdmin = false;
    // }

    if (!isAdmin) redirect("/");

    return (
        <main className="flex min-h-screen w-full flex-row">
            <Sidebar session={session} />

            <div className="admin-container">
                <Header session={session} />
                {children}
            </div>
        </main>
    );
};

export default Layout;